// *---------------* //
//
// Index
//
// $0. Plugins
// $0.1. Navbar
// $1. Language toggle
// $2. Icon isHidden
// $3. Side menu
// $4. Table style
// $5. Drag and drop
//
// *---------------* //



// *---------------* //
// $0. Plugins
// *---------------* //




// *---------------* //
// $0.1. Navbar
// *---------------* //


// const navbarTemplate = ``
// document.querySelector('#navBar').innerHTML += navbarTemplate;




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
            // console.log(emailInput.value);
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


} else {
    console.log('#sideMenu not found');
}


// *---------------* //
// $4. Table style
// *---------------* //

// Enabled

const enabled = document.querySelectorAll('.enabled');

let isEnable = false;

function enabledClick(e){
    e.target.closest('svg').classList.add('text-primary')
    e.target.closest('svg').classList.remove('text-secondary/20')
}




// enabled.forEach((items) => {
//     items.addEventListener('click', (e) => {
//         const targetElement = e.target.closest('.enabled');
//         const enabledSvg = targetElement.querySelector('svg');

//         if (enabledSvg) {
//             enabledSvg.classList.toggle('text-primary');
//             enabledSvg.classList.toggle('text-secondary/20');
//         }
//     });
// });


// Collapsed

const titleCollapse = document.querySelectorAll('.titleCollapse');

function collapseTable(e){
    e.target.closest('.dropdown').querySelectorAll('.dropTable').forEach((items)=>{
        items.classList.toggle('hidden');
    })
}

titleCollapse.forEach((items)=>{
    items.addEventListener('click',function(e){
        collapseTable(e);
    })
})








// *---------------* //
// $5. Drag and drop
// *---------------* //

// *---------------* //
// $5.1. Add an item btn
// *---------------* //

// if (document.querySelector('#addBtn')) {

    // const addBtn = document.querySelector('#addBtn');


// }



// *---------------* //
// $5.2. Sortable(plugin)
// *---------------* //


// const sortable1El = document.querySelector('#sortable1')
// const sortable1 = Sortable.create(sortable1El, {
//     animation: 500,

// })