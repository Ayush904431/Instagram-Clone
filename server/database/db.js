import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://ayush9044:ayush9044@cluster0.xd7q6im.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;