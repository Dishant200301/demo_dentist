const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/Blog');

dotenv.config();

const blogs = [
  {
    slug: 'tips-protect-eyes-digital-strain',
    title: 'Tips to Protect Your Eyes Digital Screen Strain Daily',
    image: '/images/blog/blog-1.jpg',
    excerpt: 'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice...',
    category: 'Vision Care',
    author: 'Dr. Sarah Wilson',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes.',
      tags: ['Red Eye', 'Sudden Vision', 'Urgent Care']
    }
  },
  {
    slug: 'when-visit-eye-specialist',
    title: 'When to Visit an Eye Specialist for Sudden Vision Changes',
    image: '/images/blog/blog-2.jpg',
    excerpt: 'Sudden vision changes are a serious warning sign that should never be ignored. If symptoms appear rapidly, seek help.',
    category: 'Vision Care',
    author: 'Dr. James Miller',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time.',
        'Sudden vision changes are a serious warning sign that should never be ignored.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness.',
        'Flashes of light, floaters, or shadows.',
        'Severe eye pain, redness, headache.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment.',
      tags: ['Eye Exam', 'Specialist', 'Eye Health']
    }
  },
  {
    slug: 'benefits-preventive-eye-care',
    title: 'Benefits of Preventive Eye Care for Lifelong Vision Protection',
    image: '/images/blog/blog-3.jpg',
    excerpt: 'Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage.',
    category: 'Prevention',
    author: 'Dr. Emily Chen',
    content: {
      introParagraphs: ['Preventive care is the cornerstone of long-term vision health.'],
      blockquote: 'Regular eye check-ups can often identify the root cause of the problem before it becomes severe.',
      middleParagraph: 'Early diagnosis significantly reduces the risk of permanent damage.',
      sectionTitle: 'Keys to Prevention',
      sectionSubtitle: 'Consistent tracking of your symptoms is vital.',
      bulletPoints: ['Annual exams', 'Healthy diet', 'UV protection'],
      finalParagraph: 'Protect your overall eye health and vision long-term.',
      tags: ['Prevention', 'Checkup', 'Eye Care']
    }
  },
  {
    slug: 'diet-and-vision-health',
    title: 'How Diet and Nutrition Impact Your Long-term Vision Health',
    image: '/images/blog/blog-1.jpg',
    excerpt: 'What you eat significantly affects your eye health. Learn which vitamins are essential for vision.',
    category: 'Nutrition',
    author: 'Dr. Robert Blake',
    content: {
      introParagraphs: ['Nutrition plays a critical role in maintaining healthy eyesight as we age.'],
      blockquote: 'Nutrient-rich foods act as a shield against common age-related eye conditions.',
      middleParagraph: 'Vitamins A, C, and E, along with minerals like zinc, are particularly beneficial.',
      sectionTitle: 'Eye-Healthy Superfoods',
      sectionSubtitle: 'Incorporate these into your daily meals for better eye support.',
      bulletPoints: ['Leafy greens (Lutein)', 'Carrots (Beta-carotene)', 'Fatty fish (Omega-3)'],
      finalParagraph: 'A balanced diet is your first line of defense for your eyes.',
      tags: ['Nutrition', 'Vitamins', 'Healthy Living']
    }
  },
  {
    slug: 'glaucoma-the-silent-thief',
    title: 'Glaucoma: Understanding the Silent Thief of Sight',
    image: '/images/blog/blog-2.jpg',
    excerpt: 'Glaucoma often has no symptoms until vision is lost. Learn why regular screening is key.',
    category: 'Eye Diseases',
    author: 'Dr. Sarah Wilson',
    content: {
      introParagraphs: ['Glaucoma is a group of eye conditions that damage the optic nerve.'],
      blockquote: 'Early detection through comprehensive eye exams is the only way to prevent glaucoma-related blindness.',
      middleParagraph: 'Increased pressure in the eye is often a contributing factor to this damage.',
      sectionTitle: 'Risk Factors',
      sectionSubtitle: 'Knowing your risk can help you take proactive measures.',
      bulletPoints: ['Over age 60', 'Family history', 'High eye pressure'],
      finalParagraph: 'Talk to your eye specialist about your glaucoma risk today.',
      tags: ['Glaucoma', 'Eye Exams', 'Sight Protection']
    }
  },
  {
    slug: 'childrens-eye-health-tips',
    title: 'Top 5 Tips for Protecting Your Child\'s Growing Eyes',
    image: '/images/blog/blog-3.jpg',
    excerpt: 'Good vision is essential for a child\'s development. Here is how to keep their eyes healthy.',
    category: 'Eye Health',
    author: 'Dr. Emily Chen',
    content: {
      introParagraphs: ['Children often don\'t know they have vision problems because they don\'t know how they "should" see.'],
      blockquote: 'Healthy vision is the foundation for learning and success in school.',
      middleParagraph: 'Digital eye strain is becoming more common among students as screen time increases.',
      sectionTitle: 'Screen Time Rules',
      sectionSubtitle: 'Follow the 20-20-20 rule for children using digital devices.',
      bulletPoints: ['Outdoor time', 'Regular breaks', 'Dim screens at night'],
      finalParagraph: 'Schedule your child\'s first eye exam before they start school.',
      tags: ['Pediatric', 'Children', 'Screen Time']
    }
  }
];

const seedBlogs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dentist_db');
    console.log('Connected to MongoDB');

    await Blog.deleteMany({});
    await Blog.insertMany(blogs);

    console.log('Blogs seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBlogs();
