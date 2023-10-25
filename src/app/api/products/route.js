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

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  const postData = new meetupData(payload);
  const result = await postData.save();
  return NextResponse.json({result, success:true})
}