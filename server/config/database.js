const mongoose = require('mongoose');

const uri = "mongodb+srv://tahmidfuad18:eVpuJvt1jwyTx8cQ@cluster0.gsamudi.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB; 