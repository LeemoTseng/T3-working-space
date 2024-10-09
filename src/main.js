
// *---------------* //
//
// Index
//
// $0. HTML Template
// $0.1. Navbar
// $0.2. Footer
// $0.3. Loading
// $1. Features
// $2. Plans
// $3. Partners' logos
// $4. Advantages
// $5. plugin - swiper
// $5.1. swiper content
// $6. Articles 
// $6.1. Pagination
// $6.2. Counter
// $7. Form validation
// $7.1. Form check
// $8. Space - Photos enlargement
// $9. Navbar - Mobile - Language switch
// $10. Cookie consent popup
//
// *---------------* //


// *---------------* //
// $0. HTML Template
// *---------------* //

// *---------------* //
// $0.1. Navbar
// *---------------* //

const navbarTemplate = `      <nav class="bg-white w-full fixed top-0 left-0 z-50 shadow-sm">
        <div
          class="mx-auto px-4 py-2 flex item-center justify-between items-center"
        >
          <!-- mobile-menu - btn -->
          <div class="md:hidden flex flex-none justify-between items-center">
            <div class="flex items-center">
              <button
                type="button"
                id="mobile-menu-btn"
                class="flex md:hidden items-center p-2 ml-1 text-sm text-secondary rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- logo -->
          <div class="logo w-32 mx-auto md:mx-0 md:ml-0 md:flex-shrink-0">
            <a href=""
              ><img
                class="mx-auto md:mx-0 md:ml-0"
                src="assets/T3CO.png"
                alt="T3ex-group"
            /></a>
          </div>
          <!-- menu -->
          <div class="menu flex-grow hidden md:flex justify-center ">
            <ul class="flex space-x-6 font-medium">
              <li class="mx-2">
                <a
                  href="index.html"
                  class="text-gray-600 hover:text-primary transition-all duration-200"
                  >Home</a
                >
              </li>
              <li class="mx-2">
                <a
                  href="space.html"
                  class="text-gray-600 hover:text-primary transition-all duration-200"
                  >Space</a
                >
              </li>
              <li class="mx-2">
                <a
                  href="memberships.html"
                  class="text-gray-600 hover:text-primary transition-all duration-200"
                  >Memberships</a
                >
              </li>
              <li class="mx-2">
                <a
                  href="join.html"
                  class="text-gray-600 hover:text-primary transition-all duration-200"
                  >Join</a
                >
              </li>
              <li class="mx-2">
                <a
                  href="blog.html"
                  class="text-gray-600 hover:text-primary transition-all duration-200"
                  >Blog</a
                >
              </li>
            </ul>
          </div>
          <!-- Language selector -->
          <div class="language flex-shrink-0 hidden md:flex">
            <select class="border border-gray-300 rounded-md p-2 px-3">
              <option value="en">English</option>
              <option value="zh">中文（繁體）</option>
            </select>
          </div>
        </div>
      </nav>
      <!-- mobile-menu -->
      <div id="mobile-menu" class="bg-white w-full md:hidden hidden fixed z-50">
        <ul class="flex flex-col space-y-4 px-4 py-4 shadow-sm">
          <li>
            <a
              href="index.html"
              class="border-b pb-3 block text-gray-600 hover:text-primary transition-all duration-200"
              >Home</a
            >
          </li>
          <li>
            <a
              href="space.html"
              class="border-b pb-3 block text-gray-600 hover:text-primary transition-all duration-200"
              >Space</a
            >
          </li>
          <li>
            <a
              href="memberships.html"
              class="border-b pb-3 block text-gray-600 hover:text-primary transition-all duration-200"
              >Memberships</a
            >
          </li>
          <li>
            <a
              href="join.html"
              class="border-b pb-3 block text-gray-600 hover:text-primary transition-all duration-200"
              >Join</a
            >
          </li>
          <li>
            <a
              href="blog.html"
              class="border-b pb-3 block text-gray-600 hover:text-primary transition-all duration-200"
              >Blog</a
            >
          </li>
          <li>
          <!-- Language selector -->
          <div id="languageSwitch" class="flex justify-end space-x-2">
              <div id="tw" class=" p-2 rounded-md bg-primary cursor-pointer">
                <p class="text-white ">中文</p>
              </div>
              <div id="en" class="p-2 rounded-md cursor-pointer">
                <p>English</p>
              </div>
          </div>
          </li>
        </ul>

      </div>`
document.querySelector('#navBar').innerHTML += navbarTemplate;

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  hamburgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
  // 點擊其他地方會關閉mobile-menu
  document.addEventListener('click', function (e) {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnButton = hamburgerButton.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});
// console.log(document.querySelector('#navBar'));

// *---------------* //
// $0.2. Footer
// *---------------* //

