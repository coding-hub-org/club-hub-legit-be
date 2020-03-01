import mongoose, { Schema } from "mongoose";

export const TemplatesSchema = new Schema({
  aField: {
    type: String
  },
  
});
export const Template = mongoose.model("template", UsersSchema);
