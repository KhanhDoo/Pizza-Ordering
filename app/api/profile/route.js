import mongoose from "mongoose";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(request) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await request.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;
  
    if ('name' in data) {
        
        await User.updateOne({ email },{ name: data.name });
    }
    return Response.json(true);
}
    
