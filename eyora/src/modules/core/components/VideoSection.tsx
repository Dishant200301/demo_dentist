import { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { X } from 'lucide-react';

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Handle Esc key and body scroll lock
  useEffect(() => {
    if (showModal) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      
      // Handle Esc key
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowModal(false);
        }
      };
      document.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEsc);
      };
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = '';
    }
  }, [showModal]);

  return (
    <>
      <section className="container-padding py-[50px] lg:py-[80px]">
        <div className="relative h-[350px] sm:h-[500px] lg:h-[650px] rounded-[20px] overflow-hidden mx-auto">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/video-bg.jpg)' }}
          />
          {/* Dark Overlay - #15224D with 0.6 opacity */}
          <div className="absolute inset-0 bg-[#15224D]/60 rounded-[20px]" />
          
          {/* Play Button Centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <AnimateOnScroll>
              <button
                onClick={() => setShowModal(true)}
                className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#15224D] text-white transition-all duration-300 group"
              >
                <span className="text-[14px] sm:text-[16px] lg:text-[18.9px] font-medium leading-[24px] group-hover:text-[#15224D]">
                  PLAY
                </span>
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[9999] bg-[#15224D]/90 flex items-center justify-center p-4" 
          onClick={() => setShowModal(false)}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-[#15224D] transition-all duration-300 z-[10000]"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="w-full max-w-4xl aspect-video bg-[#15224D] rounded-[20px] overflow-hidden relative" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Demo Video Player */}
            <div className="w-full h-full flex items-center justify-center">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                poster="/images/video-bg.jpg"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
