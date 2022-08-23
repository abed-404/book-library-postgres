const { getBook } = require('../../database/queries');
const { CostumError } = require('../errors/server-error');

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const book = (await getBook(id)).rows[0];
    if (!book) {
      throw CostumError(`user with id: ${id} can not been found`, 404);
    }
    return res.json(book);
  } catch (err) {
    return next(err);
  }
};
