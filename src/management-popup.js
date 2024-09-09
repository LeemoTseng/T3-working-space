
// popup

const mainSectionPopupTemplate = `    <div
      id="popupMainSection"
      class="popup relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Main section
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum, molestiae iure consequatur repellat corporis
                      accusantium?
                    </p>
                  </div>
                  <div class="editContent space-y-3 py-5">
                    <div>
                      <label for="">Title</label>
                      <input
                        id="mainSectionTitle"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Subtitle</label>
                      <textarea
                      id="mainSectionSubtitle"
                        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        rows="4"
                        type="text"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia reiciendis officia iure praesentium adipisci voluptatum assumenda quidem similique excepturi?"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="saveBtn inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                data-popup="mainSectionPopup"
                class="closeBtn  mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const optionsPopupTemplate = `    <div
      id="optionsPopup"
      class="popup relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Add Options
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum, molestiae iure consequatur repellat corporis
                      accusantium?
                    </p>
                  </div>
                  <div class="editContent space-y-3 py-5">
                    <div>
                      <label for="optionsOrder">Order</label>
                      <input
                        id="optionsOrder"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter order"
                      />
                    </div>
                    <div>
                      <label for="optionsOption">Option</label>
                      <input
                        id="optionsOption"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter option"
                      />
                    </div>
                    <div>
                      <label for="optionsPrice">Price</label>
                      <input
                        id="optionsPrice"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter price"
                      />
                    </div>
                    <div>
                      <label for="optionsPer">Per</label>
                      <input
                        id="optionsPer"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Per unit"
                      />
                    </div>
                    <div>
                      <label for="optionsDescription">Description</label>
                      <input
                        id="optionsDescription"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter description"
                      />
                    </div>
                    <div>
                      <label for="optionsServices">Service</label>
                      <input
                        id="optionsServices"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Enter service"
                      />
                    </div>
                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="saveBtn inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                data-popup="optionsPopup"
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const servicesPopupTemplate = `    <div
      id="servicesPopup"
      class="popup relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Add Service
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum, molestiae iure consequatur repellat corporis
                      accusantium?
                    </p>
                  </div>
                  <div class="editContent space-y-3 py-5">
                    <div>
                      <label for="">Order</label>
                      <input
                      id="servicesOrder"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Services</label>
                      <input
                        id="service"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="number"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="saveBtn inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                data-popup="servicesPopup"
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const savePopupTemplate = `    <div
      id="confirmPopup"
      class="popup relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Do you want to { save the new item } ?
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                    The action will be saved in the system.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="confirmBtn inline-flex w-full justify-center rounded-md bg-primary px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
                data-popup="confirmPopup"
                type="button"
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const successPopupTemplate = `    <div
      id="successPopup"
      class="popup relative z-10 hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Success
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                    The action has been saved successfully.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                data-popup="successPopup"
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const errorPopupTemplate = `    <div
      id="errorPupup"
      class="popup relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left py-5">
                  <h3 class="text-xl font-semibold leading-6 text-gray-900">
                    Error !
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please try again or contact the administrator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                data-popup="errorPupup"
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`


// data return


const mainSectionContent = [
  {
    title: '',
    subtitle: ''
  }
]
const optionContent = [
  {
    optionsOrder: '',
    enabled: false,
    isPriceFloating: false,
    option: '',
    price: '',
    per: '',
    description: '',
    services: '',
  }
]
const servicesContent = [{
  servicesOrder: 1,
  service: '',
}]




// loading All of the popup template
document.addEventListener('DOMContentLoaded', function () {
  const popupAll = document.querySelector('#popupAll');
  if (popupAll) {
    popupAll.innerHTML += mainSectionPopupTemplate;
    popupAll.innerHTML += optionsPopupTemplate;
    popupAll.innerHTML += savePopupTemplate;
    popupAll.innerHTML += successPopupTemplate;
    popupAll.innerHTML += servicesPopupTemplate;
    popupAll.innerHTML += errorPopupTemplate;
  }


});


// Open popup

function openPopup(popupId, content = null) {
  const popup = document.querySelector(`#${popupId}`);
  if (popup) {
    if (content) {
      const contentElement = popup.querySelector('.popup')
      contentElement.innerHTML = content;
    }
    popup.classList.remove('hidden');
  }
}

// Close popup

function closePopup(popupId) {
  const popup = document.querySelector(`#${popupId}`);
  if (popup) {
    popup.classList.add('hidden');
  }
}

// Clicked event

document.addEventListener('click', function (e) {

  // open
  if (e.target.matches('.addBtn')) {
    const popupId = e.target.getAttribute('data-popup');
    const itemData = e.target.getAttribute('data-item');
    //  console.log(e.target);
    openPopup(popupId);
  }

  // close
  if (e.target.matches('.closeBtn')) {
    const popupId = e.target.getAttribute('data-popup');
    closePopup(popupId);
  }
})

//save data?

document.addEventListener('click', function (e) {
  if (e.target.matches('.saveBtn')) {
    // console.log(e.target.matches('.saveBtn'))
    closePopup(e.target.closest('.popup').id); // 關閉當前彈窗
    openPopup('confirmPopup');
  }

  //yes save!

  if (e.target.matches('.confirmBtn')) {
    // console.log(e.target.matches('.confirmBtn'))

    //data return - main section
    const title = document.getElementById('mainSectionTitle').value;
    const subtitle = document.getElementById('mainSectionSubtitle').value;

    //data return - options
    const order = document.getElementById('optionsOrder').value;
    const option = document.getElementById('optionsOption').value;
    const price = document.getElementById('optionsPrice').value;
    const per = document.getElementById('optionsPer').value;
    const description = document.getElementById('optionsDescription').value;
    const services = document.getElementById('optionsServices').value;

    //data return - services
    const servicesOrder = document.getElementById('servicesOrder').value;
    const service = document.getElementById('service').value;

    // 將數據存儲到 mainSectionContent、 optionContent、servicesContent中

    mainSectionContent[0] = {
      title: title,
      subtitle: subtitle
    };
    optionContent[0] = {
      Order: order,
      enabled: true, // 假設保存後啟用
      isPriceFloating: false, // 根據業務邏輯設置此值
      option: option,
      price: price,
      per: per,
      description: description,
      services: services,
    };
    servicesContent[0] = {
      Order: servicesOrder,
      service: service,
    };

    console.log('main section的資料：', mainSectionContent);
    console.log('options的資料：', optionContent);
    console.log('services的資料：', servicesContent);


    // 清空表單
    title.value = ''
    subtitle.value = ''
    order.value = ''
    option.value = ''
    price.value = ''
    per.value = ''
    description.value = ''
    services.value = ''
    servicesOrder.value = ''
    service.value = ''


    closePopup('confirmPopup'); // 關閉確認保存視窗
    openPopup('successPopup'); // 打開保存成功提示
  }

  // don't save
  if (e.target.matches('.closeBtn')) {
    const popupId = e.target.getAttribute('data-popup');
    // console.log(popupId)
    closePopup(popupId);
  }
})



