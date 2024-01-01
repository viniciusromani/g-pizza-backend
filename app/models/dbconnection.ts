import mongoose from 'mongoose';

const mongooseConnection = () => {
  try {
    mongoose.Promise = Promise;
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log('could not connect ', error);
  }

  mongoose.connection.on('error', (error: Error) => console.log(error));
}

module.exports = mongooseConnection;
