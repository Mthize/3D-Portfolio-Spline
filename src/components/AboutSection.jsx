import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b 
      from-black to-[#8a74cf50] flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/*  stars section */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: 0.2 + Math.random() * 0.5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold mb-8 text-center text-white opacity-0"
      >
        About Me
      </h1>

      <div
        ref={introRef}
        className="flex flex-col-reverse md:flex-row justify-between items-center 
        w-full px-5 lg:px-24 mt-8 opacity-0"
      >
        <h3
          className="text-sm md:text-2xl font-bold text-purple-200 z-50 
          lg:max-w-[40rem] md:max-w-[60%] tracking-wider"
        >
          I'm Thapelo Mthize a cybersecurity professional and full-stack web
          developer committed to building future proof digital solutions. I
          blend cutting-edge design with uncompromising security, ensuring every
          project is as beautiful as it is resilient. From crafting immersive
          user experiences to deploying advanced defenses against evolving cyber
          threats, I empower brands to thrive in the digital era, securely and
          confidently.
        </h3>

        <img
          className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten 
          md:ml-8 mb-8 md:mb-0"
          src="/images/person.png"
          alt="profile-img"
        />
      </div>
    </section>
  );
};

export default AboutSection;
