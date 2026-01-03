import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  category: {
    type: String,
    enum: ['Event', 'Seminar', 'Achievement', 'Notification', 'Announcement'],
    required: [true, 'Please provide a category']
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
  },
  content: {
    type: String
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  isPinned: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('News', NewsSchema);
