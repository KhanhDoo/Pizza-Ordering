import mongoose, { Schema, models, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },  
    password: {
        type: String,
        required: true, 
        validate: pass => {
            if (!pass?.length || pass.length < 6)
                throw new Error("Password should be at least 6 characters long");
        }
    },
}, { timestamps: true });

UserSchema.post('validate', function(user) {
    const notHasedPsw = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHasedPsw, salt);
      
}
);

const User = models.User || model("User", UserSchema);

export default User;