import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      items: [
        {
          title: "Volunteer Connect",
          code: "https://github.com/cchow33/altru-volunteer",
          src: "/volunteer.png",
          video: "/volunteer.mp4",
          link: "https://altru-frontend.vercel.app/",
          description:
            "Volunteer Connect is a volunteer platform that connects users to  charitable organizations in Toronto. Users can sign up for volunteering events or make donations to support great causes. Volunteer Connect’s aim is to make it easier for everyone to make a tangible impact on the causes that truly matter to them.",
          technology:
            "React, MongoDB, Express, NodeJS, Firebase Auth, RESTful API",
        },
        {
          title: "Trellify",
          code: "https://github.com/cchow33/trello-agile",
          video: "/trellify.mp4",
          src: "/trello.png",
          link: "https://trello-agile.vercel.app/register",
          description:
            "Trellify is a kanban task-management app inspired by the popular collaboration tool, Trello. Users can perform different  operations, including creating boards, editing, archiving, and delete cards, as well as inviting other users to collaborate on their boards.",
          technology:
            "React, Redux, JWT, React DND, MongoDB/Mongoose, RESTful API, Express, NodeJS, Bcrypt, CSS",
        },
        {
          title: "Portfolio",
          code: "https://github.com/cchow33/my-portfolio",
          link: "https://my-portfolio-53xxis2x7-cchow33.vercel.app/",
          video: "/portfolio.mp4",
          src: "/portfolio-project.png",
          description:
            "My personal portfolio with a selection of open source projects I worked on.",
          technology: "React, NextJS, Tailwind CSS",
        },
        {
          title: "Weatherly",
          code: "https://github.com/cchow33/5Day-React-Weather",
          video: "/weather.mp4",
          src: "/weather-project.png",
          link: "https://weatherly-iota.vercel.app/",
          description:
            "Weatherly is a user-friendly weather app that provides current weather conditions by fetching live weather data from the OpenWeatherMap API",
          technology: "React, CSS, HTML",
        },
        {
          title: "Today",
          code: "https://github.com/cchow33/TODAY-todo-app",
          video: "/todo.mp4",
          link: "https://today-todo-app.vercel.app/",
          src: "/todo-project.png",
          description:
            "Today is a to-do app designed to help you stay organized and focused by keeping track of your daily tasks.",
          technology: "JavaScript, HTML, CSS",
        },
      ],
    },
  ];

  return (
    <section
      id="Projects"
      className="xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[5%] pt-[8%]"
    >
      <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-playfair">
        Projects
      </h1>

      <div className="w-100 mb-[0%] xl:max-w-7xl xl:mx-auto max-w-full pt-[0%] xl:grid grid-cols-2 gap-x-25 gap-y-3 xm:flex flex-col place-items-center ">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {project.items.map((item, i) => {
                return (
                  <m.div key={i} className="p-[40px] m-[40px]">
                    <div className="flex flex-row justify-between mt-10px">
                      <p className="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
                        {item.title}
                      </p>
                      <div className="flex flex-row justify-end mt-10px">
                        <a
                          href={item.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[8px] group flex text-sm items-center space-x-1  
                          text-black "
                        >
                          <BsGithub size={24} />
                        </a>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
                        >
                          <BsLink45Deg size={24} />
                        </a>
                      </div>
                    </div>

                    <div className="sm:mb-[20px] xs:mb-[10px]">
                      {item.description}
                      <p className="italic font-bold mt-3">{item.technology}</p>
                    </div>

                    {item.src && (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width="400"
                        height="100"
                        className="mt-[10%] mb-[10%]"
                      />
                    )}

                    <video
                      loop
                      autoPlay
                      muted
                      style={{ width: "600px", height: "350px" }}
                      className="mt-[10%] mb-[10%]"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </m.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
