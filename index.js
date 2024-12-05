const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

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