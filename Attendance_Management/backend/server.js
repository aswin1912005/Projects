const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/attendanceDB")
.then(() => console.log("MongoDB connected"));

const UserSchema = new mongoose.Schema({
  userid: String,
  password: String,
  token: String,
  attendance: [
    {
      date: String,
      time: String,
      timestamp: String
    }
  ]
});

const User = mongoose.model("User", UserSchema);

// CREATE USER
app.get("/create", async (req, res) => {
  await User.create({
    userid: "21MCA001",
    password: "1234",
    attendance: []
  });
  res.send("User created");
});

// LOGIN
app.post("/login", async (req, res) => {
  const { userid, password } = req.body;

  const user = await User.findOne({ userid, password });
  if (!user) return res.json({ message: "Invalid login" });

  if (!user.token) {
    user.token = crypto.randomBytes(16).toString("hex");
  }

  const now = new Date();

  user.attendance.push({
    date: now.toISOString().split("T")[0],
    time: now.toTimeString().split(" ")[0],
    timestamp: now.toISOString()
  });

  await user.save();

  res.json({ message: "Attendance saved", token: user.token });
});

// AUTO ATTENDANCE
app.post("/auto", async (req, res) => {
  const { token } = req.body;

  const user = await User.findOne({ token });
  if (!user) return res.json({ message: "Login required" });

  const now = new Date();

  user.attendance.push({
    date: now.toISOString().split("T")[0],
    time: now.toTimeString().split(" ")[0],
    timestamp: now.toISOString()
  });

  await user.save();

  res.json({ message: "Attendance recorded" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
