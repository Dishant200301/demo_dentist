import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { teamMembers } from '@/modules/core/components/TeamSection';

export const allTeamMembers = [
  ...teamMembers,
  { id: 'dr-ananya-desai', name: 'Dr. Ananya Desai', role: 'Pediatric Ophthalmologist', image: '/images/team/doctor-4.png', email: 'ananya@eyora.com', phone: '+91 123 456 7893' },
  { id: 'dr-kunal-verma', name: 'Dr. Kunal Verma', role: 'Cornea Specialist', image: '/images/team/doctor-5.png', email: 'kunal@eyora.com', phone: '+91 123 456 7894' },
  { id: 'dr-neha-kapoor', name: 'Dr. Neha Kapoor', role: 'Optometrist', image: '/images/team/doctor-6.png', email: 'neha@eyora.com', phone: '+91 123 456 7895' },
];

const TeamList = () => {
  return (
    <section className="section-padding container-padding pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1280px] mx-auto">
        {allTeamMembers.map((member, i) => (
          <AnimateOnScroll key={member.id} delay={(i % 3) * 0.1}>
            <div 
              className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0_5px_15px_rgba(21,34,77,0.03)] hover:shadow-[0_15px_40px_rgba(21,34,77,0.08)] transition-shadow duration-500 pt-[45px] text-center h-[460px] flex flex-col justify-between"
            >
              {/* Full Card Hitbox Link */}
              <Link to={`/team/${member.id}`} className="absolute inset-0 z-0" aria-label={`View ${member.name}'s profile`} />

              {/* Text Section */}
              <div className="relative z-10 px-[20px] pointer-events-none">
                <div className="flex items-center justify-center gap-[6px] mb-[6px] transition-transform duration-300 ">
                  <h3 className="text-[#15224D] font-bold text-[22px] leading-[1.2]">
                    {member.name}
                  </h3>
                </div>
                <p className="text-[#555C7A] font-normal text-[15.5px] leading-[1] transition-transform duration-300 ">
                  {member.role}
                </p>
              </div>
              
              {/* Image Section */}
              <div className="relative w-full h-[340px] mt-[30px] flex justify-center items-end bg-transparent pointer-events-none">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   loading="lazy" 
                   className="max-h-full w-auto object-contain object-bottom"
                 />
                 
                 {/* Hover Social Overlay */}
                 <div className="absolute left-0 right-0 bottom-[30px] flex items-center justify-center gap-[10px] translate-y-[80px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 pointer-events-auto">
                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full bg-[#15224D] text-white hover:bg-[#00adee] hover:text-white flex items-center justify-center transition-colors duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
                     <Facebook className="w-[18px] h-[18px]" strokeWidth={2} />
                   </a>
                  
                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full bg-[#15224D] text-white hover:bg-[#00adee] hover:text-white flex items-center justify-center transition-colors duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
                     <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
                   </a>
                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full bg-[#15224D] text-white hover:bg-[#00adee] hover:text-white flex items-center justify-center transition-colors duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
                     <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
                   </a>
                 </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default TeamList;
