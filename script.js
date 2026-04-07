// Variables + API

const url = "https://dummyjson.com/products?limit=100";

const container = document.getElementById("container");
const loading = document.getElementById("loading");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");


// Store all products
let allProducts = [];


// Fetch Function

async function fetchData() {
  loading.style.display = "block";

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data); 

    allProducts = data.products;
    displayData(allProducts); 

  } catch (err) {
    console.log(err);
    container.innerHTML = "<p>Error loading data</p>";
  }

  loading.style.display = "none";
}

// Display Function

function displayData(products) {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No items found</p>";
    return;
  }

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

// Applying All (Search + Filter + Sort together)
function applyAll() {
  let result = [...allProducts];

  //Search
  const searchValue = searchInput.value.toLowerCase();
  if (searchValue) {
    result = result.filter(item =>
      item.title.toLowerCase().includes(searchValue)
    );
  }
  
  //Filter
  const category = filterSelect.value;
  if (category) {
    result = result.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  //Sort
  const sortValue = sortSelect.value;
  if (sortValue === "low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  displayData(result);
}

// Event listeners
searchInput.addEventListener("input", applyAll);
filterSelect.addEventListener("change", applyAll);
sortSelect.addEventListener("change", applyAll);

// Calling the Function

fetchData();
