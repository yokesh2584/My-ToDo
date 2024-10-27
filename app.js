const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
// const cors = require('cors');
const todoRoute = require('./routes/todoRoute');
const port = 1800;

mongoose.connect('mongodb+srv://yokeshananthan:rE6PwhhuGDT2CPGn@cluster2584.r9dcb.mongodb.net/ToDoDB?retryWrites=true&w=majority&appName=Cluster2584')
    .then( ()=> console.log('Connected to MongoDB') )
    .catch( (err)=> {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    } );

mongoose.set('debug', true);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// app.use(cors());
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/', todoRoute);

app.listen(port, (err)=>{
    if(err){
        console.log('Error in server listening!');
    }
    console.log(`Server is listening to the port ${port}`);
});