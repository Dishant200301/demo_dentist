const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: {
    introParagraphs: [{ type: String }],
    blockquote: { type: String },
    middleParagraph: { type: String },
    sectionTitle: { type: String },
    sectionSubtitle: { type: String },
    bulletPoints: [{ type: String }],
    finalParagraph: { type: String },
    tags: [{ type: String }]
  },
  image: { type: String },
  category: {
    type: String,
    enum: ['Vision Care', 'Prevention', 'Eye Diseases', 'Nutrition', 'Contact Lenses', 'Eye Health', 'General', 'News'],
    default: 'Vision Care'
  },
  author: { type: String, required: true },
  readTime: { type: Number, default: 5 },
  featured: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  publishDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogSchema);