const footerTemplate = `<footer class="bg-gray-50">
      <div
        class="max-w-screen-xl mx-auto items-center md:items-start pb-24 pt-16 mt-32"
      >
        <div
          class="contact flex flex-col justify-center sm:flex sm:flex-row sm:justify-start items-center pb-2"
        >
          <a href=""><img class="w-40" src="assets/T3CO.png" alt="" /></a>
          <div class="icon flex md:pl-5 pl-2 pb-3 pt-5">
            <a
              href="#"
              class="px-1 block text-secondary/60 transition-all duration-300 hover:text-primary"
            >
              <svg
                class="w-[2.6rem] h-[2.6rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
              >
                <path
                  d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.144563 12 40.226562 12 L 23.773438 12 z M 32.005859 18.664062 C 40.581859 18.664062 47.5625 24.327063 47.5625 31.289062 C 47.5625 34.076062 46.481563 36.587594 44.226562 39.058594 C 40.963562 42.815594 33.664859 47.390844 32.005859 48.089844 C 30.347859 48.787844 30.593203 47.643 30.658203 47.25 C 30.698203 47.017 30.880859 45.919922 30.880859 45.919922 C 30.933859 45.521922 30.988078 44.906719 30.830078 44.511719 C 30.654078 44.080719 29.965984 43.853141 29.458984 43.744141 C 21.982984 42.755141 16.449219 37.529063 16.449219 31.289062 C 16.449219 24.329063 23.429859 18.664062 32.005859 18.664062 z M 27.685547 28.201172 C 27.229547 28.201172 26.859375 28.558141 26.859375 28.994141 L 26.859375 35.003906 C 26.859375 35.443906 27.229547 35.800781 27.685547 35.800781 C 28.141547 35.800781 28.513672 35.441906 28.513672 35.003906 L 28.513672 28.994141 C 28.513672 28.557141 28.141547 28.201172 27.685547 28.201172 z M 31.205078 28.201172 C 31.123078 28.201172 31.039031 28.211234 30.957031 28.240234 C 30.635031 28.349234 30.417969 28.652141 30.417969 28.994141 L 30.417969 35.003906 C 30.417969 35.443906 30.769078 35.798828 31.205078 35.798828 C 31.641078 35.798828 31.994141 35.439906 31.994141 35.003906 L 31.994141 31.285156 L 35.054688 35.480469 C 35.201687 35.680469 35.436594 35.798828 35.683594 35.798828 C 35.768594 35.798828 35.853594 35.786813 35.933594 35.757812 C 36.257594 35.648812 36.472656 35.345906 36.472656 35.003906 L 36.46875 35.003906 L 36.46875 28.994141 C 36.46875 28.557141 36.116594 28.201172 35.683594 28.201172 C 35.250594 28.201172 34.894531 28.558141 34.894531 28.994141 L 34.894531 32.714844 L 31.835938 28.519531 C 31.688937 28.319531 31.452078 28.201172 31.205078 28.201172 z M 39.146484 28.201172 C 38.690484 28.201172 38.318359 28.558141 38.318359 28.994141 L 38.318359 28.996094 L 38.318359 31.996094 L 38.318359 31.998047 L 38.318359 32 L 38.318359 35.003906 C 38.318359 35.443906 38.690484 35.798828 39.146484 35.798828 L 42.28125 35.798828 C 42.73925 35.798828 43.111328 35.442859 43.111328 35.005859 C 43.111328 34.568859 42.73725 34.212891 42.28125 34.212891 L 39.972656 34.212891 L 39.972656 32.792969 L 42.28125 32.792969 C 42.73925 32.792969 43.111328 32.436 43.111328 32 C 43.111328 31.56 42.73725 31.203125 42.28125 31.203125 L 39.972656 31.207031 L 39.972656 29.787109 L 42.28125 29.787109 C 42.73925 29.787109 43.111328 29.432141 43.111328 28.994141 C 43.111328 28.557141 42.73725 28.201172 42.28125 28.201172 L 39.146484 28.201172 z M 21.716797 28.203125 C 21.260797 28.203125 20.888672 28.558094 20.888672 28.996094 L 20.888672 35.005859 C 20.888672 35.445859 21.260797 35.798828 21.716797 35.798828 L 24.851562 35.798828 C 25.309562 35.798828 25.678687 35.442813 25.679688 35.007812 C 25.679687 34.570813 25.307562 34.214844 24.851562 34.214844 L 22.542969 34.214844 L 22.542969 28.996094 C 22.542969 28.559094 22.172797 28.203125 21.716797 28.203125 z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              class="block text-secondary/60 transition-all duration-200 hover:text-primary"
            >
              <svg
                class="w-[2rem] h-[2.3rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block text-secondary/60 transition-all duration-200 hover:text-primary"
            >
              <svg
                class="w-[1.9rem] h-[1.9rem] ml-2 mt-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block text-secondary/60 transition-all duration-200 hover:text-primary"
            >
              <svg
                class="w-[2rem] h-[2rem] ml-3 mt-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="block text-secondary/60 transition-all duration-200 hover:text-primary"
            >
              <svg
                class="w-[2rem] h-[2rem] ml-3 mt-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="border-t sm:w-1/2 w-full border-secondary/20"></div>
        <ul class="text-secondary/80 pl-5 pt-5 space-y-2">
          <li class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6 me-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p>
              17F, No. 563, Sec. 4, Zhongxiao E. Rd., Xinyi District, Taipei
              City 110058
            </p>
          </li>
          <li class="flex">
            <svg
              class="w-6 h-6 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>

            <p>+886-2-2756-5735</p>
          </li>
          <li class="flex">
            <svg
              class="w-6 h-6 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
              />
            </svg>

            <p>+886-2-2749-5632</p>
          </li>
          <li class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6 me-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>

            <p>contact@t3ex-t3co.com</p>
          </li>
        </ul>
      </div>
      <div class="bg-secondary w-full h-full pb-6 pt-4 text-sm px-5">
        <!-- copywrite -->
        <div
          class="copywrite max-w-screen-xl flex flex-col items-center md:flex md:flex-row md:justify-between md:text-center mx-auto"
        >
          <div class="text-white font-semibold">T3CO Coworking Space</div>
          <div class="md:flex md:flex-row flex flex-col items-center space-x-2 ">
            <p class="text-white text-center">© 2024 T3CO™ A Member of T3EX Global Holdings (Stock Code 2636)</p>
            <a class="text-white underline cursor-pointer">隱私權政策</a>
          </div>
        </div>
      </div>
    </footer>`;
