const router = require('express').Router();
const { models } = require('../../sequelize');

router.get('/', (req, res) => res.send('welcome to users home!'));

router.get('/allUsers', async (req, res) => {
  const users = await models.user.findAll();
  res.status(200).json(users);
});

router.post('/newUser', async (req, res) => {
  await models.user.create(req.body);
  res.send('POST /newUser');
});

module.exports = router;
