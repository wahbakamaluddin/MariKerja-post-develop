const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Test endpoint
const test = (req, res) => {
  res.json("test is working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      dateOfBirth: { day, month, year },
      gender,
      role,
    } = req.body;
    // Check if name was entered
    if (!firstname || !lastname) {
      return res.json({
        error: "First name and last name are required",
      });
    }
    // Check if password is valid
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it must be at least 6 characters",
      });
    }

    // Check if email is valid
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user in database
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      dateOfBirth: { day, month, year },
      gender,
      role,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "User and Password does not match",
      });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "User and Password does not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Get profile endpoint
const getProfile = (req, res) => {
  // Get token from cookies
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

// Export functions
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
