import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import InfiniteStack from '../components/InfiniteStack';
import { Link } from 'react-router-dom';
import ExampleImg from '../assets/img/examplePostImg.jpg';
import { Education, Experience, Information, Project } from '../Types';
import { ArrowDownToDot, ArrowLeft, ArrowRight } from 'lucide-react';
import { education, experience, information, project } from '../dummy';
import { MoveIndexToEnd, MoveLastIndexToStart } from '../helper/Array';
import slide1 from '../assets/img/slide1.jpeg';
import slide2 from '../assets/img/slide2.jpeg';
import slide3 from '../assets/img/slide3.jpeg';
import slide4 from '../assets/img/slide4.png';
const Status = ({ education, experience }: { education: Education[]; experience: Experience[] }) => {
  return (
    <div className="grid md:grid-cols-2 divide  md:divide-x-2 divide-x-0 divide-primary ">
      <div className=" pr-5 scroll-reveal-left">
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Education</span>
        </h1>
        <ul className="divide-y-2 divide-gray-600  w-full ">
          {education?.map((item, index) => (
            <li key={index} className="py-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-3xl font-semibold font-raleway text-primary">{item.school}</h2>
                <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                  <p className="font-raleway text-sm tracking-wide text-secondary font-medium">{item.major}</p>
                  <p className="font-raleway text-sm tracking-wide text-secondary font-medium">{item.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:pl-5  scroll-reveal-right">
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Work Experience</span>
        </h1>
        <ul className="divide-y-2 divide-gray-600 w-full">
          {experience?.map((item, index) => (
            <li className="py-5" key={index}>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-3xl font-semibold text-primary font-raleway">{item.work}</h2>
                <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                  <p className="font-raleway text-sm tracking-wide text-secondary font-medium">{item.division}</p>
                  <p className="font-raleway text-sm tracking-wide text-secondary font-medium">{item.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function FollowMe() {
  return (
    <div className="md:relative flex flex-col gap-5">
      <div className="ml-10">
        <img className="w-[50%] max-w-[55%] rounded-xl" src={ExampleImg} alt="" />
      </div>
      <div className="md:absolute md:top-28 md:right-60 bg-white text-black rounded-xl">
        <div className="p-14 space-y-7 divide-y-2 divide-gray-500">
          <div className="space-y-5">
            <h2 className="text-xl md:text-3xl font-inter font-bold tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Follow Me</span>
            </h2>
            <p className="md:w-5/12 text-sm md:text-base font-raleway font-medium tracking-wider">I'm Alfian Ramadani, a programmer from Indonesia And work with Fullstack</p>
          </div>
          <div className="flex flex-row gap-3 md:gap-10 py-6">
            <a href="https://www.facebook.com/AlfianRamadani777" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/alfian-ramadani" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/_alfianramadani/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.discord.com" target="_blank">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const HeroAbout = ({ information, images, setImages }: { information: Information; images: any; setImages: (images: any) => void }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between  gap-14 md:gap-8 pb-10">
        <div className="md:basis-1/2">
          <div className="text-xl md:text-5xl font-bold font-raleway leading-tight">
            <h1 className="text-primary">Hi, I am </h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">{information.name}</span>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-inter text-sm md:text-lg text-primary font-light ">{information.description_1}</p>
            <p className="font-inter text-sm md:text-lg text-primary font-light ">{information.description_2}</p>
            <p className="font-inter text-sm md:text-lg text-primary font-light ">{information.description_3}</p>
            <p className="font-inter text-sm md:text-lg text-primary font-light ">{information.description_4}</p>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/alfian-ramadani-993716265/">
                <div className="hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                    <i className="fa-brands fa-linkedin-in text-white"></i>
                  </div>
                </div>
              </a>
              <a href="https://www.instagram.com/_alfianramadani/">
                <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </div>
                </div>
              </a>
              <a href="https://www.facebook.com/AlfianRamadani777">
                <div className=" hover:scale-[1.02] duration-300 rounded-full w-10 h-10 p-[1px] bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
                  <div className="flex rounded-full h-full w-full items-center justify-center bg-gray-800 ">
                    <i className="fa-brands fa-facebook text-white"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-64 pr-10 md:pr-0 md:mr-10 md:w-52 md:h-auto md:min-h-full md:basis-1/3 order-first md:order-last">
          <div className="relative w-full h-full">
            {images.map((item: any, index: number) => (
              <img
                key={index}
                src={item}
                alt=""
                className="absolute rounded-3xl top-0 left-0 w-full h-full object-cover transition-all duration-500"
                style={{
                  zIndex: images.length - index,
                  transform: `translate(${index * 15}px, ${index % 2 !== 0 ? index : -index * 20}px) rotate(${index * 3}deg)`
                }}
              />
            ))}
          </div>
          <span className="flex gap-4 justify-center mt-4">
            <ArrowLeft onClick={() => MoveLastIndexToStart(images, setImages)} className="border-2 size-8 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-background1 cursor-pointer" />
            <ArrowRight onClick={() => MoveIndexToEnd(images, 0, setImages)} className="border-2 size-8 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-background1 cursor-pointer" />
          </span>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-between lg:px-16 my-28 divide-y-2 md:divide-x-2 md:divide-y-0 mx-auto md:mx-0  md:gap-1">
        <div className="flex flex-col items-center justify-center flex-1  text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">3+</span>
          </h2>
          <p className="w-40 tracking-wider text-primary">Years of Experience in Programming</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">4</span>
          </h2>
          <p className="w-40 tracking-wider text-primary">Successfully Projects Completed</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center gap-1 py-5 md:py-0">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-raleway">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">40</span>
          </h2>
          <p className="w-40 tracking-wider text-primary">Lorem, ipsum dolor lorem</p>
        </div>
      </div> */}
    </>
  );
};
const LookProject: React.FC<{ projectProps: Project[] }> = ({ projectProps }) => {
  return (
    <>
      <div className="mb-10 md:w-7/12 space-y-2 ">
        <h1 className="font-inter text-2xl md:text-4xl font-bold w-8/12 leading-tight tracking-wider text-primary scroll-reveal">
          Look at My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Projects.</span>
        </h1>
        <p className=" text-secondary text-justify text-xs md:text-lg tracking-wide ">Welcome to my project portfolio! As a FullStack Developer, I take pride in creating efficient and visually appealing web applications. Below, you can explore a variety of projects that highlight my skills and experience in web development.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {projectProps?.slice(0, 4).map((item, index) => (
          <div key={index} className={`card bg-base-100 shadow-xl image-full transition duration-300 hover:scale-[1.01] ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}>
            <figure>
              <img src={item.featured_img} alt="Shoes" loading="lazy" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p></p>
              <div className="card-actions justify-end">
                <p className="hidden md:block">{item.description}</p>
                <a href={item?.link || 'localhost:3000'} target="_blank" className="btn btn-sm md:btn-md  btn-primary">
                  View it
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const SkeletonProject = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-10 ">
        <div className="skeleton md:w-4/12 rounded-full h-10"></div>
        <div className="skeleton md:w-7/12 rounded-full h-8"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="skeleton md:w-[36rem] md:h-[23rem] rounded-xl  h-40"></div>
        ))}
      </div>
    </>
  );
};

const Hero: React.FC<{ information: Information }> = ({ information }) => {
  return (
    <>
      <img className=" w-52 h-52 md:w-64 md:h-64 mb-2 bg-white rounded-full shadow-md shadow-primary object-cover object-top" alt="Hero-profile-img" src={information.image || ExampleImg} />
      <header className="w-10/12 md:w-7/12  ">
        <h1 className="text-2xl font-semibold md:text-3xl md:font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Hello, I&apos;m {information.name},</span>{' '}
          <span className="text-primary">
            {information.position} based in {information.country}
          </span>
          <span className="hand">👋</span>
        </h1>
      </header>
      <div className="w-10/12 md:w-5/12">
        <p className=" text-base md:text-xl leading-snug text-secondary">
          I am a <span className="font-bold">{information.position}</span> based in <span className="font-bold">{information.country}</span>, passionate about crafting robust and user-friendly web applications.{' '}
        </p>
      </div>
      <nav className="flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0 ">
        <Link to="/about" className="px-5 py-3 md:px-10 md:py-4 border-2 border-primary rounded-full bg-primary text-background1 font-medium hover:bg-background1 hover:text-primary hover:border-primary ">
          GET IN TOUCH
        </Link>
        <Link to="/project" className="px-5 py-3 md:px-10 md:py-4 border-2 rounded-full font-medium border-secondary text-primary bg-background1 hover:bg-primary hover:text-background1 hover:border-background1">
          VIEW PROJECTS
        </Link>
      </nav>
    </>
  );
};
const SkeletonHero = () => {
  return (
    <>
      <div className="skeleton w-32 h-32 md:w-48 md:h-48  rounded-full"></div>
      <div className="skeleton h-14 w-6/12 rounded-full"></div>
      <div className="skeleton h-10 w-5/12 rounded-full"></div>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-1 md:space-y-0">
        <div className="skeleton h-12 w-44 rounded-full "></div>
        <div className="skeleton h-12 w-44 rounded-full "></div>
      </div>
    </>
  );
};

const Home = () => {
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-right, .scroll-reveal-left').forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);
  const [data, setData] = React.useState<{ information: Information; projects: Project[]; experience: Experience[]; education: Education[] }>({
    information: information as Information,
    projects: project as Project[],
    experience: experience as Experience[],
    education: education as Education[]
  });
  const [images, setImages] = React.useState([slide1, slide2, slide3, slide4]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const projectRef = React.useRef<HTMLDivElement>(null);
  const handleScrollProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <div className=" bg-background1  ">
        <section className=" container mx-auto relative scroll-reveal ">
          <div className=" h-screen flex flex-col">
            <div className=" flex flex-col flex-grow space-y-2 md:space-y-4 items-center justify-center text-center px">{isLoading ? <SkeletonHero /> : data.information && <Hero information={data.information} />}</div>
          </div>
          <div className="size-20 rounded-full -z-5 blur-xl absolute top-1/2" style={{ backgroundImage: 'radial-gradient(circle 341px at 10% 20%, rgba(132,94,194,1) 0%, rgba(196,243,251,1) 90%)' }}></div>
          <div className="size-20 rounded-full -z-5 blur-xl absolute top-1/4 right-0 md:right-40" style={{ backgroundImage: 'linear-gradient( 89deg,  rgba(189,0,0,1) -12.5%, rgba(228,86,0,1) 23.4%, rgba(248,161,0,1) 69.8%, rgba(255,242,2,1) 103.7% )' }}></div>
          <div className="size-20 rounded-full -z-5 blur-xl absolute top-2/3 right-0" style={{ backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% )' }}></div>
          <div className="size-20 rounded-full -z-5 blur-xl absolute top-3/4 md:left-52 " style={{ backgroundImage: ' linear-gradient( 106.7deg,  rgba(251,0,145,1) -2.6%, rgba(251,134,145,1) 31%, rgba(251,158,145,1) 45.8%, rgba(251,218,145,1) 100.1% )' }}></div>
          <ArrowDownToDot onClick={handleScrollProject} className="size-12 md:size-16 bottom-0 absolute md:bottom-10 md:inset-x-[48%] inset-x-[43%]   animate-bounce border-2 rounded-full p-2 md:p-4" />
        </section>
        <section className="scroll-reveal">
          <InfiniteStack />
        </section>
        <section className="py-10 px-7 md:px-14 scroll-reveal" id="about">
          <HeroAbout information={data.information} images={images} setImages={setImages} />
        </section>
        <section className="py-10 px-7 md:px-14">
          <Status education={data.education} experience={experience} />
        </section>
        <section className="bg-background1 " ref={projectRef} id="projects">
          <div className=" py-10 px-7 md:px-14 -z-10">{isLoading ? <SkeletonProject /> : <LookProject projectProps={data.projects} />}</div>
        </section>
        <section className="scroll-reveal">
          <div className="py-10 px-7 md:px-14">
            <FollowMe />
          </div>
        </section>
        <section className="scroll-reveal">
          <div className=" px-7 md:px-14 ">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
