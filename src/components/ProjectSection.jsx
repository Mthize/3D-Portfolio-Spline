import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Projects Images
  const projectImages = [
    {
      id: 1,
      title: "3D Gaming Website",
      image: "/images/project-1.png",
    },
    {
      id: 2,
      title: "Startup App",
      image: "/images/project-2.png",
    },
    {
      id: 3,
      title: "Awwwards Winning Website",
      image: "/images/project-3.png",
    },
    {
      id: 4,
      title: "Car Rental App",
      image: "/images/project-4.png",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Title Line Animation
    gsap.fromTo(
      titleLineRef.current,
      {
        scaleX: 0,
        transformOrigin: "right",
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
        transformOrigin: "right",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Section entrance effect
    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );


    // Parallax effect for the entire section
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",    
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,     
        }
      }
    )


    // Horizontal Scrolling 
    // Create the horizontal Scrolling animation
    const horizontalScroll = gsap.to("panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      srcollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.currentoffsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,    
        },
        invalidateOnRefresh: true,
      }
    })
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizantol-section"
      className="relative py-20 bg-[#FBFCFB] overflow-hidden"
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black 
          text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-full h-1 bg-gradient-to-r from-violet-600 to-pink-600 mx-auto 
          opacity-0 transform origin-right"
        ></div>
      </div>

      {/* Horizontal Scrolling Animation */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section 
          flex md:w-[400%] w-[420%]"
        >
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="panel relative flex items-center 
              justify-center"
            >
              <div
                className="relative w-full h-full flex flex-col 
                items-center justify-center p-4 sm:p-8 md:p-12"
              >
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.image}
                  alt="project"
                />

                <h2
                  className="project-title flex items-center gap-3 md:text-3xl
                  text-sm font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-500
                  transition-colors duration-300 cursor-pointer"
                >
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
