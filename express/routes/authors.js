const router = require('express').Router();
const { models } = require('../../sequelize');

router.get('/', (req, res) => res.send('welcome to useauthorsrs home!'));

router.get('/allAuthors', async (req, res) => {
  const authors = await models.Author.findAll();
  res.status(200).json(authors);
});

router.post('/createAuthor', async (req, res) => {
  const authors = await models.Author.create(req.body);
  res.status(200).json(authors);
});

module.exports = router;
