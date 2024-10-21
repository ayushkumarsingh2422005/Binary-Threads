import mongoose from 'mongoose';

// Connect to MongoDB
export default async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
