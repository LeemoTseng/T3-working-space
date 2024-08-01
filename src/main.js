
// *---------------* //
//
// Index
// $0. Import
// $1. Home page
// $1.1 Features
//
// *---------------* //

// *---------------* //
// $0. Import
// *---------------* //

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
