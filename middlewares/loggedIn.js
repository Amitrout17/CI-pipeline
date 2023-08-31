const isAuthenticated = async (req, res, next) => {
  console.log("user logged in");
  next();
  console.log("after next");
};
module.exports = isAuthenticated;
