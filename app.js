const app = require('./express/app');
const sequelize = require('./sequelize');

const PORT = 4000;

// testing the connection
async function assertDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('db authentication successful');
  } catch (error) {
    console.log('db authentication failed: \n', error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnection();
  app.listen(PORT, () => console.log(`Express server on port ${PORT}`));
}

init();
