import mongoose from "mongoose";

const meetupModel = new mongoose.Schema({
    name: String,
    address: String,
    time: String,
    image: String,
    description: String
});

export const meetupData = mongoose.models.meetupdata || mongoose.model("meetupdata",meetupModel)