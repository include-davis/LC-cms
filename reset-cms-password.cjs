require('dotenv').config();
const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

(async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const email = (await rl.question('Account email: ')).trim();
  const password = await rl.question('New password: ');
  rl.close();

  if (!process.env.MONGO_CONNECTION_STRING) throw new Error('MONGO_CONNECTION_STRING is missing from .env');
  if (password.length < 8) throw new Error('Password must be at least 8 characters.');

  const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);
  try {
    await client.connect();
    const result = await client.db().collection('users').updateOne(
      { email },
      { $set: { password: await bcrypt.hash(password, 10) } }
    );
    console.log(result.matchedCount === 1
      ? 'Password reset. Sign in at http://localhost:3000/login'
      : 'No account matched that email; nothing was changed.');
  } finally {
    await client.close();
  }
})().catch(error => {
  console.error('Reset failed:', error.message);
  process.exitCode = 1;
});
