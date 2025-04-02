const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt'); // Fixed typo in import name

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  profileImage: { type: String },
  bio: { type: String, maxlength: 500 },
  profession: { type: String }, // Fixed case for consistency
  createdAt: { type: Date, default: Date.now }, // Fixed typo in field name
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password); // Fixed typo in bcrypt
};

// Create and export model
const User = model('User', userSchema);
module.exports = User;
