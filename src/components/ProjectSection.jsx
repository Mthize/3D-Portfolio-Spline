import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ProjectSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);     

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    // title relative animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
        
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    )

    // Title Line Animation



  })

  
  return (
    <section
      ref={sectionRef}
      id="horizantol-section"
      className="relative py-20 bg-[#FBFCFB]
      overflow-hidden"
    >

      {/* Section Title */}
      <div 
        className="container mx-auto px4 mb-16 relative z-10">
           <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl 
          font-bold text-black text-center mb-4 opacity-0">
            Featured Projects
        </h2>
        <div ref={titleLineRef} className="w-0 h-1 bg-gradinet-to-r 
          from-violet-600 to-pink-600 mx-auto opacity-0">
          
        </div>
      </div>

    </section>
  );
};

export default ProjectSection;
