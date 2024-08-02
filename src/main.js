
// *---------------* //
//
// Index
//
// $1. Features
// $2. Plans
// $3. Partners' logos
//
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


// *---------------* //
// $2. Plans
// *---------------* //


//plans
const plans = [
    {
        title: 'HOT DESK',
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

    planContainer.append(planTitle, itemsDiv, featureList, chooseButton);
    planDiv.append(planContainer);

    document.querySelector('#allPlan').append(planDiv);

})

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
    }, {
        imgUrl: 'assets/mock/mock-horizontal.png',
        alt: 'mock',
        title: 'Logo2',
        description: 'lorem ipsum dolor sit amet, consectetur.',
    }, {
        imgUrl: 'assets/mock/mock-01.png',
        alt: 'mock',
        title: 'Logo3',
        description: 'lorem ipsum dolor sit amet, consectetur.',
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
    }, {
        imgUrl: 'assets/mock/mock-04.png',
        alt: 'mock',
        title: 'Logo6',
        description: 'lorem ipsum dolor sit amet, consectetur.',
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
    }
]

partners.forEach( partner => {
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

    document.querySelector('#partnersAll').append(partnerDiv);

    // console.log(partnerDiv);

})




