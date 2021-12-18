const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true },
  managerName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDeleted: { type: Boolean, default: false },
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;