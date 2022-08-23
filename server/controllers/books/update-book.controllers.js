/* eslint-disable prefer-const */
const { validateBook } = require('../../util');
const { CostumError } = require('../errors/server-error');
const { updateBook, getBook } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await validateBook(req.body, req.method);
    const oldData = (await getBook(id)).rows[0];
    if (!oldData) {
      throw CostumError(`user with id: ${id} can not been found`, 404);
    }
    let title; let author; let edition; let
      image;
    ({
      title = oldData.title, author = oldData.author, edition = oldData.edition,
      image = oldData.img,
    } = req.body);
    const newData = {
      title, author, edition, image,
    };
    await updateBook(id, newData);
    return res
      .status(200)
      .json({
        massage: `user with id:${id} has been updated successfully`,
        updated_book: newData,
      });
  } catch (err) {
    return next(err);
  }
};
