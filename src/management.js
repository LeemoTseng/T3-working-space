// *---------------* //
//
// Index
//
// $0. Plugins
// $0.1. Navbar
// $0.2. table - Main section 
// $0.3. table - Options
// $0.4. table - Services
// $1. Language toggle
// $2. Icon isHidden
// $3. Side menu
// $4. Table style
// $5. Drag and drop
// $5.1. Add an item btn
// $5.2. Sortable(plugin)
// $6. Blog - Add an section
// $7. set section
//
// *---------------* //



// *---------------* //
// $0. Plugins
// *---------------* //




// *---------------* //
// $0.1. Navbar
// *---------------* //


const navbarTemplate = `<nav class="top-0 left-0 z-50 max-w-[90rem] mx-auto">
          <div
            class="mx-auto px-3 py-2 flex item-center justify-between items-center"
          >
            <!-- logo -->
            <div class="logo w-32 md:mx-0 md:ml-0 md:flex-shrink-0">
              <a href="#"
                ><img
                  class="mx-auto md:mx-0 md:ml-0"
                  src="assets/T3CO.png"
                  alt="T3ex-group"
              /></a>
            </div>

            <div
              id="languageToggle"
              class="flex items-center mr-3 space-x-1 transition-all"
            >
              <!-- $1. Language toggle -->
              <div id="chinese" class="flex items-center transition-all">
                <a href="#"
                  ><span
                    class="transition-all flex items-center text-white bg-primary rounded-md px-2 py-1"
                    >中文</span
                  ></a
                >
              </div>
              <div
                id="english"
                class="flex items-center p-1 transition-all text-center"
              >
                <a href="#"
                  ><span
                    class="transition-all text-secondary/30 hover:text-secondary/50 px-2 p-[6px]"
                    >English</span
                  ></a
                >
              </div>
            </div>
          </div>
        </nav>`
if (document.querySelector('#navBar')){

  document.querySelector('#navBar').innerHTML += navbarTemplate;
}

// *---------------* //
// $0.2. table - Main section
// *---------------* //

const tableMainSection = `<div class="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6 mr-2 text-secondary/50"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                            />
                          </svg>
                          <p class="font-bold text-lg">Main section</p>
                        </div>
                        <table cellpadding="2">
                          <tbody class="p-2">
                            <div
                              class="flex justify-between items-center pb-5"
                            ></div>

                            <tr class="border-b text-sm">
                              <th align="left" width="20%">Title</th>
                              <th align="left" width="50%">Subtitle</th>
                              <th align="left" width="10%">Established</th>
                              <th align="left" width="10%">Update</th>
                              <th align="left" width="2%">Edit</th>
                            </tr>

                            <tr class="text-secondary/80 border-b">
                              <td class="py-3">
                                Designed for business teams like yours
                              </td>
                              <td class="py-3">
                                All of our membership options are designed to
                                help you and your team be more comfortable and
                                productive
                              </td>
                              <td class="py-3">
                                <ul>
                                  <li class="flex justify-start items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 pr-1"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                      />
                                    </svg>
                                    <p class="text-[13px]">Lee Mo</p>
                                  </li>
                                  <li class="flex justify-start items-start">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.8"
                                      stroke="currentColor"
                                      class="size-5 pr-1"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                      />
                                    </svg>
                                    <p class="text-[13px]">
                                      2024/07/29 <br />mm:ss
                                    </p>
                                  </li>
                                </ul>
                              </td>
                              <td class="py-3">
                                <ul>
                                  <li class="flex justify-start items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 pr-1"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                      />
                                    </svg>
                                    <p class="text-[13px]">Lee Mo</p>
                                  </li>
                                  <li class="flex justify-start items-start">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.8"
                                      stroke="currentColor"
                                      class="size-5 pr-1"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                      />
                                    </svg>
                                    <p class="text-[13px]">
                                      2024/07/29 <br />mm:ss
                                    </p>
                                  </li>
                                </ul>
                              </td>
                              <td align="center" class="py-3">
                                <a href="">
                                  <div
                                    class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                      />
                                    </svg></div
                                ></a>
                              </td>
                            </tr>
                          </tbody></table>`
if (document.querySelector('#tableMainSection')) {
  document.querySelector('#tableMainSection').innerHTML += tableMainSection;
}

// *---------------* //
// $0.3. table - Options
// *---------------* //

