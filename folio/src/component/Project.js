import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../component/pics/youtube .png";
import project2 from "../component/pics/movies cast.png";
import project3 from "../component/pics/Screenshot (8).png";
import Project4 from '../component/pics/wiki.png';
import Project5 from "../component/pics/Screenshot (12).png";
import Project6 from "../component/pics/Netflix.png"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Youtube Search App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://hook-smith220.vercel.app/",
    },
    {
      img: project2,
      name: "React Movie Cast",
      github_link: "https://github.com/Sridhar-C-25",
    live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: Project4,
      name: "Wikipidia&Lang Translation",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: Project5,
      name: "Admin Dashboard",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://admins-smith220.vercel.app/",
    },
    {
      img: Project6,
      name: "Nexflix Front Page",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://net-pink.vercel.app/#",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
      
        </div>
      </div>
    </section>
  );
};

export default Project;
