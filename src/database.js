import mongoose from 'mongoose';

// const url = 'mongodb://localhost:27017/cafeteria1a';
const url = 'mongodb+srv://emilse:emilse123@cluster0.4oulm.mongodb.net/cafeteria1a';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
});