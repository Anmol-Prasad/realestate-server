import Propertys from "../models/propertySchema.js";

const propertyController = {
  createProperty: async (req, res) => {
    try {
      const {
        property_id,
        name,
        bed,
        bath,
        sqft,
        address,
        pincode,
        rent,
        buy,
        image,
      } = req.body;

      const property = await Propertys.findOne({ property_id });
      if (property)
        return res.status(400).json({ msg: "This property already exists." });

      const newProperty = new Propertys({
        property_id,
        name,
        bed,
        bath,
        sqft,
        address,
        pincode,
        image,
        rent,
        buy,
      });

      await newProperty.save();
      res.json({ msg: "Property has been listed" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProperty: async (req, res) => {
    try {
      const propertys = await Propertys.find({});
      res.json(propertys);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default propertyController;
