const router = require('express').Router();
const { models } = require('../../sequelize');

router.get('/', (req, res) => res.send('welcome to books home!'));

router.get('/allBooks', async (req, res) => {
  const books = await models.Book.findAll();
  res.status(200).json(books);
});

router.post('/createBook', async (req, res) => {
  const book = await models.Book.create(req.body);
  res.status(200).json(book);
});

module.exports = router;