const tableOptions = `<div class="dropTable p-1 my-5 text-secondary">
                            <table class="sortable-container" cellpadding="2">
                              <!-- $5.2. Sortable(plugin) -->
                              <tbody class="sortable p-2">
                                <div
                                  class="flex justify-between items-center pb-5"
                                >
                                  <div class="flex">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-6 mr-2 text-secondary/50"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                      />
                                    </svg>
                                    <p class="font-bold text-lg">Options</p>
                                  </div>
                                  <!--  $5.1. Add an item btn -->
                                  <a href="#"
                                    ><div
                                    data-popup="optionsPopup"
                                    data-item="optionsData"
                                      class="addBtn text-sm font-bold ml-5 border border-secondary px-10 py-0 rounded-md hover:bg-secondary hover:text-white transition-all"
                                    >
                                      Add
                                    </div></a
                                  >
                                </div>
                                <tr
                                  class="border-b text-sm disabled pointer-events-none select-none"
                                >
                                  <th align="center" width="2%">#</th>
                                  <th align="left" width="3%">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                      />
                                    </svg>
                                  </th>

                                  <th align="left" width="5%">From</th>
                                  <th align="left" width="10%">Option</th>
                                  <th align="left" width="8%">Price</th>
                                  <th align="left" width="8%">Per</th>
                                  <th align="left" width="22%">Description</th>
                                  <th align="left" width="20%">
                                    <div class="flex items-center">
                                      <p>Service</p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6 pl-1 text-secondary/70"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                        />
                                      </svg>
                                    </div>
                                  </th>
                                  <th align="left" width="10%">Established</th>
                                  <th align="left" width="10%">Update</th>
                                  <th align="left" width="2%">Edit</th>
                                </tr>
                                <!-- Drag and drop to render -->
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>

                                  <td class="enabled py-3 align-top">
                                    <!-- $6. Table style -->
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="size-5 cursor-pointer text-secondary/20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </td>
                                  <td class="py-3 align-top">From</td>
                                  <td class="py-3 align-top">SECOND</td>
                                  <td class="py-3 align-top">6,500</td>
                                  <td class="py-3 align-top">month</td>
                                  <td class="text-[13px] py-3 align-top">
                                    Ideal for freelancers, remote professionals
                                    & digital nomads
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul class="text-[13px] space-y-1">
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>Shared seating</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>24/7 access</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>
                                          Fully-equipped meeting rooms and high
                                          speed internet
                                        </p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>Full event access</p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                      class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>
                                  <td class="py-3 align-top enabled">
                                    <!-- $6. Enable style -->
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      class="size-5 cursor-pointer text-secondary/20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </td>
                                  <td class="py-3 align-top">-</td>

                                  <td class="py-3 align-top">HOT DESK</td>
                                  <td class="py-3 align-top">6,500</td>
                                  <td class="py-3 align-top">month</td>
                                  <td class="text-[13px] py-3 align-top">
                                    Ideal for freelancers, remote professionals
                                    & digital nomads
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul class="text-[13px] space-y-1">
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>Shared seating</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>24/7 access</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>
                                          Fully-equipped meeting rooms and high
                                          speed internet
                                        </p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="3"
                                          stroke="currentColor"
                                          class="size-4 pr-1 text-primary min-w-4"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                          />
                                        </svg>
                                        <p>Full event access</p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                      class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>`

if (document.querySelector('#tableOptions')) {
  document.querySelector('#tableOptions').innerHTML += tableOptions;
}



// *---------------* //
// $0.4. table - Services
// *---------------* //



