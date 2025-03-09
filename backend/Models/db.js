const mongoose = require('mongoose');

// Correct the connection string here
// For online MongooseDB atlas 
// const url = 'mongodb+srv://waqardev313:C0mXuyChmbQFzv3H@cluster0.yyp52.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// for offline DB
const url = 'mongodb://127.0.0.1:27017/MERN_Project_01';

// Connect to MongoDB
mongoose.connect(url).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
});



