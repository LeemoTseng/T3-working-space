
import { reactive, html } from "../../node_modules/@arrow-js/core/dist/index.mjs";
import { dragAndDrop } from "../../node_modules/@formkit/drag-and-drop/index.mjs";



const plan = reactive({
    rows: [
        { id: 1, option: "HOT DESK", price: "6,500", per: "month" },
        { id: 2, option: "PRIVATE OFFICE", price: "10,000", per: "month" },

    ],
});

function renderTable() {
    return html`
      <table>
        <tbody id="dragZone">
          ${plan.rows.map(row =>
        html`
              <tr draggable="true" data-id="${row.id}">
                <td>#${row.id}</td>
                <td>${row.option}</td>
                <td>${row.price}</td>
                <td>${row.per}</td>
              </tr>
            `.key(row.id)
    )}
        </tbody>
      </table>
    `(document.getElementById("app"));
}
renderTable();

dragAndDrop({
    parent: document.getElementById("dragZone"),
    getValues: () => plan.rows.map(row => row.id),
    setValues: (newOrder) => {
        // 根據新順序更新狀態
        plan.rows = newOrder.map(id => plan.rows.find(row => row.id === id));
        console.log(plan.rows);
        renderTable();  // 更新 DOM
    },
    config: {
        draggable: (el) => {
            return el.tagName === "TR";
        },
    },
});