export interface TeamMemberDetails {
  id: string;
  name: string;
  role: string;
  image: string;
  aboutText: string;
  contact: {
    phone: string;
    email: string;
    position: string;
    location: string;
  };
  aboutImage: string;
  philosophy: {
    text1: string;
    text2: string;
    quote: string;
    points: string[];
  };
  education: {
    intro: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
  };
  specializations: {
    text: string;
    skills: Array<{
      label: string;
      percentage: number;
    }>;
  };
}

const defaultDetails = {
  aboutText: "Dr. Meera Shah is a highly experienced and compassionate ophthalmologist with over 15 years of practice. She is deeply committed to helping patients achieve optimal vision and maintaining lifelong eye health. Dr. Shah's approach integrates advanced medical treatments with a strong emphasis on personalized patient care.",
  contact: {
    phone: "+1 (234) 567-8900",
    email: "dr.meera@domainname",
    position: "Consultant Eye Surgeon",
    location: "Eyora Eye Care Center, NY"
  },
  aboutImage: "/images/blog/blog-1.jpg", // Using a placeholder image for the right side
  philosophy: {
    text1: "Dr. Meera Shah's personal philosophy centers on delivering comprehensive, patient-focused eye care while combining the latest advancements in ophthalmology with daily customized treatment. She believes that every patient has a unique eye care journey and deserves an innovative, thorough assessment, and a tailored plan that addresses both immediate needs and long-term eye health.",
    text2: "Through a compassionate, empathetic approach to vision care, she ensures that patients understand their conditions, treatment options, and proactive measures for visual wellness.",
    quote: "",
    points: [
      "Compassionate Care Approach",
      "Long-Term Eye Health Focus",
      "Advanced Technology Usage"
    ]
  },
  education: {
    intro: "Dr. Meera Shah has completed rigorous medical education and specialized training in ophthalmology, equipping her with the knowledge and skills to deliver advanced eye care.",
    cards: [
      { title: "MBBS - (Medical College)", desc: "Strong academic foundational knowledge in patient care." },
      { title: "MD Ophthalmology", desc: "Solid expertise block in advanced ophthalmic procedures." },
      { title: "Refractive Surgery", desc: "Gaining comprehensive practical and educational training." },
      { title: "Certified By - (Hubert)", desc: "Got cross-certified advanced skills in delivering patient care." }
    ]
  },
  specializations: {
    text: "Dr. Meera Shah specializes in the diagnosis, medical, and surgical management of a wide range of eye conditions. Her areas of expert practice include cataract surgery, glaucoma treatment, refractive error correction, and overall comprehensive and premium patient eye care.",
    skills: [
      { label: "Cataract Surgery", percentage: 90 },
      { label: "Laser Treatments", percentage: 92 },
      { label: "Glaucoma Diagnosis", percentage: 89 },
      { label: "Retina Evaluation", percentage: 95 }
    ]
  }
};

export const teamDetailsData: Record<string, TeamMemberDetails> = {
  'dr-meera-shah': {
    id: 'dr-meera-shah',
    name: 'Dr. Meera Shah',
    role: 'Chief Ophthalmologist',
    image: '/images/team/doctor-1.png',
    ...defaultDetails
  },
  'dr-rohan-mehta': {
    id: 'dr-rohan-mehta',
    name: 'Dr. Rohan Mehta',
    role: 'Senior Optometrist',
    image: '/images/team/doctor-2.png',
    ...defaultDetails
  },
  'dr-aaravi-patel': {
    id: 'dr-aaravi-patel',
    name: 'Dr. Aaravi Patel',
    role: 'Pediatric Eye Specialist',
    image: '/images/team/doctor-3.png',
    ...defaultDetails
  },
  'dr-ananya-desai': {
    id: 'dr-ananya-desai',
    name: 'Dr. Ananya Desai',
    role: 'Pediatric Ophthalmologist',
    image: '/images/team/doctor-4.png',
    ...defaultDetails
  },
  'dr-kunal-verma': {
    id: 'dr-kunal-verma',
    name: 'Dr. Kunal Verma',
    role: 'Cornea Specialist',
    image: '/images/team/doctor-5.png',
    ...defaultDetails
  },
  'dr-neha-kapoor': {
    id: 'dr-neha-kapoor',
    name: 'Dr. Neha Kapoor',
    role: 'Optometrist',
    image: '/images/team/doctor-6.png',
    ...defaultDetails
  }
};
