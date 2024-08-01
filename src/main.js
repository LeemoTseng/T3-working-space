
// *---------------* //
//
// Index
// $1. Home page
// $1.1 Features
// $2. Plans
//
// *---------------* //




// *---------------* //
// $1. Home page
// *---------------* //

// $1.1 Features

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
    svg.appendChild(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900';
    span.textContent = text;

    //append
    li.appendChild(svg);
    li.appendChild(span);
    ul.appendChild(li);
    document.querySelector('#feature1').appendChild(ul);

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
    svg.appendChild(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900';
    span.textContent = text;

    //append
    li.appendChild(svg);
    li.appendChild(span);
    ul2.appendChild(li);
    document.querySelector('#feature2').appendChild(ul2);

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
    svg.appendChild(path);

    //span
    const span = document.createElement('span');
    span.className = 'text-base font-medium leading-tight text-gray-900'
    span.textContent = item;

    //append
    li.appendChild(svg);
    li.appendChild(span);
    ul3.appendChild(li);
    document.querySelector('#feature3').appendChild(ul3);

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
        from:'',
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
        from:'from',
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
        from:'',
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

    itemsDiv.appendChild(fromSpan);
    itemsDiv.appendChild(planCurrency);
    itemsDiv.appendChild(planPrice);
    itemsDiv.appendChild(planPeriod);

    const featureList = document.createElement('ul');
    featureList.className = 'space-y-5 my-7';
    featureList.setAttribute('role', 'list');

    // forEach feature
    plan.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'flex items-center';

        const featureIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        featureIcon.setAttribute('class', 'flex-shrink-0 w-4 h-4');
        featureIcon.setAttribute('aria-hidden', 'true');
        featureIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        featureIcon.setAttribute('fill', 'currentColor');
        featureIcon.setAttribute('viewBox', '0 0 24 24');

        const featurePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        if (feature.available) {
            featureIcon.classList.add('text-primary');
            featurePath.setAttribute('d', 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z');
        } else {
            featureIcon.classList.add('text-gray-300');
            featurePath.setAttribute('d', 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z');
        }

        featureIcon.appendChild(featurePath);

    const featureText = document.createElement('span');
    featureText.classList.add('text-base', 'font-normal', 'leading-tight', 'ms-3');

    if (!feature.available) {
      featureText.classList.add('text-gray-300');
    }else{
        featureText.classList.add('text-base', 'font-normal', 'leading-tight', 'text-gray-600', 'ms-3')
    }

    featureText.textContent = feature.text;

        featureItem.appendChild(featureIcon);
        featureItem.appendChild(featureText);
        featureList.appendChild(featureItem);
    });

    //Btn - Choose plan
    const chooseButton = document.createElement('button');
    chooseButton.type = 'button';
    chooseButton.className = 'btn-default text-sm px-5 py-2.5 inline-flex justify-center w-full text-center';
    chooseButton.textContent = 'Choose plan';

    planContainer.appendChild(planTitle);
    planContainer.appendChild(itemsDiv);
    planContainer.appendChild(featureList);
    planContainer.appendChild(chooseButton);

    planDiv.appendChild(planContainer);

    document.querySelector('#allPlan').appendChild(planDiv);

})