const tableServices = `<div class="dropTable p-1 my-5 text-secondary">
                            <table class="sortable-container" cellpadding="2">
                              <!-- $5.2. Sortable(plugin) -->
                              <tbody class="sortable p-2">
                                <div
                                  class="flex justify-between items-center pb-5"
                                >
                                  <div class="flex">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-6 mr-2 text-secondary/50"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                      />
                                    </svg>
                                    <p class="font-bold text-lg">Services</p>
                                  </div>
                                  <!--  $5.1. Add an item btn -->

                                  <a href="#">
                                    <div
                                    data-popup="servicesPopup"
                                    data-item="servicesData"
                                      class="addBtn text-sm font-bold ml-5 border border-secondary px-10 py-0 rounded-md hover:bg-secondary hover:text-white transition-all"
                                    >
                                      Add
                                    </div>
                                  </a>
                                </div>
                                <tr
                                  class="border-b text-sm disabled pointer-events-none select-none"
                                >
                                  <th align="left" width="5%">#</th>

                                  <th align="left" width="73%">Service</th>

                                  <th align="left" width="10%">Established</th>
                                  <th align="left" width="10%">Update</th>
                                  <th align="left" width="2%">Edit</th>
                                </tr>
                                <!-- Drag and drop to render -->
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>

                                  <td class="py-3 align-top">Shared seating</td>

                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>

                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                        class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                          />
                                        </svg></div
                                    >
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>

                                  <td class="py-3 align-top">Shared seating</td>

                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                        class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                          />
                                        </svg></div
                                    >
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>

                                  <td class="py-3 align-top">
                                    Fully-equipped meeting rooms and high speed
                                    internet
                                  </td>

                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                        class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                          />
                                        </svg></div
                                    >
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                                <tr
                                  draggable="true"
                                  class="text-secondary/80 border-b"
                                >
                                  <td class="py-3 align-top">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="size-5 cursor-grab hover:text-primary"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </td>

                                  <td class="py-3 align-top">
                                    Complimentary coffee, beverages & snacks
                                  </td>

                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td class="py-3 align-top">
                                    <ul>
                                      <li
                                        class="flex justify-start items-center"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                          />
                                        </svg>
                                        <p class="text-[13px]">Lee Mo</p>
                                      </li>
                                      <li
                                        class="flex justify-start items-start"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.8"
                                          stroke="currentColor"
                                          class="size-5 pr-1"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                          />
                                        </svg>
                                        <p class="text-[13px]">
                                          2024/07/29 <br />mm:ss
                                        </p>
                                      </li>
                                    </ul>
                                  </td>
                                  <td align="center" class="py-3 align-top">
                                    <div
                                        class="hover relative h-10 w-10 hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                          />
                                        </svg></div
                                    >
                                    <a href="">
                                      <div
                                        class="hover relative h-10 w-10 hover:text-white hover:bg-secondary/5 rounded-full"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-5 mb-2 text-red-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                          />
                                        </svg></div
                                    ></a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>`

if (document.querySelector('#tableServices')) {
  document.querySelector('#tableServices').innerHTML += tableServices;
}

// *---------------* //
// $1. Language toggle
// *---------------* //


if (document.querySelector('#languageToggle')) {

  const chinese = document.querySelector('#chinese');
  const english = document.querySelector('#english');

  const chineseFirstSpan = chinese.querySelector('span');
  const englishFirstSpan = english.querySelector('span');
  const languageSelect = document.querySelector('#selectLanguage select');

  chinese.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();
    chineseFirstSpan.classList.remove('text-secondary/30', 'hover:text-secondary/50');
    chineseFirstSpan.classList.add('text-white', 'bg-primary', 'rounded-md');
    englishFirstSpan.classList.remove('text-white', 'bg-primary', 'rounded-md');
    englishFirstSpan.classList.add('text-secondary/30', 'hover:text-secondary/50');

    languageSelect.value = 'zh-TW';
    languageSelect.form.submit();
  });

  english.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();
    englishFirstSpan.classList.remove('text-secondary/30', 'hover:text-secondary/50');
    englishFirstSpan.classList.add('text-white', 'bg-primary', 'rounded-md');
    chineseFirstSpan.classList.remove('text-white', 'bg-primary', 'rounded-md');
    chineseFirstSpan.classList.add('text-secondary/30', 'hover:text-secondary/50');


    languageSelect.value = 'en-US';
    languageSelect.form.submit();
  });



} else {
  console.log('#languageToggle not found');
}


// *---------------* //
// $2. Icon isHidden
// *---------------* //


if (document.querySelector('#login')) {

  // password input
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const hiddenIcon = document.querySelector('#hiddenIcon');
  const showIcon = document.querySelector('#showIcon');

  hiddenIcon.addEventListener('mousedown', function () {
    hiddenIcon.classList.toggle('hidden');
    showIcon.classList.toggle('hidden');
    showIcon.classList.add('text-primary')
    passwordInput.type = 'text';
  })

  showIcon.addEventListener('mouseup', function () {
    hiddenIcon.classList.toggle('hidden');
    showIcon.classList.toggle('hidden');
    passwordInput.type = 'password';

  })

  // error message
  const errorMessage = document.querySelector('#errorMessage');
  emailInput.addEventListener('input', function () {
    if (emailInput.value === '') {
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
    }
  })


  passwordInput.addEventListener('input', function () {
    if (passwordInput.value === '') {
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
      // console.log(passwordInput.value);
    }
  })


} else {
  console.log('#login not found');
}


// *---------------* //
// $3. Side menu
// *---------------* //

