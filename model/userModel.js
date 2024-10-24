import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
        firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            phone: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            gender: {
                type: String,
                enum: ['Male', 'Female', 'Other'],
                required: true
            }
        }, { timestamps: true });


export default mongoose.model("Users", userSchema)