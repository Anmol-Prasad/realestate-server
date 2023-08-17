import Admin from "../models/adminSchema.js";

const adminController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Admin.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists" });
      const newAdmin = new Admin({
        name,
        email,
        password,
      });
      await newAdmin.save();
      return res.status(200).json({ msg: "Admin Created" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ email });
      if (!admin)
        return res.status(400).json({ msg: "This Admin does not exist." });
      const isMatch = (await password) === admin.password;
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });
      return res.status(200).json({ msg: "Logged In Successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Admin.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export { adminController };
