import mongoose from "mongoose";

export const connectDB = async () => {
    return mongoose.connect('mongodb+srv://greatjaink32:great0032@cluster0.mraue.mongodb.net/food-del');
}