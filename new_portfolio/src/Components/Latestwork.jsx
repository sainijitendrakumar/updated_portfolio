import React from "react";

function Latestwork() {
  return (
    <section class="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 class="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Latest Works
      </h2>
      <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div class="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://bootstrap-projects-six.vercel.app/"
          class="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="https://ibb.co/JR77x8YH"
              alt=""
            />

            <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Burger Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div class="w-full">
          <h3 class="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Burger Shop
          </h3>
          {/* <span class="text-[#459bd5] text-base md:text-lg">
            (Coding Platform)
          </span> */}
          <p class="text-justify text-sm md:text-base mt-2">
            BurgerShop is a static website showcasing a delicious burger menu
            with essential details. The Home page welcomes visitors, while the
            About section shares the restaurant’s story. Users can explore the
            Menu, check the Reservation page for booking info, and find details
            on the Contact page.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div class="order-2 sm:order-1 w-full">
          <h3 class="text-[#ffe578] font-bold text-2xl md:text-4xl">
            Happy Meal
          </h3>
          {/* <span class="text-[#ffe578] text-base md:text-lg">
            (EdTech Startup)
          </span> */}
          <p class="text-justify text-sm md:text-base mt-2">
            Happy Meal is a static website that showcases a delicious menu and
            essential details for clients. The Home page welcomes visitors,
            while the About section shares the restaurant’s story. Clients can
            explore the Menu, check the Reservation page for booking info, and
            find details on the Contact page.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
        <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div class="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://bootstrap-projects-6xxw.vercel.app/"
          class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="src/assets/images/happy_meal.png"
              alt=""
            />
            <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Happy Meal
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://bootstrap-projects-h4ug.vercel.app/"
          class="flex w-full relative justify-center sm:justify-start"
          target="_blank"
        >
          <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <img
              class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="https://ibb.co/YTpVmqqc"
              alt=""
            />
            <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Job Finder
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div class="w-full">
          <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
            Job Finder
          </h3>
          {/* <span class="text-[#fc815c] text-base md:text-lg">
            (Event Booking)
          </span> */}
          <p class="text-justify text-sm md:text-base mt-2">
            Job Finder is a static website that helps job seekers connect with
            opportunities. The Home page provides job listings, while the
            Service section highlights resume building and job alerts. Users can
            explore the Blog, learn about the platform in the About section, and
            reach out via the Contact page.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>
      {/* <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div class="order-2 sm:order-1 w-full">
          <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
            Web Dev English
          </h3>
          <span class="text-[#47afa1] text-base md:text-lg">
            (Coaching and Consulting)
          </span>
          <p class="text-justify text-sm md:text-base mt-2">
            Being a lead developer, revamped the site to a highly responsive,
            and interactive website. Created new features and pages. Worked as a
            team with product manager and ux designer.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
        <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href=""
          class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="src/assets/images/web-dev-english.webp"
              alt=""
            />
            <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Web Dev English
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="#"
          class="flex w-full relative justify-center sm:justify-start"
        >
          <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
            <img
              class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src="src/assets/images/pioneer-digital.webp"
              alt=""
            />
            <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Pioneer Digital
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div class="w-full">
          <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
            Pioneer Digital
          </h3>
          <span class="text-[#fc815c] text-base md:text-lg">
            (Digital Marketing Agency)
          </span>
          <p class="text-justify text-sm md:text-base mt-2">
            One of the featured site while working with TheBrandWick.com
            (agency). Worked as a frontend developer to make the site
            user-interactive and responsive.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #swiper.js
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoDB
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #mongoose
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div> */}
      <div class="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
}

export default Latestwork;
