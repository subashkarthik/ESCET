import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
    match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
  },
  department: {
    type: String,
    required: [true, 'Please select a department']
  },
  comments: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'converted', 'rejected'],
    default: 'pending'
  },
  notes: [{
    text: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

export default mongoose.model('Enquiry', EnquirySchema);
