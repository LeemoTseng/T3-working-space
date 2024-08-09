
// *---------------* //
//
// Index
//
// $0. HTML Template
// $0.1. Navbar
// $1. Features
// $2. Plans
// $3. Partners' logos
// $4. Advantages
// $5. plugin - swaper
// $5.1. swaper content
// $6. Articles 
// $6.1. Pagination
//
// *---------------* //


// *---------------* //
// $0. HTML Template
// *---------------* //

// *---------------* //
// $0.1. Navbar
// *---------------* //



const navbarTemplate = `
      <nav class="bg-white w-full fixed top-0 left-0 z-50">
        <div class="mx-auto px-4 py-2 flex item-center justify-between items-center ">
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
          <div class="menu flex-grow hidden md:flex justify-center">
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
    `
document.querySelector('#navBar').innerHTML += navbarTemplate;
// console.log(document.querySelector('#navBar'));

// $0.2. Footer

const footerTemplate = `
    <footer class="bg-gray-50">
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
              class="px-2 block text-secondary/60 transition-all duration-300 hover:text-primary"
            >
              <svg
                class="w-[1.3rem] h-[1.3rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              class="px-2 block text-secondary/60 transition-all duration-300 hover:text-primary"
            >
              <svg
                class="w-[1.3rem] h-[1.3rem]"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              class="px-2 block text-secondary/60 transition-all duration-300 hover:text-primary"
            >
              <svg
                class="w-[1.1rem] h-[1.1rem]"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              class="px-2 block text-secondary/60 transition-all duration-300 hover:text-primary"
            >
              <svg
                class="w-[1.3rem] h-[1.3rem]"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z"
                  fill="currentColor"
                />
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
          <div class="text-white text-center md:text-start ">
            © 2024 T3CO™ A Member of T3EX Global Holdings (Stock Code 2636)
          </div>
        </div>
      </div>
    </footer>`;
document.querySelector('#footer').innerHTML += footerTemplate;







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
    planDiv.className = 'plan flex flex-col max-w-lg';

    const planContainer = document.createElement('div');
    planContainer.className = 'container w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8'

    const planTitle = document.createElement('h6');
    planTitle.textContent = plan.title;

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'items flex  items-baseline text-gray-900'

    const planCurrency = document.createElement('span');
    planCurrency.className = 'text-3xl font-semibold';
    planCurrency.textContent = plan.currency;

    const planPrice = document.createElement('span');
    planPrice.className = 'text-5xl font-extrabold tracking-tight'
    planPrice.textContent = plan.price;

    const planPeriod = document.createElement('span');
    planPeriod.className = 'ms-1 text-xl font-normal text-gray-500'
    planPeriod.textContent = plan.priod;

    const planDescription = document.createElement('p');
    planDescription.className = 'font-light text-gray-500 sm:text-lg mt-3';
    planDescription.textContent = plan.description;

    const fromSpan = document.createElement('span');
    fromSpan.className = 'mr-2 text-gray-500';
    fromSpan.textContent = plan.from;

    itemsDiv.append(fromSpan, planCurrency, planPrice, planPeriod);


    const featureList = document.createElement('ul');
    featureList.className = 'space-y-5 my-7';
    featureList.setAttribute('role', 'list');

    // Feature focus
    plan.features.forEach(feature => {
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


      if (feature.available) {
        featureIcon.classList.add('text-primary');
        featurePath.setAttribute('d', 'M5 11.917 9.724 16.5 19 7.5');

      } else {
        featureIcon.classList.add('text-gray-300');
        featurePath.setAttribute('d', 'M6 18 17.94 6M18 18 6.06 6');
      }

      featureIcon.append(featurePath);

      const featureText = document.createElement('span');
      featureText.classList.add('text-base', 'font-normal', 'leading-tight', 'ms-3');

      if (!feature.available) {
        featureText.classList.add('text-gray-300');
      } else {
        featureText.classList.add('text-base', 'font-normal', 'leading-tight', 'text-gray-600', 'ms-3')
      }

      featureText.textContent = feature.text;


      featureItem.append(featureIcon, featureText)
      featureList.append(featureItem);
    });

    //Btn - Choose plan
    const chooseButton = document.createElement('button');
    chooseButton.type = 'button';
    chooseButton.className = 'btn-default text-sm px-5 py-2.5 inline-flex justify-center w-full text-center';
    chooseButton.textContent = 'Choose plan';

    planContainer.append(planTitle, itemsDiv, planDescription, featureList, chooseButton);
    planDiv.append(planContainer);

    document.querySelector('#allPlan').append(planDiv);

  })
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
// $5. plugin - swaper 
// *---------------* //
// ./assets/swiper.js
// *---------------* //
// $5.1. swaper content
// *---------------* //

const swaperContent = [
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
  swaperContent.forEach((item) => {
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
      "bg-black/[.2]",
      "transition-all",
      "duration-200"
    );

    const textDiv = document.createElement("div");
    textDiv.classList.add(
      "text",
      "absolute",
      "inset-0",
      "top-1/3",
      "z-50",
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

    console.log(swiperWrapper)
  });
} else {
  console.log("#swiper-wrapper not found");
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
    linkElement.href = item.link;

    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article', 'rounded-xl', 'p-5', 'pb-20', 'hover:text-primary');

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
    readDiv.classList.add('read', 'flex', 'text-gray-400');

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
    descriptionP.classList.add('text-gray-500', 'text-justify');
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
      button.classList.add('text-gray-900');
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
