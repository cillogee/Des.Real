const sizes = {

    "Jacket": ["Small", "Medium", "Large"],

    "Hardhat": ["One Size"],

    "Trousers": ["28", "30", "32", "34", "36"],

    "Safety Glasses": ["One Size"],

    "Safety Boots": ["5", "6", "7", "8", "9", "10", "11", "12"]

};

const productSelect = document.getElementById("product");
const sizeSelect = document.getElementById("size");

productSelect.addEventListener("change", function() {

    const selectedProduct = productSelect.value;

    sizeSelect.innerHTML = "";

    if (!sizes[selectedProduct]) return;

    sizes[selectedProduct].forEach(size => {

        const option = document.createElement("option");

        option.value = size;
        option.textContent = size;

        sizeSelect.appendChild(option);

    });

});

document.getElementById("orderForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const order = {

        name: document.getElementById("email").value,
        product: productSelect.value,
        size: sizeSelect.value,
        quantity: document.getElementById("quantity").value

    };

    document.getElementById("status").innerText = "Sending order...";

    const response = await fetch("http://localhost:3000/api/order", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)

    });

    if (response.ok) {

        document.getElementById("status").innerText = "Order sent.";

    } else {

        document.getElementById("status").innerText = "Error sending order.";

    }

});
