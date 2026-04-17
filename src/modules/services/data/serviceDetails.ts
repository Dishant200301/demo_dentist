export interface ServiceDetailFeature {
  type: 'image' | 'card';
  src?: string;
  icon?: 'user' | 'eye' | 'binoculars' | 'printer'; // Expanded icon choices
  title?: string;
  desc?: string;
}

export interface ServiceDetailStat {
  num: string;
  label: string;
  badge: string;
}

export interface ServiceDetailBenefitPoint {
  title: string;
  desc: string;
}

export interface ServiceDetailFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  id: string;
  heroImage: string;
  introText: string;
  subtitle1: string;
  text1: string;
  features: ServiceDetailFeature[];
  subtitle2: string;
  text2: string;
  stats: ServiceDetailStat[];
  warningText: string;
  benefits: {
    title: string;
    desc: string;
    image: string;
    points: ServiceDetailBenefitPoint[];
  };
  faqs: ServiceDetailFaq[];
}

const generateMockData = (id: string, idx: number): ServiceDetailData => {
  const isContactLens = id === 'contact-lens-fitting';

  return {
    id,
    heroImage: `/images/services/service-${(idx % 6) + 1}.jpg`,
    introText: isContactLens 
      ? "Comprehensive eye exams is a specialized eye care service that involves accurately measuring your eyes, assessing your vision, and selecting lenses that fit your eyes perfectly."
      : "Comprehensive eye routine represents our dedication to clear and healthy vision. Our advanced systems perform thorough clinical exams using cutting-edge tools to ensure that your vision is flawless. We utilize advanced technologies for maximum precision.",
    subtitle1: 'What is Contact Lens Fitting?',
    text1: isContactLens
      ? ""
      : 'Contact lens fitting ensures optimal vision and comfort. A proper fit is essential for avoiding eye irritation or long-term damage, allowing you to wear them seamlessly throughout your daily activities.',
    features: [
      { type: 'image', src: `/images/services/service-${((idx + 1) % 6) + 1}.jpg` },
      { 
        type: 'card', 
        icon: isContactLens ? 'binoculars' : 'user', 
        title: 'Personalized lens selection', 
        desc: isContactLens ? 'Accurate eye measurements are essential contact lenses fit comfortably.' : 'Accurate measurements guarantee optimal correction.' 
      },
      { 
        type: 'card', 
        icon: isContactLens ? 'printer' : 'eye', 
        title: 'Accurate eye measurement', 
        desc: isContactLens ? 'Accurate eye measurements are essential contact lenses fit comfortably.' : 'Accurate eye measurements are essential for evaluating your vision safely.' 
      },
      { type: 'image', src: `/images/services/service-${((idx + 2) % 6) + 1}.jpg` }
    ],
    subtitle2: 'Training & Usage Guidance',
    text2: isContactLens
      ? "Proper use of contact lenses is essential for maintaining clear vision and healthy eyes. As part of our contact lens fitting service, we provide comprehensive training and usage guidance to ensure you feel confident and comfortable wearing your lenses. Our eye care professionals offer step-by-step instruction on correct lens insertion.\n\nWe also educate you on proper cleaning, storage, and maintenance practices to prevent irritation, dryness, and eye infections. You will receive clear guidance on recommended wearing schedules, replacement cycles, and hygiene habits to protect your eye health. For first-time contact lens users."
      : 'Proper use of contact lenses is essential for maintaining clear vision and healthy eyes. As part of our comprehensive fitting service, we provide usage guidance to ensure you feel confident and comfortable in wearing your lenses. The main focus is maintaining good hygiene and avoiding any unexpected problems during interactions.\n\nFollowing usage guidelines helps in preventing chronic issues. Always consult the optician when experiencing unusual symptoms.',
    stats: [
      { num: '5k+', label: 'Our Happy Patients', badge: isContactLens ? 'Eye Specialists' : 'Awesome Rate' },
      { num: '100%', label: 'Patient-Centered Care', badge: isContactLens ? 'Healthy Eyes' : 'Rating Care' },
      { num: '4.9', label: isContactLens ? 'Satisfied Clients Rate' : 'Satisfied client rate', badge: isContactLens ? 'Bright Sight' : 'Great Team' }
    ],
    warningText: 'Warning notice: Women bearing pregnancy or pre-existing clinical disorders should inform their optician prior to using medical eye drops.',
    benefits: {
      title: isContactLens ? 'Fitting Benefits' : 'Fitting Benefits',
      desc: isContactLens 
        ? 'Proper contact lens fitting ensures optimal comfort, clear vision, and long-term eye health.'
        : 'Proper contact lenses fitting provides enhanced visual clarity and comfort throughout your daily life.',
      image: `/images/services/service-${((idx + 3) % 6) + 1}.jpg`,
      points: [
        { 
          title: isContactLens ? 'Improved visual clarity' : 'Improved visual clarity', 
          desc: isContactLens ? 'Properly fitted contact lenses provide sharper aligning precisely with your eyes.' : 'Properly fitted lenses provide superior clear aligning precisely with your eyes.' 
        },
        { 
          title: isContactLens ? 'Enhanced wearing comfort' : 'Enhanced wearing comfort', 
          desc: isContactLens ? 'Properly fitted contact lenses provide sharper aligning precisely with your eyes.' : 'Properly fitted lenses provide superior clear aligning precisely with your eyes.' 
        },
        { 
          title: isContactLens ? 'Ongoing expert support' : 'Ongoing expert support', 
          desc: isContactLens ? 'Properly fitted contact lenses provide sharper aligning precisely with your eyes.' : 'Properly fitted lenses provide superior clear aligning precisely with your eyes.' 
        }
      ]
    },
    faqs: [
      { question: 'What common eye problems can be detected early?', answer: 'Regular eye exams can detect conditions like glaucoma, cataracts, diabetic retinopathy, and macular degeneration early, helping prevent vision loss.' },
      { question: 'Do you offer treatments for children\'s vision problems?', answer: 'Yes, we provide specialized pediatric eye care including treatments for myopia, amblyopia (lazy eye), and strabismus.' },
      { question: 'Can cataracts and glaucoma be treated effectively?', answer: 'Yes, cataracts can be treated with advanced surgical procedures, and glaucoma can be managed effectively with medication or laser therapy to prevent further loss of vision.' },
      { question: 'Do you accept insurance for treatments and exams?', answer: 'We accept most major insurance plans. Please contact our front desk to verify coverage details specific to your provider.' }
    ]
  };
};

export const serviceDetailsData: Record<string, ServiceDetailData> = {
  'comprehensive-eye-exams': generateMockData('comprehensive-eye-exams', 0),
  'contact-lens-fitting': generateMockData('contact-lens-fitting', 1),
  'retinal-treatments': generateMockData('retinal-treatments', 2),
  'diabetic-eye-care': generateMockData('diabetic-eye-care', 3),
  'refractive-examination': generateMockData('refractive-examination', 4),
};
