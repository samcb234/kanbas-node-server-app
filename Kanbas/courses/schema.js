import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    image: {type: String},
    description: {type: String},

},
{ collection: "courses" });
export default courseSchema;