const userModel = require("../../models/auth/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User

const registerController = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    //validation
    if (!name || !email || !password || !phone) {
      return res
        .status(400)
        .json({ msg: "Please enter all fields", status: 400 });
    }
    // check for existing user.
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists", status: 400 });
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create User.
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    res
      .status(200)
      .json({ msg: "User registered successfully", newUser, status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Login User

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    // check for existing user.
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User does not exist", status: 404 });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials", status: 400 });
    }

    //create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ token, user, msg: "User logged in successfully", status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { registerController, loginController };
