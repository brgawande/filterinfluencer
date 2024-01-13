import express from "express";
import {
  addinfluencer,
  filterInfluencers,
  getallinfluencer,
} from "../controllers/influencerControllres.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/addinfluencer").post(singleUpload, addinfluencer);
router.route("/getinfluencers").get(getallinfluencer);
router.route("/filteredinfluencer").get(filterInfluencers);

export default router;
