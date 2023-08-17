import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    property_id: {
      type: String,
      //   required: true,
    },
    name: {
      type: String,
      //   required: true,
    },
    bed: {
      type: String,
      //   required: true,
    },
    bath: {
      type: String,
      //   required: true,
    },
    sqft: {
      type: String,
      //   required: true,
    },
    address: {
      type: String,
      //   required: true,
    },
    buy: {
      type: String,
      //   required: true,
    },
    rent: {
      type: String,
      //   required: true,
    },
    pincode: {
      type: String,
      //   required: true,
    },
    image: {
      type: String,
      //   required: true,
    },
  },
  {
    timestamps: true, //important
  }
);

const Propertys = mongoose.model("Propertys", propertySchema);
export default Propertys;
