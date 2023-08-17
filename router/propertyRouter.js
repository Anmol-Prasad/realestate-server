import express from "express";
import propertyController from "../controller/propertyController.js";
const router = express.Router();

router
  .route("/property")
  .post(propertyController.createProperty)
  .get(propertyController.getProperty);

export default router;
