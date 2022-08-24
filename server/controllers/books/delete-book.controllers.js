const { CostumError } = require('../errors/server-error');
const { deleteBookById } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedB = await deleteBookById(id);
    if (deletedB.rowCount !== 1) { throw CostumError(`user with id: ${id} can not been found`, 404); }
    return res
      .status(201)
      .json({ massage: `user with id: ${id} name has been Deleted successfully` });
  } catch (err) {
    return next(err);
  }
};
