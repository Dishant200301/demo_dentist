import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
  content: {
    introParagraphs: string[];
    blockquote: string;
    middleParagraph: string;
    sectionTitle: string;
    sectionSubtitle: string;
    bulletPoints: string[];
    finalParagraph: string;
    tags: string[];
  };
}

export const blogDetailsData: BlogPost[] = [
  {
    id: 'tips-protect-eyes-digital-strain',
    title: 'Tips to Protect Your Eyes Digital Screen Strain Daily',
    image: '/images/blog/blog-1.jpg',
    date: 'January 14, 2026',
    category: 'Uncategorized',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Red Eye', 'Sudden Vision', 'Urgent Care']
    }
  },
  {
    id: 'when-visit-eye-specialist',
    title: 'When to Visit an Eye Specialist for Sudden Vision Changes',
    image: '/images/blog/blog-2.jpg',
    date: 'January 20, 2026',
    category: 'Vision Care',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Eye Exam', 'Specialist', 'Eye Health']
    }
  },
  {
    id: 'benefits-preventive-eye-care',
    title: 'Benefits of Preventive Eye Care for Lifelong Vision Protection',
    image: '/images/blog/blog-3.jpg',
    date: 'February 5, 2026',
    category: 'Prevention',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Prevention', 'Checkup', 'Eye Care']
    }
  },
  {
    id: 'understanding-cataracts-symptoms',
    title: 'Understanding Cataracts: Symptoms, Causes, and Treatments',
    image: '/images/blog/blog-1.jpg',
    date: 'March 12, 2026',
    category: 'Eye Diseases',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Cataracts', 'Surgery', 'Aging']
    }
  },
  {
    id: 'how-nutrition-impacts-vision',
    title: 'How Proper Nutrition Impacts Your Vision and Eye Health',
    image: '/images/blog/blog-2.jpg',
    date: 'April 4, 2026',
    category: 'Nutrition',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Diet', 'Vitamins', 'Health']
    }
  },
  {
    id: 'contact-lens-care-routine',
    title: 'The Ultimate Contact Lens Care Routine for Beginners',
    image: '/images/blog/blog-3.jpg',
    date: 'May 18, 2026',
    category: 'Contact Lenses',
    content: {
      introParagraphs: [
        'Visiting an eye specialist promptly is crucial if you experience sudden changes in your vision, especially if symptoms appear rapidly or worsen over time. Conditions such as retinal detachment, acute glaucoma, eye infections, diabetic eye disease, or neurological disorders can lead to permanent vision loss if not treated early and correctly.',
        'Sudden vision changes are a serious warning sign that should never be ignored. These changes can occur without notice and may include blurred vision, loss of focus, flashes of light, dark spots, or partial or complete vision loss.'
      ],
      blockquote: 'Sudden vision changes can be a warning sign of serious eye or health conditions. Blurred vision, flashes, floaters, or vision loss should never be ignored. Timely consultation with an eye specialist ensures early diagnosis, effective treatment, and protection of your long-term vision health.',
      middleParagraph: 'Some conditions can cause sudden light strikes while others manifest as subtle distortions. Not all temporary vision changes indicate severe problems, but consistent tracking of your symptoms and consulting an eye care professional is the only way to rule out severe conditions. Early diagnosis of rapid vision loss significantly reduces the risk of permanent damage, and regular eye check-ups can often identify the root cause of the problem.',
      sectionTitle: 'When to seek immediate care',
      sectionSubtitle: 'Sudden changes in vision should never be ignored, as they may indicate a serious underlying eye condition or a medical emergency. You should seek immediate care if you experience any of these symptoms listed below. Be sure to reach out to an eye specialist immediately to avoid severe vision loss.',
      bulletPoints: [
        'Sudden vision loss, blurred sight, or darkness may indicate serious eye or neurological emergencies.',
        'Flashes of light, floaters, or shadows can signal retinal detachment requiring urgent medical attention.',
        'Severe eye pain, redness, headache, nausea, or sensitivity to light may be signs of infection or acute eye emergencies.',
        'Double vision, vision changes after injury, or sudden visions issues with diabetes or hypertension require prompt examination.',
        'Seek immediate care if vision loss occurs suddenly with pain, flashes, floaters, or severe headache present.'
      ],
      finalParagraph: 'Prompt evaluation by an eye specialist allows for early diagnosis and timely treatment, which can significantly improve outcomes and protect your overall eye health and vision long-term.',
      tags: ['Lenses', 'Hygiene', 'Tips']
    }
  }
];
