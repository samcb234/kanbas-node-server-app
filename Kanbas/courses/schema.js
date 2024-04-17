import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    image: {type: String, required: true},
    description: {type: String, required: true},

},
{ collection: "courses" });
export default courseSchema;