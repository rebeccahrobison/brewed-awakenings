import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === "employee") {
            let counter = 0
            const orders = getOrders()

            for (const order of orders) {
                if (order.employeeId === parseInt(clickedItem.dataset.id)) {
                    counter++
                }
            }
            window.alert(`${clickedItem.dataset.name} sold ${counter} objects`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li 
                    data-type="employee" 
                    data-id="${employee.id}" 
                    data-name="${employee.name}"
                    >${employee.name}
                    </li>`
    }

    html += "</ul>"

    return html
}

