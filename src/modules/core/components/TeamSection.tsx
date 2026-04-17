import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

// Custom Dribbble icon since lucide-react doesn't have it
const DribbbleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 8.25"/>
  </svg>
);

const teamMembers = [
  { 
    id: 'dr-meera-shah', 
    name: 'Dr. Meera Shah', 
    role: 'Chief Ophthalmologist', 
    image: '/images/team/doctor-1.png', 
    email: 'info@domainname.com', 
    phone: '+123 456-789' 
  },
  { 
    id: 'dr-rohan-mehta', 
    name: 'Dr. Rohan Mehta', 
    role: 'Senior Optometrist', 
    image: '/images/team/doctor-2.png', 
    email: 'info@domainname.com', 
    phone: '+123 456-789' 
  },
  { 
    id: 'dr-aaravi-patel', 
    name: 'Dr. Aaravi Patel', 
    role: 'Pediatric Eye Specialist', 
    image: '/images/team/doctor-3.png', 
    email: 'info@domainname.com', 
    phone: '+123 456-789' 
  },
];

const SocialIcon = ({ icon: Icon, href }: { icon: React.ComponentType<{ className?: string }>, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-[40px] h-[40px] rounded-full border border-[#15224D] flex items-center justify-center text-[#15224D] hover:bg-[#15224D] hover:text-white transition-all duration-300"
  >
    <Icon className="w-[18px] h-[18px]" />
  </a>
);

const TeamSection = () => (
  <section className="container-padding py-[80px] lg:py-[120px] bg-[#F8F9FA]">
    {/* Section Header */}
    <AnimateOnScroll>
      <div className="flex items-center justify-center gap-[8px] mb-[13px]">
        <span className="w-[6px] h-[6px] rounded-full bg-[#00ADEE]"></span>
        <span className="text-[#15224D] text-[15.6px] leading-[22px] font-medium">Our Team</span>
      </div>
      <h2 className="text-[32px] sm:text-[40px] lg:text-[51.3px] font-medium text-[#15224D] leading-[40px] sm:leading-[50px] lg:leading-[62px] text-center max-w-[623px] mx-auto mb-[50px] lg:mb-[60px] tracking-[-0.52px]">
        Our Compassionate Team<br className="hidden sm:block" /> Focused On Vision Care
      </h2>
    </AnimateOnScroll>

    {/* Team Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 max-w-[1280px] mx-auto">
      {teamMembers.map((member, i) => (
        <AnimateOnScroll key={member.id} delay={i * 0.1}>
          <div 
            className="group relative bg-white rounded-[20px] p-[30px] text-center shadow-sm transition-shadow duration-300 cursor-pointer overflow-hidden"
          >
            {/* Full Card Hitbox Link */}
            <Link 
              to={`/team/${member.id}`} 
              className="absolute inset-0 z-0" 
              aria-label={`View ${member.name}'s profile`} 
            />

            {/* Non-interactive Content */}
            <div className="relative z-10 pointer-events-none">
              {/* Name */}
              <h3 className="text-[#15224D] font-semibold text-[19.5px] leading-[24px] mb-[4px]">{member.name}</h3>
              
              {/* Role */}
              <p className="text-[#424C6F] text-[15.6px] leading-[26px] mb-[20px]">{member.role}</p>
              
              {/* Image */}
              <div className="w-[200px] h-[300px] mx-auto overflow-hidden mb-[25px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
            
            {/* Interactive Elements */}
            <div className="relative z-20">
              {/* Social Icons */}
              <div className="flex justify-center gap-[12px] mb-[25px]">
                <SocialIcon icon={Instagram} href="https://instagram.com" />
                <SocialIcon icon={Facebook} href="https://facebook.com" />
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full border border-[#15224D] flex items-center justify-center text-[#15224D] hover:bg-[#15224D] hover:text-white transition-all duration-300"
                >
                  <DribbbleIcon />
                </a>
                <SocialIcon icon={Linkedin} href="https://linkedin.com" />
              </div>
              
              {/* Contact Info */}
              <div className="space-y-[8px]">
                <a 
                  href={`mailto:${member.email}`} 
                  className="flex items-center justify-center gap-[8px] text-[#424C6F] text-[15.6px] leading-[24px] hover:text-[#00ADEE] transition-colors"
                >
                  <Mail className="w-[18px] h-[18px] text-[#00ADEE]" />
                  <span>{member.email}</span>
                </a>
                <a 
                  href={`tel:${member.phone.replace(/\s/g, '')}`} 
                  className="flex items-center justify-center gap-[8px] text-[#424C6F] text-[13.8px] leading-[24px] hover:text-[#00ADEE] transition-colors"
                >
                  <Phone className="w-[18px] h-[18px] text-[#00ADEE]" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>

    {/* Bottom CTA */}
    <AnimateOnScroll>
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-center gap-[10px]">
          <span className="bg-[#00ADEE] text-white text-[13.5px] font-medium px-[12px] py-[4px] rounded-[20px]">Free</span>
          <span className="text-[#424C6F] text-[15.1px] leading-[26px]">Begin your path to total relaxation today.</span>
          <Link to="/appointment" className="text-[#00ADEE] font-bold text-[15.9px] leading-[26px] underline hover:no-underline">
            Book Your Free Eye Care Testing!
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  </section>
);

export { teamMembers };
export default TeamSection;
