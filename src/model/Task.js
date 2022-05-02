import { Schema, model } from "mongoose";

const TaskSchema = Schema({
    document: { type: Number, required: true, trim: true, unique: false },
    service: { type: String, required: true, trim: true, unique: false },
    description: {
        type: String,
        trim: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export default model("Task", TaskSchema);