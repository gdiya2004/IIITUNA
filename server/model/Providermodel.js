import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET_KEY='DIYAGUPTA'
const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
});

// Hash password before saving
providerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password for login
providerSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT Token
providerSchema.methods.generateToken =async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            
        },
        JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    )
    }catch(error){
        console.error(error);
    }
}

const Provider = mongoose.model("Provider", providerSchema);
export default Provider;
