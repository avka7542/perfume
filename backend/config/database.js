const mongoose = require('mongoose');



const connection = async() =>{

    let url = process.env.MONGO_URI || "mongodb+srv://avka7542:Avner2702@cluster0.ftoyvbt.mongodb.net/master";

    try {
        
        await mongoose.connect(url,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            /* useCreateIndex: true, */
            autoIndex: true,
        });

        console.log("mongoose connected to DB");

    } catch (error) {
        console.log(error);
    }
};


module.exports = connection;