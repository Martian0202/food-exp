// Variables + API

const url = "https://dummyjson.com/products?limit=9000";

const container = document.getElementById("container");
const loading = document.getElementById("loading");


// Fetch Function

async function fetchData() {
  loading.style.display = "block";

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data); 

    displayData(data.products); 

  } catch (err) {
    container.innerHTML = "<p>Error loading data</p>";
  }

  loading.style.display = "none";
}

// Display Function

function displayData(products) {
  container.innerHTML = "";

  products.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>Category: ${item.category}</p>
      <p>Price: $${item.price}</p>
    `;

    container.appendChild(card);
  });
}

// Calling the Function

fetchData();
