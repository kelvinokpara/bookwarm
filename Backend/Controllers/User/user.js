import UserModel from "../../models/User.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { jwtToken } from "../../util/generateToken.js";

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

    const saltrounds = 10;
    const passwordHash = await bcrypt.hash(data.password, saltrounds);

    const newUser = await UserModel.create({
      username: data.username,
      email: data.email,
      role: data.role,
      password: passwordHash,
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
  const data = req.body;

  const userExist = await UserModel.findOne({ email: data.email });
  if (!userExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "No user with the email exists.",
    });
  }

  const comparePasswords = async (plain, hashed) => {
    return bcrypt.compare(plain, hashed);
  };

  const checkPassword = await comparePasswords(
    data.password,
    userExist.password
  );
  if (!checkPassword) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      message: "Password is incorrect",
    });
    return;
  }

  res.status(httpStatus.OK).json({
    status: "success",
    data: userExist,
    token: jwtToken(userExist._id, userExist.email),
  });
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

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await UserModel.findOneAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "succes",
      data: "user successfully deleted:" + deleteUser,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: error.message,
    });
  }
};
