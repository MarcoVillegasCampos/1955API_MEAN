
   
const mongoose = require( 'mongoose' );
const fs= require('fs');
const path        = require('path');
const reg         = new RegExp("\\.js$", "i");
const modelsPath = path.resolve('server','models');

mongoose.connect('mongodb://localhost/person-db', {useNewUrlParser: true});

mongoose.connection.on('error', err => {
    console.error(`Mongoose default connection error: ${ err }`);
    process.exit(0);
});
  
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});