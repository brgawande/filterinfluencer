import mongoose from "mongoose";

const influencerSchema = new mongoose.Schema(
  {
    influencername: {
      type: String,
      required: true,
    },
    influencerfollowers: {
      type: Number,
      required: true,
    },
    influencerrating: {
      type: Number,
      required: true,
    },
    influencercategory: {
      type: String,
      required: true,
    },
    influencercity: {
      type: String,
      required: true,
    },
    influencerimage: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Influencer = mongoose.model("Influencer", influencerSchema);
