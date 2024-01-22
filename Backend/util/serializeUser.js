export const serialize = (user) => {
  if (user.password) {
    const { password, _id, username, email, role } = user;
    console.log(user);
    return { _id, username, email, role };
  }
  return user;
};