document.querySelector('#footer').innerHTML += footerTemplate;


// *---------------* //
// $0.3. Loading
// *---------------* //


// *---------------* //
// $1. Features
// *---------------* //

// Best Location and Facilities
const ul = document.createElement('ul');
ul.className = 'pt-8 my-7 space-y-3 border-t border-gray-200';

const features1 = [
  'Conveniently located next to City Hall MRT Station',
  'High-speed internet',
  'Adjustable electronic tables',
  'Ergonomic office equipment',
  'Phone booths, meeting rooms & podcast rooms',
  'Business support',
  'Lockers & storage',
  'Printing & Fax',
  'Showers',
  'Parkings',
  'Networking events',
  'External event rental',
  'Open kitchen, aquariums and wonderful views from 17F'
]

if (document.querySelector('#feature1')) {
  features1.forEach(text => {

    //list item
    const li = document.createElement('li');
    li.className = 'flex space-x-3 items-center';

    //icon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-[24px] h-[24px] text-primary');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z');
    path.setAttribute('clip-rule', 'evenodd');
    svg.append(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900';
    span.textContent = text;

    //append
    li.append(svg, span);
    ul.append(li);
    document.querySelector('#feature1').append(ul);




  })
} else {
  console.log('#feature1 not found');
}

// Diverse Membership Options

const ul2 = document.createElement('ul');
ul2.className = 'pt-8 my-7 space-y-3 border-t border-gray-200';

const features2 = [
  'Flexible hot desks',
  'Comfortable dedicated desks',
  'Affordable private offices',
  'Small to medium sized meeting rooms',
  'Large external event rental'
]

if (document.querySelector('#feature2')) {
  features2.forEach(text => {

    //list item
    const li = document.createElement('li');
    li.className = 'flex space-x-3 items-center';

    //icon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-[24px] h-[24px] text-primary');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z');
    path.setAttribute('clip-rule', 'evenodd');
    svg.append(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900';
    span.textContent = text;

    //append
    li.append(svg, span);
    li.append(span);
    ul2.append(li);
    document.querySelector('#feature2').append(ul2);

  })
} else {
  console.log('#feature2 not found');
}


// Global Community

const ul3 = document.createElement('ul');
ul3.className = 'pt-8 my-7 space-y-3 border-t border-gray-200';

const feature3 = [
  'Multilingual on-site staff',
  'Diverse community',
  'In-house community events',
  'Various external events',
  'Happy hours to unwind after a hard week of work',
  'The best networking opportunities'
]

if (document.querySelector('#feature3')) {
  feature3.forEach(item => {
    const li = document.createElement('li');
    li.className = 'flex space-x-3 items-center';

    //icon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'w-[24px] h-[24px] text-primary');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');


    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z');
    path.setAttribute('clip-rule', 'evenodd');
    svg.append(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900'
    span.textContent = item;

    //append
    li.append(svg, span);
    ul3.append(li);
    document.querySelector('#feature3').append(ul3);


  })
} else {
  console.log('#feature3 not found');
}

// *---------------* //
// $2. Plans
// *---------------* //


//plans
const plans = [
  {
    title: 'HOT DESK',
    description: 'Ideal for freelancers, remote professionals & digital nomads',
    currency: 'NT$',
    price: '6,500',
    priod: '/month',
    from: '',
    features: [
      { text: 'Shared seating', available: true },
      { text: '24/7 access', available: true },
      { text: 'Complimentary coffee, beverages & snacks', available: true },
      { text: 'Full event access', available: true },
      { text: 'Fully-equipped meeting rooms and high speed internet', availible: false },
      { text: 'Electric height adjustable desks', available: false },
      { text: 'Ergonomic chairs', available: false },
      { text: 'Secure and private rooms', available: false },
      { text: 'Secure and private rooms', available: false },
    ]
  },
  {
    title: 'DEDICATED DESK',
    description: 'Ideal for solopreneurs, creative professionals & remote teams',
    currency: 'NT$',
    price: '10,000',
    priod: '/month',
    from: 'from',
    features: [
      { text: 'Designated seating', available: true },
      { text: '24/7 access', available: true },
      { text: 'Electric height adjustable desks', available: true },
      { text: 'Ergonomic chairs', available: true },
      { text: 'Complimentary coffee, beverages & snacks', available: true },
      { text: 'Fully-equipped meeting rooms and high speed internet', available: true },
      { text: 'Full event access', available: true },
      { text: 'Secure and private rooms', available: false },
    ]
  }, {
    title: 'PRIVATE OFFICE',
    description: 'Ideal for startup entrepreneurs, small & medium businesses',
    currency: '',
    price: 'Enquire now',
    priod: '',
    from: '',
    features: [
      { text: 'Designated seating', available: true },
      { text: '24/7 access', available: true },
      { text: 'Electric height adjustable desks', available: true },
      { text: 'Ergonomic chairs', available: true },
      { text: 'Complimentary coffee, beverages & snacks', available: true },
      { text: 'Fully-equipped meeting rooms and high speed internet', available: true },
      { text: 'Full event access', available: true },
      { text: 'Secure and private rooms', available: true }
    ]
  }
]


if (document.querySelector('#allPlan')) {

  plans.forEach(plan => {

    // forEach plan card
    const planDiv = document.createElement('div');
    planDiv.className = 'plan flex flex-col max-w-lg mx-auto lg:mx-0';

    const planContainer = document.createElement('div');
    planContainer.className = 'container w-full h-full flex flex-col items-start p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'

    const planTitle = document.createElement('h6');
    planTitle.textContent = plan.title;

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'items flex block items-baseline text-gray-900'

    const planCurrency = document.createElement('span');
    planCurrency.className = 'text-3xl font-semibold';
    planCurrency.textContent = plan.currency;

    const planPrice = document.createElement('span');
    planPrice.className = 'md:text-5xl text-3xl font-extrabold tracking-tight py-2'
    planPrice.textContent = plan.price;

    const planPeriod = document.createElement('span');
    planPeriod.className = 'ms-1 md:text-xl text-sm font-normal text-gray-500'
    planPeriod.textContent = plan.priod;

    const planDescription = document.createElement('p');
    planDescription.className = 'font-light text-gray-500 sm:text-lg mt-3 h-14';
    planDescription.textContent = plan.description;

    const fromSpan = document.createElement('span');
    fromSpan.className = 'mr-2 text-gray-500';
    fromSpan.textContent = plan.from;

    itemsDiv.append(fromSpan, planCurrency, planPrice, planPeriod);

    const divider = document.createElement('div');
    divider.className = 'modified-container';

    const featureList = document.createElement('ul');
    featureList.className = 'space-y-5 my-7';
    featureList.setAttribute('role', 'list');

    divider.append(featureList);


    // Feature focus
    plan.features.forEach(feature => {
      if (feature.available) {
        const featureItem = document.createElement('li');
        featureItem.className = 'flex items-center';

        const featureIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        featureIcon.setAttribute('class', 'flex-shrink-0 w-4 h-4');
        featureIcon.setAttribute('aria-hidden', 'true');
        featureIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        featureIcon.setAttribute('fill', 'none');
        featureIcon.setAttribute('viewBox', '0 0 24 24');

        const featurePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        featurePath.setAttribute('stroke', 'currentColor');
        featurePath.setAttribute('stroke-linecap', 'round');
        featurePath.setAttribute('stroke-linejoin', 'round');
        featurePath.setAttribute('stroke-width', '3');

        featureIcon.classList.add('text-primary');
        featurePath.setAttribute('d', 'M5 11.917 9.724 16.5 19 7.5');

        featureIcon.append(featurePath);

        const featureText = document.createElement('span');
        featureText.classList.add('text-base', 'font-normal', 'leading-tight', 'ms-3');
        featureText.textContent = feature.text;

        featureItem.append(featureIcon, featureText);
        featureList.append(featureItem);
      }
    });

    //Btn - Choose plan
    const chooseButton = document.createElement('button');
    chooseButton.type = 'button';

    chooseButton.className = 'btn-default text-sm px-5 py-2.5 justify-center w-full text-center mt-auto';
    chooseButton.textContent = 'Choose plan';

    planContainer.append(planTitle, itemsDiv, planDescription, divider, chooseButton);
    planDiv.append(planContainer);

    document.querySelector('#allPlan').append(planDiv);

  });
} else {
  console.log('#allPlan not found');
}



// *---------------* //
// $3. Partners' logos
// *---------------* //
//
// ** Recommended type: png, horizaontal, 200x100(px) **
//
const partners = [
  {
    imgUrl: 'assets/mock/mock-vertical.png',
    alt: 'mock',
    title: 'Logo1',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'
  }, {
    imgUrl: 'assets/mock/mock-horizontal.png',
    alt: 'mock',
    title: 'Logo2',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'

  }, {
    imgUrl: 'assets/mock/mock-01.png',
    alt: 'mock',
    title: 'Logo3',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'

  }, {
    imgUrl: 'assets/mock/mock-02.png',
    alt: 'mock',
    title: 'Logo4',
    description: 'lorem ipsum dolor sit amet, consectetur.',
  }, {
    imgUrl: 'assets/mock/mock-03.png',
    alt: 'mock-vertical',
    title: 'Logo5',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'

  }, {
    imgUrl: 'assets/mock/mock-04.png',
    alt: 'mock',
    title: 'Logo6',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'

  }, {
    imgUrl: 'assets/mock/mock-05.png',
    alt: 'mock',
    title: 'Logo7',
    description: 'lorem ipsum dolor sit amet, consectetur.',
  }, {
    imgUrl: 'assets/mock/mock-06.png',
    alt: 'mock',
    title: 'Logo8',
    description: 'lorem ipsum dolor sit amet, consectetur.',
    link: '#'

  }
]

if (document.querySelector('#partnersAll')) {
  partners.forEach(partner => {

    const link = document.createElement('a');
    link.href = partner.link;
    link.target = '_blank';


    const partnerDiv = document.createElement('div');
    partnerDiv.classList.add('partner', 'flex', 'flex-col', 'items-center', 'p-2', 'hover:text-primary', 'cursor-pointer');

    const imgBoxDiv = document.createElement('div');
    imgBoxDiv.classList.add('imgBox', 'p-2', 'h-[120px]', 'max-w-[200px]')

    const img = document.createElement('img');
    img.classList.add('object-contain', 'w-full', 'h-full')
    img.setAttribute('src', partner.imgUrl);
    img.setAttribute('alt', partner.alt);

    // console.log(img);

    const titleP = document.createElement('p');
    titleP.classList.add('font-bold', 'text-xl', 'mt-3');
    titleP.textContent = partner.title;

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('w-full', 'text-center', 'mt-2');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('text-slate-500');
    descriptionSpan.textContent = partner.description;


    imgBoxDiv.append(img);
    descriptionP.append(descriptionSpan);
    partnerDiv.append(imgBoxDiv, titleP, descriptionP);
    link.append(partnerDiv);

    document.querySelector('#partnersAll').append(link);
  })
} else {
  console.log('#partnersAll not found');
}

// *---------------* //
// $4. Advantages
// *---------------* //

const advantages = [
  {
    title: 'Kitchen & Dining',
    description: 'Equipped with a lounge/kitchen with complementary coffee and a cozy dining area, T3CO allows you to prepare and savor your meals without ever having to step out. Whether you’re fueling up for the day or winding down, our facilities make it easy and convenient.',
    src: 'assets/features/Kitchen-Cabinets.svg',
    alt: 'mock',
  }, {
    title: 'Showers and Storage',
    description: 'Start your day fresh or switch gears effortlessly with our on-site showers and personal lockers—perfect for those who bike to work, hit the gym during lunch, or simply need to freshen up after a long day.',
    src: 'assets/features/Home Assistant Shower.svg',
    alt: 'mock',
  }, {
    title: 'Electric Height Adjustable Desks',
    description: 'Adjust your workspace to fit your comfort with our electric height adjustable desks. Whether you prefer standing or sitting while you work, these desks adapt to your preferred style, promoting better posture and well-being.',
    src: 'assets/features/Home Assistant Outlined Icon.svg',
    alt: 'mock',
  }, {
    title: '24/7 Access',
    description: 'Night owl or early riser, T3CO supports your unique workflow by being accessible 24/7. Work on your schedule without the constraints of traditional office hours in a secure and welcoming environment.',
    src: 'assets/features/Home Assistant Outlined Icon 4.svg',
    alt: 'mock',
  }, {
    title: 'Global Community',
    description: 'Join an inspiring community of professionals from around the globe. At T3CO, networking happens naturally. Expand your professional network, share ideas, and collaborate with like-minded individuals from diverse industries.',
    src: 'assets/features/International Community People.svg',
    alt: 'mock',
  },
  {
    title: 'Events & Workshops',
    description: 'Stay ahead of the curve with our regular events and workshops designed to enhance your skills and knowledge. From tech talks to creative workshops, there’s always an opportunity to learn something new and connect with other professionals.',
    src: 'assets/features/Workshop icon.svg',
    alt: 'mock',
  }
]
if (document.querySelector('#advantages')) {
  advantages.forEach(item => {
    const features4Div = document.createElement('div');
    features4Div.classList.add('feature', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'md:justify-start', 'md:items-start');

    const imgBoxDiv = document.createElement('div');
    imgBoxDiv.classList.add('imgBox', 'w-[150px]', 'md:w-[100px]', 'p-5', 'bg-white', 'rounded-full', 'overflow-hidden', 'mr-3', 'mt-2', 'shrink-0');

    const featureImg = document.createElement('img');
    featureImg.setAttribute('src', item.src);
    featureImg.setAttribute('alt', item.alt);
    featureImg.classList.add('object-fit', 'w-full', 'h-full');

    const descriptionH3 = document.createElement('h3');
    descriptionH3.classList.add('text-xl', 'font-bold', 'text-secondary', 'sm:text-2xl', 'text-center', 'md:text-start');
    descriptionH3.textContent = item.title;

    const descriptionDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('mt-2', 'text-base', 'font-normal', 'text-gray-400', 'sm:text-lg');
    descriptionSpan.textContent = item.description;


    imgBoxDiv.append(featureImg);
    descriptionDiv.append(descriptionH3, descriptionSpan);
    features4Div.append(imgBoxDiv, descriptionDiv);

    document.querySelector('#advantages').append(features4Div);
    // console.log(features4Div);
  })
} else {
  console.log('#advantages not found');
}

// *---------------* //
// $5. plugin - swiper 
// *---------------* //

// *---------------* //
// $5.1. swiper content
// *---------------* //

const swiperContent = [
  {
    title: 'Welcome to Taipei\'s Premiere New Coworking Space.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamuset lorem eget tellus tempus vulputate. Suspendisse nec lobortisipsum, ut dictum neque. Nulla mi velit,',
    src: 'assets/blog/P1103383.jpg',
    alt: '',
    link: '#'
  }, {
    title: 'Welcome to Taipei\'s Premiere New Coworking Space.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamuset lorem eget tellus tempus vulputate. Suspendisse nec lobortisipsum, ut dictum neque. Nulla mi velit,',
    src: 'assets/blog/P1103389.jpg',
    alt: '',
    link: 'blog-post.html'
  }, {
    title: 'Welcome to Taipei\'s Premiere New Coworking Space.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamuset lorem eget tellus tempus vulputate. Suspendisse nec lobortisipsum, ut dictum neque. Nulla mi velit,',
    src: 'assets/blog/P1103391.jpg',
    alt: '',
    link: 'blog-post.html'
  }, {
    title: 'Welcome to Taipei\'s Premiere New Coworking Space.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamuset lorem eget tellus tempus vulputate. Suspendisse nec lobortisipsum, ut dictum neque. Nulla mi velit,',
    src: 'assets/blog/P1103393.jpg',
    alt: '',
    link: 'blog-post.html'
  }, {
    title: 'Welcome to Taipei\'s Premiere New Coworking Space.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamuset lorem eget tellus tempus vulputate. Suspendisse nec lobortisipsum, ut dictum neque. Nulla mi velit,',
    src: 'assets/blog/P1103399.jpg',
    alt: '',
    link: 'blog-post.html'
  },
]

const swiperWrapper = document.getElementById("swiper-wrapper");

if (swiperWrapper) {
  swiperContent.forEach((item) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide",
      "relative",
    );

    const link = document.createElement("a");
    link.setAttribute("href", item.link);
    link.classList.add("block", "h-full", "w-full");

    const imgBoxDiv = document.createElement("div");
    imgBoxDiv.classList.add("imgBox", "md:h-[600px]", "h-[500px]", "relative");

    const img = document.createElement("img");
    img.classList.add("object-cover", "w-full", "h-full", "absolute");
    img.setAttribute("src", item.src);
    img.setAttribute("alt", item.alt);

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add(
      "absolute",
      "inset-0",
      "bg-black/[.4]",

      "transition-all",
      "duration-200"
    );

    const textDiv = document.createElement("div");
    textDiv.classList.add(
      "text",
      "absolute",
      "inset-0",
      "top-1/3",

      "px-4",
    );

    const innerTextDiv = document.createElement("div");
    innerTextDiv.classList.add(
      "max-w-screen-xl",
      "mx-auto",
      "text-white",
    );

    const h2 = document.createElement("h2");
    h2.classList.add("gap-8", "max-w-2xl", "text-white", "text-3xl", "md:text-5xl", "font-bold");
    h2.textContent = item.title;
    const borderDiv = document.createElement("div");
    borderDiv.classList.add("border-4", "border-primary", "w-24", "my-4");

    const subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("subtitle", "max-w-2xl");
    subtitleDiv.textContent = item.subtitle;

    innerTextDiv.append(h2, borderDiv, subtitleDiv);
    textDiv.append(innerTextDiv);
    imgBoxDiv.append(img, overlayDiv);
    link.append(imgBoxDiv, textDiv);
    swiperSlide.append(link);

    swiperWrapper.append(swiperSlide);

    // console.log(swiperWrapper)

  });
} else {
  console.log("#swiper-wrapper not found");
}

function setActiveBulletColor() {
  document.querySelectorAll('.swiper-pagination-bullet').forEach((item) => {
    item.classList.add('bg-gray-300')
  });
  const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
  if (activeBullet) {
    activeBullet.classList.remove('bg-gray-300');
    activeBullet.classList.add('bg-primary');
  }
}


// *---------------* //
// $6. Articles 
// *---------------* //

const articlesContainer = document.getElementById("articles");

const articleData = [{
  link: "blog-post.html",
  imgUrl: "./assets/blog/P1103394.jpg",
  imgAlt: "Example Image",
  date: "July 12, 2023",
  views: "2,934",
  title: "Transform Your Home: The Power of Interior Design Lorem ipsum dolor sit amet.",
  description: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back"
}, {
  link: "blog-post.html",
  imgUrl: "./assets/blog/P1103389.jpg",
  imgAlt: "Example Image",
  date: "July 12, 2023",
  views: "2,934",
  title: "Transform Your Home: The Power of Interior Design Lorem ipsum dolor sit amet.",
  description: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back"
}, {
  link: "blog-post.html",
  imgUrl: "./assets/blog/P1103399.jpg",
  imgAlt: "Example Image",
  date: "July 12, 2023",
  views: "2,934",
  title: "Transform Your Home: The Power of Interior Design Lorem ipsum dolor sit amet.",
  description: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back"
}, {
  link: "blog-post.html",
  imgUrl: "./assets/blog/P1103393.jpg",
  imgAlt: "Example Image",
  date: "July 12, 2023",
  views: "2,934",
  title: "Transform Your Home: The Power of Interior Design Lorem ipsum dolor sit amet.",
  description: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back"
}];


if (articlesContainer) {

  articleData.forEach(item => {

    const linkElement = document.createElement('a');
    linkElement.setAttribute('target', '_blank');
    linkElement.href = item.link;

    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article', 'rounded-xl', 'p-0', 'sm:p-5', 'pb-20', 'hover:text-primary');

    const imgBoxDiv = document.createElement('div');
    imgBoxDiv.classList.add('imgBox', 'overflow-hidden', 'rounded-xl', 'm-2', 'h-[300px]');

    const imgElement = document.createElement('img');
    imgElement.classList.add('w-full', 'h-full', 'object-cover');
    imgElement.setAttribute('src', item.imgUrl);
    imgElement.setAttribute('alt', item.imgAlt);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text', 'px-3', 'leading-normal');

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date', 'flex', 'justify-between', 'pt-3');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('text-gray-400', 'font-medium');
    dateSpan.textContent = item.date;

    const readDiv = document.createElement('div');
    readDiv.classList.add('counterIcon', 'read', 'flex', 'text-gray-400');

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('fill', 'currentColor');
    svgElement.classList.add('size-6', 'pe-2');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('fill-rule', 'evenodd');
    path2.setAttribute('d', 'M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z');
    path2.setAttribute('clip-rule', 'evenodd');

    svgElement.append(path1, path2);

    const viewsDiv = document.createElement('div');
    viewsDiv.textContent = item.views;

    readDiv.append(svgElement, viewsDiv);
    dateDiv.append(dateSpan, readDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title', 'pt-3');

    const h4 = document.createElement('h4');
    h4.classList.add('text-2xl', 'font-bold');
    h4.textContent = item.title;

    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-t', 'my-3');

    titleDiv.append(h4, borderDiv);

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('text-gray-500', 'text-left', 'lg:text-justify');
    descriptionP.textContent = item.description;

    imgBoxDiv.append(imgElement);
    textDiv.append(dateDiv, titleDiv, descriptionP);
    articleDiv.append(imgBoxDiv, textDiv);
    linkElement.append(articleDiv);

    articlesContainer.append(linkElement);

  })

} else {
  console.log("#articles not found");
}




// *---------------* //
// $7. Articles - List
// *---------------* //

const articles = [
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  },
  {
    date: "July 12, 2024",
    title: "Welcome to Our Space",
    content: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    link: "#"
  }
];

const articleList = document.querySelector('#articleList')

if (articleList) {
  articles.forEach(article => {
    const liElement = document.createElement('li');
    liElement.classList.add('flex', 'flex-col', 'justify-start', 'border-b', 'py-5', 'leading-loose');

    const aElement = document.createElement('a');
    aElement.setAttribute('href', article.link);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date', 'text-gray-400', 'font-medium');
    dateDiv.textContent = article.date;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title', 'text-2xl', 'font-bold', 'py-2', 'hover:text-primary');
    titleDiv.textContent = article.title;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content', 'text-lg', 'text-gray-500', 'text-justify');
    contentDiv.textContent = article.content;

    aElement.append(dateDiv, titleDiv, contentDiv);
    liElement.append(aElement);
    articleList.append(liElement);

  });


} else {
  console.log("#articleList not found");
}
// *---------------* //
// $6.1. Pagination 
// *---------------* //

let currentPage = 1;
const totalPages = document.querySelectorAll('[data-page]').length;

if (totalPages) {
  const updatePagination = () => {
    document.querySelectorAll('[data-page]').forEach(button => {
      button.classList.remove('bg-primary', 'text-white');
      button.classList.add('text-primary');
    });
    const activeBtn = document.querySelector(`[data-page="${currentPage}"]`);
    activeBtn.classList.remove('text-gray-900');
    activeBtn.classList.add('bg-primary', 'text-white');

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

// *---------------* //
// $6.2. Counter 
// *---------------* //

const counterIcon = document.querySelectorAll('.counterIcon');


// *---------------* //
// $7. Form validation
// *---------------* //

const form = document.querySelector('#contactForm');

if (form) {

  const submitBtn = document.querySelector('#submitBtn');

  submitBtn.addEventListener('click', function (e) {

    document.querySelectorAll('.errorMessages').forEach(item => item.remove());

    // form validation
    let formIsValid = true;

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const membershipInput = document.querySelector('#membership');
    const tourDateInput = document.querySelector('#tourDate');
    const howInput = document.querySelector('#how');
    const companyInput = document.querySelector('#company');
    const messageInput = document.querySelector('#message');


    document.querySelector('#popupName').textContent = nameInput.value;
    document.querySelector('#popupEmail').textContent = emailInput.value;
    document.querySelector('#popupPhone').textContent = phoneInput.value;
    document.querySelector('#popupMembership').textContent = membershipInput.value;
    document.querySelector('#popupTourDate').textContent = tourDateInput.value;
    document.querySelector('#popupHow').textContent = howInput.value !== 'default' ? howInput.value : '';
    document.querySelector('#popupCompany').textContent = companyInput.value;
    document.querySelector('#popupMessage').textContent = messageInput.value;


    // name validation
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('border-red-600');
      nameInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Name is required</div>');
      formIsValid = false;

    } else {
      nameInput.classList.remove('border-red-600');
    }

    // email validation
    if (emailInput.value.trim() === '') {
      emailInput.classList.add('border-red-600');
      emailInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Email is invalid.</div>');
      formIsValid = false;

    } else if (!emailInput.value.trim().includes('@')) {
      emailInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Email is invalid.</div>');
      formIsValid = false;

    } else {
      emailInput.classList.remove('border-red-600');

    }

    // phone validation
    if (phoneInput.value.trim() === '' || phoneInput.value.trim().length < 9) {
      phoneInput.classList.add('border-red-600');
      phoneInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Phone is invalid.</div>');
      formIsValid = false;

    } else {
      phoneInput.classList.remove('border-red-600');

    }

    // membership validation

    if (membershipInput.value === 'default') {
      membershipInput.classList.add('border-red-600');
      membershipInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Option must be selected.</div>');
      formIsValid = false;

    } else {
      document.querySelector('#membership').classList.remove('border-red-600');

    }

    // Tour date validation
    if (tourDateInput.value === '') {
      tourDateInput.classList.add('border-red-600');
      tourDateInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Tour date is required.</div>');
      formIsValid = false;

    } else {
      document.querySelector('#tourDate').classList.remove('border-red-600');
    }

    // how did you hear about us validation

    if (howInput.value === 'default') {
      howInput.classList.add('border-red-600');
      howInput.insertAdjacentHTML('afterend', '<div class="errorMessages text-sm text-red-700 opacity-80 p-1">Option must be selected.</div>');
      formIsValid = false;

    } else {
      howInput.classList.remove('border-red-600');
    }

    // popup

    const popup = document.querySelector('#popup');
    const popup2 = document.querySelector('#popup2');
    const popup3 = document.querySelector('#popup3');

    const closePopupBtn = document.querySelectorAll('.closePopupBtn');

    closePopupBtn.forEach((items) => {

      items.addEventListener('click', (e) => {
        e.target.closest('.popup').classList.remove('flex')
        e.target.closest('.popup').classList.add('hidden')
        // console.log(e.target.closest('.popup'));
      })
    })

    if (!formIsValid) {
      popup.classList.remove('hidden');
      popup.classList.add('flex');

    }

    document.querySelector('#laterPopupBtn').addEventListener('click', function () {
      popup.classList.remove('flex');
      popup.classList.add('hidden');
    })

    //clean input value


    const submitPopupBtn = document.querySelector('#submitPopupBtn');
    submitPopupBtn.addEventListener('click', function () {
      console.log(submitPopupBtn);
      popup.classList.add('hidden');
      popup.classList.remove('flex');

      // 發送請求寫在這

      axios.post(`/${culture}/Join/SubmitData`, data)
        .then(res => {
          console.log(res);

          popup2.classList.remove('hidden');
          popup2.classList.add('flex');

          nameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
          membershipInput.value = '';
          tourDateInput.value = '';
          howInput.value = '';
          companyInput.value = '';
          messageInput.value = '';
        })
        .catch(err => {
          console.log(err);
          popup3.classList.remove('hidden');
          popup3.classList.add('flex');
        })



    })

    // Close popup
    window.addEventListener('click', function (e) {
      if (e.target === popup2) {
        popup2.classList.remove('flex');
        popup2.classList.add('hidden');
      }
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        popup2.classList.remove('flex');
        popup2.classList.add('hidden');
      }
    });

  });

} else {
  console.log('#contactForm not found');
}



// *---------------* //
// $8. Space - Photos enlargement
// *---------------* //


if (document.querySelector('#imgGroup')) {

  const imgGroup = document.querySelector('#imgGroup');
  const enlargedWindow = document.querySelector('#enlargedWindow');
  let enlargedWindowImg = '';

  let isEnlarged = false;

  imgGroup.addEventListener('click', async (e) => {

    isEnlarged = !isEnlarged;

    // 傳入圖片路徑
    const imgBox = e.target.closest('.imgBox');

    if (imgBox) {
      const img = imgBox.querySelector('img');
      enlargedWindowImg = img.src;
      enlargedWindow.querySelector('img').src = enlargedWindowImg;

    }

    if (isEnlarged) {
      enlargedWindow.classList.remove('hidden');

      enlargedWindow.classList.remove('opacity-0');
      enlargedWindow.classList.add('opacity-100');

      document.body.style.overflow = 'hidden';


    } else {

      enlargedWindow.classList.remove('opacity-100');
      enlargedWindow.classList.add('opacity-0',);


      enlargedWindow.classList.add('hidden');
      document.body.style.overflow = '';
    }

  });

  // 點擊外部關閉enlarge
  enlargedWindow.addEventListener('click', (e) => {
    if (isEnlarged) {
      isEnlarged = false;
      enlargedWindow.classList.remove('opacity-100');
      enlargedWindow.classList.add('opacity-0', 'hidden');

      document.body.style.overflow = '';
    }
  });

}

// *---------------* //
// $9. Navbar - Mobile - Language switch
// *---------------* //

const tw = document.getElementById('tw')
const en = document.getElementById('en')

tw.addEventListener('click', function () {

  en.classList.remove('bg-primary', 'text-white');
  this.classList.add('bg-primary', 'text-white');

  tw.querySelector('p').classList.add('text-white');
  en.querySelector('p').classList.remove('text-white');
});

en.addEventListener('click', function () {
  tw.classList.remove('bg-primary', 'text-white');
  this.classList.add('bg-primary', 'text-white');

  en.querySelector('p').classList.add('text-white');
  tw.querySelector('p').classList.remove('text-white');
});

// *---------------* //
// $10. Cookie consent popup
// *---------------* //

if (document.querySelector('#cookieConsent')) {
  const cookieConsent = document.querySelector('#cookieConsent');
  const cookieConsentTemplate = `<div
        class="alpha absolute inset-0 bg-secondary opacity-80 w-full h-full"
      ></div>

      <div
        class="relative p-2 z-10 max-w-screen-xl flex flex-col justify-center mx-auto items-center md:flex-row md:justify-around md:items-center"
      >
        <p class="text-white py-3">
          我們使用Cookies為用戶提供更好的瀏覽體驗。繼續瀏覽該網站表示您同意我們的<a
            href="#"
            class="underline"
            >隱私權政策</a
          >。
        </p>
        <button
          class="bg-primary px-3 py-1 w-[100px] text-white text-center cursor-pointer rounded-sm"
        >
          同意
        </button>
      </div>`

  cookieConsent.innerHTML += cookieConsentTemplate;
}