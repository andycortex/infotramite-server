const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DATABASE, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log('database connection established');
    }catch (error) {
        console.error(error);
        throw new Error('Couldn\'t connect to Mongoose');
    }
}

module.exports = {
    dbConnection,
}