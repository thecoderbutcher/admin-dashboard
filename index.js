Orders.map((order) => {
    const row = document.createElement("tr");
    const {productName, productNumber, paymentStatus, status} = order;
    row.innerHTML = `
        <td>${productName}</td>
        <td>${productNumber}</td>
        <td>${paymentStatus}</td>
        <td class=${status === "Declined" ? "danger" : status === "Pending" ? "warning" : "success"}>
            ${status}
        </td> 
        <td class="primary">Details</td>
    `
    document.querySelector("tbody").appendChild(row);
})