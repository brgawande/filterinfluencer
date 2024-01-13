import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Influencer } from "../models/influencerModel.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "cloudinary";

export const addinfluencer = catchAsyncError(async (req, res, next) => {
  const {
    influencername,
    influencerfollowers,
    influencerrating,
    influencercategory,
    influencercity,
  } = req.body;

  const file = req.file;
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Influencer.create({
    influencername,
    influencerfollowers,
    influencerrating,
    influencercategory,
    influencercity,
    influencerimage: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    message: "Influencer added successfully",
  });
});

export const getallinfluencer = catchAsyncError(async (req, res, next) => {
  const influencers = await Influencer.find();

  res.status(200).json({
    success: true,
    influencers,
  });
});

export const filterInfluencers = catchAsyncError(async (req, res, next) => {
  const { name, rating, followers, city, category } = req.query;

  // Build the filter object based on provided query parameters
  const filter = {};
  if (name) filter.influencername = new RegExp(name, "i");
  if (rating) filter.influencerrating = parseFloat(rating);
  if (followers) filter.influencerfollowers = { $gte: parseInt(followers) };
  if (city) filter.influencercity = new RegExp(city, "i");
  if (category) filter.influencercategory = new RegExp(category, "i");

  // Query the database with the constructed filter
  const filteredInfluencers = await Influencer.find(filter);

  res.status(200).json({
    success: true,
    influencers: filteredInfluencers,
  });
});
