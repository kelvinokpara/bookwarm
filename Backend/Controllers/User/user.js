import UserModel from "../../models/User.js";
import httpStatus from "http-status";

export const createUser = async (req, res) => {
  const data = req.body;
  try {
    const userExist = await UserModel.findOne({ username: data.username });
    if (userExist) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        data: "user with username exists",
      });
      return;
    }

    const emailExist = await UserModel.findOne({
      email: data.email,
    });
    if (emailExist) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        message: "User with email exists",
      });
      return;
    }

    const newUser = await UserModel.create({
      username: data.username,
      email: data.email,
      role: data.role,
      password: data.password,
    });

    res.status(httpStatus.CREATED).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "errordef",
      data: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  const users = await UserModel.find({});
  res.status(httpStatus.OK).json({
    status: "success",
    data: users,
  });
};

export const loginUser = async (req, res) => {
  const { username, password, email } = req.body;
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const findUser = await UserModel.findById({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      data: findUser,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: error.message,
    });
  }
};

export const updateUser = async (req, res) => {};
