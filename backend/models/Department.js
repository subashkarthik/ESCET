import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Please provide department name'],
    trim: true
  },
  shortName: {
    type: String,
    required: [true, 'Please provide short name'],
    uppercase: true
  },
  hod: {
    type: String,
    required: [true, 'Please provide HOD name']
  },
  hodEmail: {
    type: String
  },
  description: {
    type: String,
    required: [true, 'Please provide description']
  },
  labs: [{
    type: String
  }],
  image: {
    type: String,
    required: [true, 'Please provide an image']
  },
  seats: {
    type: Number,
    default: 60
  },
  duration: {
    type: String,
    default: '4 Years'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Department', DepartmentSchema);
