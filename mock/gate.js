// The Gate middleware allows defining custom handlers.
// The OpenAPI configuration uses a custom nodejs-express-server template,
// which is fetched from its original source and stored in this repository.
//
// The template should always be overwritten when re-fetched from the source,
// which is why it is committed to the repo and updated only when necessary.
//
// The generated server always exposes your API, while custom handlers provided
// through the Gate middleware are optional.

const gate = (req, res, next) => {
  if (req.path === '/api/sign-in') {
    res.send({
      token: 'example_token',
    });
  }
  next();
};

module.exports = gate;
