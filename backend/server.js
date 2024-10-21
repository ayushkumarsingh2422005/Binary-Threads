// Import the framework and instantiate it
import Fastify from 'fastify';
import connectDb from './src/config/connect.js';
import "dotenv/config";

// Connect to MongoDB
connectDb(process.env.MONGO_URI);

const app = Fastify({
  logger: true
});

// Declare a route
app.get('/', async function handler (request, reply) {
  return { hello: 'world' };
});

// Run the server
const startServer = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer(); // Start the server
