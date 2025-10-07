import mongoose from 'mongoose';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URI);
    const pass = body.password;
    if (!pass || pass.length < 6) {
        return Response.json({ message: "Password should be at least 6 characters long" }, { status: 422 });
    }

    const notHasedPsw = user.password;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHasedPsw, salt);

    const createUser = await User.create(body);
    return Response.json(createUser);
}