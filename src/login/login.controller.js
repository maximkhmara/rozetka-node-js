const userModel = require("./login.model");

const loginAuthorization = async (request, response) => {
  const { username, password } = request.body;

  const user = userModel.findUserByUsername(username);

  if (user && user.password === password) {
    response.send({
      jwt: "poijpojp5hw5h45hwojw45yw45yw45h",
    });
  } else {
    response.status(401).send({
      message: "Unauthorized",
    });
  }
};

module.exports = {
  loginAuthorization,
};
