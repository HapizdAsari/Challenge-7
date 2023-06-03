const ApplicationError = require("./ApplicationError");

class RecordNotFoundError extends ApplicationError {
  // constructor(name) {
  //   (`${name} not found!`)
  // }
}

module.exports = RecordNotFoundError;
