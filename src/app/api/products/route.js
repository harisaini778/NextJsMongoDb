import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "../../lib/db";
import { meetupData } from "../../lib/model/meetup";


export async function GET() {
  //const connectionSrt = `mongodb+srv://harikumarsaini778:MeetUp2024@cluster0.ynieqkf.mongodb.net/Meetupdatacollections?retryWrites=true&w=majority`
  await mongoose.connect(connectionSrt);
  const data = await meetupData.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST() {
  await mongoose.connect(connectionSrt);
  const postData = new meetupData({
    name: "Sample meetup 5",
    address: "Some Streeet 5",
    time: "3:00 Am",
    image: "pqr url",
    description: "This is the description of sample meetup 5"
  });
  const result = await postData.save();
  return NextResponse.json({result, success:true})
}