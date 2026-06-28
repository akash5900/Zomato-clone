const usermodel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function signup(req, res) {
  const { username, email, mobileNumber, password, role } = req.body;

  const isalreadyexist = await usermodel.findOne({
    email,
  });

  if (isalreadyexist) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  const user = await usermodel.create({
    username,
    email,
    mobileNumber,
    password: hashpassword,
    role: "buyer",
  });

  const token = jwt.sign(
    {
      id: user._id,
      role: user._role,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "user signup successfully",
    token,
    user: {
      username: user.username,
      email: user.email,
      mobileNumber: user.mobileNumber,
      password: user.password,
      role: user.role,
    },
  });
}

async function login(req, res) {
  const { mobileNumber, password } = req.body;

  const user = await usermodel.findOne({
    $or: [{ mobileNumber }],
  });

  if (!user) {
    return res.status(400).json({
      message: "user not existed",
    });
    console.log("error");
  }

  const ispasswordvalid = await bcrypt.compare(password, user.password);

  const token = jwt.sign(
    {
      id: user._id,
      role: user._role,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: " login successfully",
    token,
    user: {
      username: user.username,
      email: user.email,
      mobileNumber: user.mobileNumber,
      role: user.role,
    },
  });
}

async function logine(req, res) {
  const { email, password } = req.body;

  const user = await usermodel.findOne({
    $or: [{ email }],
  });

  if (!user) {
    return res.status(400).json({
      message: "user not existed",
    });
    console.log("error");
  }

  const ispasswordvalid = await bcrypt.compare(password, user.password);

  const token = jwt.sign(
    {
      id: user._id,
      role: user._role,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: " login successfully",
    token,
    user: {
      username: user.username,
      email: user.email,
      mobileNumber: user.mobileNumber,
      role: user.role,
    },
  });
}

async function profile(req, res) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "unauthorized token",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await usermodel.findById(decoded.id);

  if (!user) {
    return res.status(401).json({
      message: "user not existed",
    });
  }

  res.json({
    token,
    user,
  });
}

module.exports = {
  signup,
  login, 
  logine,
  profile,
};
