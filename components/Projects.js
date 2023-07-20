import React from "react";
import { motion as m } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      items: [
        {
          title: "Volunteer Connect",
          code: "https://github.com/cchow33/altru-volunteer",
          video: "/textVolunteer.mp4",
          link: "https://altru-frontend.vercel.app/",
          description:
            "Volunteer Connect helps volunteers discover charitable organizations in Toronto. Track your impact through donations, event sign-ups, and by following organizations. Organizations receive real-time updates on donations and event sign-ups.",
          technology: "React, MongoDB/Mongoose, Express, NodeJS, Firebase Auth",
        },
        {
          title: "Trellify",
          code: "https://github.com/cchow33/trello-agile",
          video: "/trellify.mp4",
          link: "https://trello-agile.vercel.app/register",
          description:
            "Trellify is a kanban task-management app designed to streamline your workflow and encourage collaboration. Trellify enables users to perform different operations, including creating boards, editing, archiving, and deleting cards, as well as adding other users to collaborate on their board.",
          technology:
            "React, JWT, React DND, MongoDB/Mongoose, Express, NodeJS, Bcrypt, CSS",
        },
        {
          title: "Weatherly",
          code: "https://github.com/cchow33/5Day-React-Weather",
          video: "/weather.mp4",
          link: "https://weatherly-iota.vercel.app/",
          description:
            "Weatherly is a user-friendly weather app that fetches live weather data from the OpenWeatherMap API",
          technology: "React, CSS, HTML",
        },
        {
          title: "Today",
          code: "https://github.com/cchow33/TODAY-todo-app",
          video: "/todo.mp4",
          link: "https://today-todo-app.vercel.app/",
          description:
            "Today is a to-do app designed to help you stay organized and focused by keeping track of your daily tasks.",
          technology: "JavaScript, HTML, CSS",
        },
      ],
    },
  ];

  return (
    <section id="Projects">
      <div className="font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[8%] bg-[length:100%_5px]">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px]">
          Projects
        </h1>

        <div className="font-jost pt-[20px] text-[20px] sm:text-[18px] px-[0px] xl:text-[20px]">
          {projects[0].items.map((project, idx) => (
            <m.div
              key={idx}
              className="p-[0px] m-[40px] flex flex-col md:flex-row items-center justify-center md:gap-8"
            >
              <div className="relative w-458 h-652 md:w-458 md:h-652">
                <video
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>

              <div className="sm:mb-[20px] xs:mb-[10px] md: pl-[40px]">
                <p className="text-slate-800 text-[26px] font-bold dark:text-gray-100 xl:text-[28px] mt-[20px]">
                  {project.title}
                </p>
                {project.description}
                <p className="sm:text-[16px] text-purple-600 font-normal mt-3">
                  {project.technology}
                </p>
                <div className="flex mt-4 md:mt-0">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-[8px] mt-[12px] sm:text-[16px] border-purple-600 border rounded-full group flex text-sm items-center space-x-1 p-2 text-black hover:text-white hover:bg-purple-600 hover:translate-y-1 transition duration-500 ease-in-out"
                  >
                    CODE
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-[8px] mt-[12px] sm:text-[16px] border-purple-600 border rounded-full group flex text-sm items-center space-x-1 p-2 text-black hover:text-white hover:bg-purple-600 hover:translate-y-1 transition duration-500 ease-in-out"
                  >
                    LIVE
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
