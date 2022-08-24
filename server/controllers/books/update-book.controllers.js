/* eslint-disable prefer-const */
const { validateBook } = require('../../util');
const { CostumError } = require('../errors/server-error');
const { updateBookById, getBookById } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await validateBook(req.body, req.method);
    const bookOldData = (await getBookById(id)).rows[0];
    if (!bookOldData) {
      throw CostumError(`user with id: ${id} can not been found`, 404);
    }
    let title; let author; let edition; let
      image;
    ({
      title = bookOldData.title, author = bookOldData.author, edition = bookOldData.edition,
      image = bookOldData.img,
    } = req.body);
    const bookNewData = {
      title, author, edition, image,
    };
    await updateBookById(id, bookNewData);
    return res
      .status(200)
      .json({
        massage: `user with id:${id} has been updated successfully`,
        updated_book: bookNewData,
      });
  } catch (err) {
    return next(err);
  }
};
