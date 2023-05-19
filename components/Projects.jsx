import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      class="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[10%] "
    >
      <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-poppins">
        Projects
      </h1>

      <div class="mb-[0%] xl:max-w-7xl xl:mx-auto max-w-full pl-[1%] pr-[1%] pt-[5%] xl:grid grid-cols-2 gap-x-5 gap-y-3 sm:flex flex-col">
        {/* Project 1: Altru App */}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Altru-Connect
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/altru-volunteer"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                 text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://altru-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            A full-stack MERN application that connects volunteers to
            organizations. Users can perform CRUD applications to their profile
            and track the donations they made and the events they attend.
            <p class="italic font-bold mt-3">
              MongoDB, Express, NodeJS, Firebase
            </p>
          </p>

          <Image
            src="/altru-project.png"
            alt="project1"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>

        {/* Project 2: Trello Board*/}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Trellify
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/trello-agile"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                 text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://trello-agile.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            A kanban task-management app inspired by Trello. Users can perform
            CRUD operations like create a board or a card, edit, archive, delete
            a card and add users to their board.
            <p class="italic font-bold mt-3">
              React, JWT, MongoDB/Mongoose, Express, NodeJS, Bcrypt, CSS
            </p>
          </p>

          <Image
            src="/trello-project.png"
            alt="project2"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>

        {/* Project 3: Towers of Hanoi */}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Towers of Hanoi
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/towers-of-hanoi"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                 text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://towers-of-hanoi-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            Famous Tower of Hanoi game
            <p class="italic font-bold mt-3">JavaScript, CSS, HTML</p>
          </p>

          <Image
            src="/towers-project.png"
            alt="project4"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>

        {/* Project 4: Portfolio */}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Portfolio
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://vercel.com/cchow33/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            Personal portfolio with open source projects
            <p class="italic font-bold mt-3">React, NextJS, Tailwind CSS</p>
          </p>

          <Image
            src="/portfolio-project.png"
            alt="project5"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>

        {/* Project 5: Weather App */}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Weather App
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/5Day-React-Weather"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://5-day-react-weather.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quasi, recusandae corrupti at quos ipsa nam quas error facilis
            laudantium.
            <p class="italic font-bold mt-3">React, CSS, HTML, Axios</p>
          </p>

          <Image
            src="/weather-project.png"
            alt="project5"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>

        {/* Project 6: Todo*/}

        <div class=" dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <div class="flex flex-row justify-between mt-10px">
            <p class="text-slate-800 text-[22px] font-bold dark:text-gray-100 xl:text-[20px]">
              Todo App
            </p>

            <div class="flex flex-row justify-end mt-10px">
              <a
                href="https://github.com/cchow33/TODAY-todo-app"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1  
                 text-black "
              >
                <BsGithub size={24} />
              </a>

              <a
                href="https://today-todo-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-[8px] group flex text-sm items-center space-x-1 p-2 text-black"
              >
                <BsLink45Deg size={24} />
              </a>
            </div>
          </div>

          <p class="mb-[20px]">
            A full-stack MERN application that connects volunteers to
            organizations. Users can perform CRUD applications to their profile
            and track the donations they made and the events they attend.
            <p class="italic font-bold mt-3">JavaScript, HTML, CSS</p>
          </p>

          <Image
            src="/todo-project.png"
            alt="project5"
            width="400"
            height="100"
            class="mt-[10%] mb-[10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
