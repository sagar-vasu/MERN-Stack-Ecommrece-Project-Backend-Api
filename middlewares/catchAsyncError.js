module.exports = (theCatchError) => (req, res, next) => {
  Promise.resolve(theCatchError(req, res, next)).catch(next);
};
