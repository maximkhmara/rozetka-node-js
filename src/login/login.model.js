let users = [
  {
    id: 1,
    name: "Admin",
    password: "12345678",
  },
];

const findUserByUsername = (name) => {
  return users.find((user) => user.name === name);
};

module.exports = {
  findUserByUsername,
};
