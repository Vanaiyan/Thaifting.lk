const mongoose = require("mongoose");
const validator = require("validator");

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  postalCode: {
    type: Number,
    validate: {
      validator: (value) => {
        return validator.isPostalCode(String(value), "any");
      },
      message: "Please enter a valid postal code",
    },
  },
});
const imageSchema = new mongoose.Schema({
  name: String,
  type: String,
  data: Buffer,
});
const sellerSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "Seller",
    immutable: true,
  },
  firstName: {
    type: String,
    required: [true, "Please enter firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter lastname"],
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already have an account"],
    validate: [validator.isEmail, "Please enter a valid email"],
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number required"],
    validate: {
      validator: (value) => {
        const sriLankanPhoneNumberRegex = /^(?:0)?[0-9]{10}$/;
        return sriLankanPhoneNumberRegex.test(value);
      },
      message: "Please enter a valid phone number in the format 07xxxxxxxx",
    },
  },

  addressField: addressSchema,

  nicNumber: {
    type: String,
    required: [true, "Please enter NIC number"],
    immutable: true,
    unique: [true, "Enter valid NIC number"],
  },
  nicName: {
    type: String,
  },

  frontImage: imageSchema,
  backImage: imageSchema,

  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]

});

sellerSchema.query.byName = function (firstName) {
  return this.find({ firstName: new RegExp(firstName, "i") });
};

sellerSchema.query.byNicNumber = function (nicNumber) {
  return this.find({ nicNumber: new RegExp("^" + nicNumber, "i") });
};

sellerSchema.query.byId = function (_id) {
  return this.find({ _id: new RegExp(_id, "i") });
};
module.exports = mongoose.model("Seller", sellerSchema);