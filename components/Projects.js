import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      items: [
        {
          title: "Altru-Connect",
          code: "https://github.com/cchow33/altru-volunteer",
          src: "/altru-project.png",
          link: "https://altru-frontend.vercel.app/",
          description:
            "A full-stack MERN application that connects volunteers to organizations. Users can perform CRUD applications to their profile and track the donations they made and the events they attend.",
          technology:
            "React, MongoDB, Express, NodeJS, Firebase Auth, RESTful API",
        },
        {
          title: "Trellify",
          code: "https://github.com/cchow33/trello-agile",
          src: "/trello-project.png",
          link: "https://trello-agile.vercel.app/register",
          description:
            "A kanban task-management app inspired by Trello. Users can perform CRUD operations like create a board or a card, edit, archive, delete a card and add users to their board.",
          technology:
            "React, Redux, JWT, React DND, MongoDB/Mongoose, RESTful API, Express, NodeJS, Bcrypt, CSS",
        },
        {
          title: "Portfolio",
          code: "https://github.com/cchow33/my-portfolio",
          src: "/portfolio-project.png",
          link: "https://my-portfolio-53xxis2x7-cchow33.vercel.app/",
          description: "Personal portfolio with open source projects",
          technology: "React, NextJS, Tailwind CSS",
        },
        {
          title: "Weatherly",
          code: "https://github.com/cchow33/5Day-React-Weather",
          src: "/weather-project.png",
          link: "https://weatherly-iota.vercel.app/",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoquasi, recusandae corrupti at quos ipsa nam quas error facilis",
          technology: "React, CSS, HTML, Axios",
        },
        {
          title: "Today",
          code: "https://github.com/cchow33/TODAY-todo-app",
          src: "/todo-project.png",
          link: "https://today-todo-app.vercel.app/",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoquasi, recusandae corrupti at quos ipsa nam quas error facilis",
          technology: "JavaScript, HTML, CSS",
        },
      ],
    },
  ];

  return (
    <section
      id="Projects"
      class="xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[5%] pt-[8%]"
    >
      <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] xs:text-[20px] sm:text-[22px] sm:mt-[20px] xl:text-[34px] font-poppins">
        Projects
      </h1>

      <div class="w-100 mb-[0%] xl:max-w-7xl xl:mx-auto max-w-full pt-[0%] xl:grid grid-cols-2 gap-x-25 gap-y-3 xm:flex flex-col place-items-center ">
        {projects.map((project, i) => {
          return (
            <>
              {project.items.map((item, i) => {
                return (
                  <div key={i} class="p-[40px] m-[40px]">
                    <div class="flex flex-row justify-between mt-10px">
                      <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
                        {item.title}
                      </p>
                      <div class="flex flex-row justify-end mt-10px">
                        <a
                          href={item.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="ml-[8px] group flex text-sm items-center space-x-1  
                          text-black "
                        >
                          <BsGithub size={24} />
                        </a>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
                        >
                          <BsLink45Deg size={24} />
                        </a>
                      </div>
                    </div>

                    <p class="sm:mb-[20px] xs:mb-[10px]">
                      {item.description}
                      <p class="italic font-bold mt-3">{item.technology}</p>
                    </p>

                    <Image
                      src={item.src}
                      alt={item.title}
                      width="400"
                      height="100"
                      class="mt-[10%] mb-[10%]"
                    />
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
