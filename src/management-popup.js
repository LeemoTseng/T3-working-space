
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
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Subtitle</label>
                      <textarea
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
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
                      <label for="">Order</label>
                      <input
                        id="optionsOrder"
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Option</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Price</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Per</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Description</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Service</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
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
                      <label for="">Title</label>
                      <input
                        class="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ring-secondary/50 focus:ring-2 focus:ring-inset focus-primary/50 focus:ring-primary/60 sm:text-sm sm:leading-6"
                        type="text"
                        placeholder="Design for Business teams like yours"
                      />
                    </div>
                    <div>
                      <label for="">Subtitle</label>
                      <textarea
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
      id="savePopup"
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
                    Do you want to save the new item?
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                    The new item will be saved in the system.

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
                class="saveAgainBtn inline-flex w-full justify-center rounded-md bg-primary px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
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
                    The new item has been saved successfully.

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
                class="closeBtn mt-3 inline-flex w-full justify-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
const deletePopupTemplate = `    <div
      id="deletePupup"
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
                    The action cannot be recovered
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Do you want to delete
                      <span class="text-red-700">HOT DESK</span> option?
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
                class="saveBtn inline-flex w-full justify-center rounded-md bg-primary px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
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



// // 插入彈窗模板
// document.querySelector('#tableMainSection').innerHTML += mainSectionPopupTemplate;
// document.querySelector('#tableOptions').innerHTML += optionsPopupTemplate;
// document.querySelector('#tableOptions').innerHTML += savePopupTemplate;
// document.querySelector('#tableOptions').innerHTML += successPopupTemplate;
// document.querySelector('#tableServices').innerHTML += servicesPopupTemplate;
// document.querySelector('#tableServices').innerHTML += savePopupTemplate;

// // 更新內容的通用函數
// function updateContent(contentArray, inputFields) {
//   contentArray[0].order = inputFields.order.value;
//   console.log(contentArray); // 調試，顯示更新後的內容
// }

// // 顯示成功彈窗的函數
// function showSuccessPopup(selectedTable) {
//   const successPopup = selectedTable.querySelector('#successPopup');
//   if (successPopup) {
//     successPopup.classList.remove('hidden');
//   }
// }

// // 開啟彈窗的通用邏輯
// const addBtn = document.querySelectorAll('.addBtn');
// const saveBtn = document.querySelectorAll('.saveBtn');
// const saveAgainBtn = document.querySelectorAll('.saveAgainBtn');

// // 開啟彈窗邏輯
// addBtn.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     const allPopup = e.target.closest('.tableContainer').querySelectorAll('.popup');
//     if (allPopup.length > 0) {
//       allPopup[0].classList.remove('hidden'); // 顯示第一個彈窗
//     }
//   });
// });

// // 保存按鈕的邏輯：關閉當前彈窗，顯示下一個
// saveBtn.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     const allPopup = e.target.closest('.tableContainer').querySelectorAll('.popup');
//     if (allPopup.length > 1) {
//       allPopup[0].classList.add('hidden'); // 隱藏當前彈窗
//       allPopup[1].classList.remove('hidden'); // 顯示下一個彈窗
//     }
//   });
// });

// // 最終保存邏輯，更新數據並顯示成功彈窗
// saveAgainBtn.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     const selectedTable = e.target.closest('.tableContainer');

//     // 檢查是否是 options 或 services 的表格，並更新相應的內容
//     if (selectedTable.querySelector('#optionsOrder')) {
//       const inputFields = {
//         order: selectedTable.querySelector('#optionsOrder'),
//         // 可擴展其他需要的字段...
//       };
//       updateContent(optionContent, inputFields);

//     } else if (selectedTable.querySelector('#servicesOrder')) {
//       const inputFields = {
//         order: selectedTable.querySelector('#servicesOrder'),
//         // 可擴展其他需要的字段...
//       };
//       updateContent(servicesContent, inputFields);
//     }

//     // 顯示成功彈窗
//     showSuccessPopup(selectedTable);
//     console.log('Content updated:', optionContent, servicesContent);
//   });
// });

// // 關閉彈窗邏輯
// function closePopup(e) {
//   const popup = e.target.closest('.popup');
//   if (popup) {
//     popup.classList.add('hidden');
//   }
// }

// // 綁定關閉按鈕事件
// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('closeBtn')) {
//     closePopup(e);
//   }
// });
