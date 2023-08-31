const path = require("path");

const getUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "testing",
    });
  } catch (error) {
    console.log(error);
  }
};

const createuser = async (req, res) => {
  try {
    res.status(200).json({
      message: "uesr created",
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};

module.exports = { getUser, createuser };