const logoutTemplate = `
          <div class="pt-8"></div>
          <div
          id="logout"
          class="hover:bg-secondary/5 border text-center w-11/12 py-1 mt-2 rounded-md"
        >
          <p class="text-base text-secondary/70 cursor-pointer">logout</p>
        </div>
`


const sideMenuList = [
  {
    page: 'Home',
    subPage: [
      'Greeting Section',
      'Introduction',
      'Memberships',
      'Book section',
      'Partner'
    ],
    icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  
                  stroke="currentColor"
                  class="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
`
  },
  {
    page: 'Space',
    subPage: [
      'Greeting section',
      'Introduction'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>
`
  },
  {
    page: 'Membership',
    subPage: [
      'Membership',
      'Promotion'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
`
  },
  {
    page: 'Join',
    subPage: [
      'Book section',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
`
  },
  {
    page: 'Blog',
    subPage: [
      'Post management',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
`
  },
  {
    page: 'System',
    subPage: [
      'Management',
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
`
  }
]
if (document.querySelector('#sideMenu')) {

  const sideMenu = document.querySelector('#sideMenu')

  sideMenuList.forEach((item) => {

    const pageName = document.createElement('div')
    pageName.className = 'page-name pt-5 flex items-center'
    // console.log(pageDiv)

    const pageH5 = document.createElement('h5')
    pageH5.className = 'mb-0 pl-3 text-secondary text-md hover:text-primary cursor-pointer'
    pageH5.textContent = item.page

    const pageUl = document.createElement('ul')
    pageUl.className = 'pl-4'

    // subPage
    item.subPage.forEach((subItem) => {

      const pageA = document.createElement('a')
      pageA.setAttribute('href', '#')
      pageA.className = ' text-secondary/70 hover:text-secondary/80 block w-full h-full'

      const pageLi = document.createElement('li')
      pageLi.className = 'transition-all p-1 m-1 rounded-md hover:bg-secondary/5'

      const pageSpan = document.createElement('span')
      pageSpan.className = 'pl-3'
      pageSpan.textContent = subItem

      //--------------------------------//
      // page active style
      //--------------------------------//
      // const currentPage = window.location.pathname.split('/').pop();
      // const trimedCurrentPage = currentPage.toLowerCase().replace('management-', '').trim();
      // const trimedSubItem = subItem.toLowerCase().replace(' ', '').trim();

      // console.log(trimedSubItem)
      // console.log(trimedCurrentPage)

      // if (trimedCurrentPage.toLowerCase().includes(trimedSubItem)) {
      //     pageA.classList.add('text-white')
      //     pageLi.classList.add('bg-secondary')
      // }
      //--------------------------------//
      // page active style
      //--------------------------------//

      pageLi.addEventListener('click', function () {
        pageA.classList.toggle('text-white')
        pageLi.classList.toggle('bg-secondary')
        pageA.classList.toggle('hover:text-white')
        pageLi.classList.toggle('hover:bg-secondary/5')

      })


      pageLi.append(pageSpan)
      pageA.append(pageLi)
      pageUl.append(pageA)

    })

    pageName.innerHTML += item.icon
    pageName.append(pageH5)
    // console.log(pageName)
    sideMenu.append(pageName, pageUl)

    //Icon style
    document.querySelectorAll('.icon').forEach((item) => {
      // console.log(item)
      item.classList.add('size-5', 'text-secondary/50')
      item.setAttribute('stroke-width', '2')
    })


  })
  sideMenu.innerHTML += logoutTemplate;


} else {
  console.log('#sideMenu not found');
}




// *---------------* //
// $4. Table style
// *---------------* //

// Enabled

let isClicked = false;


function enabledClicked(e) {

  if (!isClicked) {
    isClicked = true;
    console.log(e.target.closest('svg'))
    e.target.closest('svg').classList.remove('text-secondary/20')
    e.target.closest('svg').classList.add('text-primary')

  } else {
    isClicked = false;
    e.target.closest('svg').classList.remove('text-primary')
    e.target.closest('svg').classList.add('text-secondary/20')
  }

}

const enabled = document.querySelectorAll('.enabled');

enabled.forEach((item) => {
  item.addEventListener('click', function (e) {
    enabledClicked(e);
  })
})




// Collapsed


function collapseTable(e) {
  e.target.closest('.dropdown').querySelectorAll('.dropTable').forEach((items) => {
    items.classList.toggle('hidden');
  })
}

const titleCollapse = document.querySelectorAll('.titleCollapse');
titleCollapse.forEach((items) => {
  items.addEventListener('click', function (e) {
    collapseTable(e);
  })
})

// *---------------* //
// $5. Drag and drop
// *---------------* //

// *---------------* //
// $5.1. Add an item btn
// *---------------* //

// *---------------* //
// $5.2. Sortable(plugin)
// *---------------* //


if (document.querySelectorAll('.sortable-container')) {


  const sortableContainers = document.querySelectorAll('.sortable-container');
  sortableContainers.forEach((container, containerIndex) => {
    const sortable = Sortable.create(container.querySelector('.sortable'), {
      animation: 300,
      ghostClass: 'bg-primary/5',
      filter: '.disabled', // 過濾掉不可拖曳的行
      handle: 'td', // 設置拖曳的handle為<td>

      // 使用 onMove 回調確保 disabled 行不被移動
      onMove: function (evt) {
        // 如果目標行有 "disabled" 類，禁止移動
        return !evt.related.classList.contains('disabled');
      },

      onEnd: function (evt) {
        const items = container.querySelectorAll('tr');

        items.forEach((item, idx) => {
          if (idx === 0) return; // 跳過第一個行
          item.id = `order-${containerIndex + 1}-item-${idx}`;
          // console.log(item.id);
        });
      }
    });
  });
}

// *---------------* //
// $6. Blog - Add an section
// *---------------* //

if (document.querySelector('#addSection')) {
  const sectionTemplate = `                  <div
                    class="PostSection px-5 py-5 my-3 rounded-md bg-secondary/5"
                  >
                    <div class="flex justify-end text-red-800">
                      <a href="#" class="flex space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                        <p class="font-semibold text-sm">Delete this section</p>
                      </a>
                    </div>
                    <div>
                      <labal class="font-semibold text-sm text-secondary"
                        >Subtitle</labal
                      >
                      <input
                        type="text"
                        class="border-none shadow-none bg-white"
                      />
                    </div>
                    <div class="pt-5">
                      <div class="font-semibold text-sm text-secondary">
                        Contetent
                      </div>
                      <textarea
                        type="text"
                        rows="3"
                        class="w-full rounded-lg p-2 text-secondary"
                      >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a?</textarea
                      >
                    </div>
                    <div class="upload flex items-center">
                      <p
                        class="font-semibold text-sm text-nowrap text-secondary"
                      >
                        Image upload
                      </p>
                      <input
                        type="file"
                        class="border-none bg-transparent shadow-none p-2"
                      />
                    </div>
                    <div
                      class="imgbox object-cover max-h-[200px] max-w-[100px] overflow-hidden"
                    >
                      <img src="https://picsum.photos/200/100" alt="" />
                    </div>
                    <div class="pt-5"></div>
                    <labal class="font-semibold text-sm text-secondary"
                      >Image description</labal
                    >
                    <input
                      type="text"
                      class="border-none shadow-none bg-white"
                    />
                  </div>`
  const postSection = document.querySelector('#postSection')

  // console.log(postSection)

  const addSectionBtn = document.querySelector('#addSection')

}


// *---------------* //
// $7. set section
// *---------------* //

const moreOptions = document.querySelectorAll('.moreOptions');

moreOptions.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.stopPropagation(); 
    e.target.closest('.moreOptions').querySelector('.setSection').classList.toggle('hidden');
  });
});

// 點擊螢幕其他地方時關閉 .setSection
document.addEventListener('click', function () {
  document.querySelectorAll('.setSection').forEach((section) => {
    section.classList.add('hidden');
  });
});



// *---------------* //
// $8. Pagination
// *---------------* //

let currentPage = 1;
const totalPages = document.querySelectorAll('[data-page]').length;

if (totalPages) {
  const updatePagination = () => {
    document.querySelectorAll('[data-page]').forEach(button => {
      button.classList.remove('bg-secondary', 'text-white');
      button.classList.add('text-secondary');
    });
    const activeBtn = document.querySelector(`[data-page="${currentPage}"]`);
    activeBtn.classList.remove('text-primary');
    activeBtn.classList.add('bg-secondary', 'text-white');

    document.querySelectorAll('[data-page]').forEach(button => {
      button.addEventListener('click', function () {
        currentPage = parseInt(this.getAttribute('data-page'));
        updatePagination();
      });
    })

  };
  document.querySelector('#prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      updatePagination();
    }
  });

  document.querySelector('#nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      updatePagination();
    }
  });

  updatePagination();
} else {
  console.log('#Pagination not found');
}



