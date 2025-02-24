const mongoose = require('mongoose');

// Correct the connection string here
const url = 'mongodb+srv://waqardev313:C0mXuyChmbQFzv3H@cluster0.yyp52.mongodb.net/MERN_Project_01?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(url).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
});

