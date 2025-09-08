const categoryContainer = document.getElementById('categoryContainer');
const treesContainer = document.getElementById('treesContainer');
const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

let cart = [];
let total = 0;

function showSpinner() { document.getElementById("spinner").classList.remove("hidden"); }
function hideSpinner() { document.getElementById("spinner").classList.add("hidden"); }



const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => showCategory(data.categories));
};



const showCategory = (categories) => {
    categoryContainer.innerHTML = `<li id="all" class="hover:bg-[#15803d] hover:text-white cursor-pointer rounded-lg p-2">All Trees</li>`;

    categories.forEach(cat => {
        categoryContainer.innerHTML += `<li id="${cat.id}" class="hover:bg-[#15803d] hover:text-white cursor-pointer rounded-lg p-2">${cat.category_name}</li>`;
    });

    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('#categoryContainer li');
        allLi.forEach(li => li.classList.remove('bg-[#15803d]', 'text-white'));

        if (e.target.localName === 'li') {
            e.target.classList.add('bg-[#15803d]', 'text-white');
        }
        if (e.target.id === 'all') {
            loadAllTrees();
        }
        else { loadTreesByCategory(e.target.id); }
    });
};




const loadAllTrees = () => {
    showSpinner();
    fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {
            hideSpinner();
            showTreesByCategory(data.plants);
        });
};




const loadTreesByCategory = (treesId) => {
    showSpinner();
    fetch(`https://openapi.programming-hero.com/api/category/${treesId}`)
        .then(res => res.json())
        .then(data => {
            hideSpinner();
            showTreesByCategory(data.plants);
        });
};




const showTreesByCategory = (trees) => {
    treesContainer.innerHTML = "";

    trees.forEach(tree => {
        treesContainer.innerHTML += `
      <div class="bg-white p-4 rounded-lg space-y-3 pl-6 h-110 shadow">
        <img src="${tree.image ?? 'https://via.placeholder.com/150'}" class="rounded-lg w-full h-40 object-cover" />
        <h1 class="font-semibold text-2xl cursor-pointer tree-name" data-id="${tree.id}">${tree.name}</h1>
        <p>${tree.description ? tree.description.slice(0, 80) : 'No description available'}...</p>
        <div class="flex flex-col">
          <div class="flex justify-between text-center p-2">
            <p class="text-[#15803D] bg-[#DCFCE7] rounded-2xl py-1 px-2">${tree.category}</p>
            <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price ?? 'N/A'}</p>
          </div>
          <button onclick="addToCart('${tree.id}','${tree.name}',${tree.price ?? 0})" class="bg-[#15803D] text-white px-4 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    `;
    });
};



function addToCart(id, name, price) {
    
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
        updateCartItemDisplay(existingItem);
    } else {
        const newItem = { id, name, price, quantity: 1 };
        cart.push(newItem);
        createCartItemDisplay(newItem);
    }
    updateTotal();
}

function createCartItemDisplay(item) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-[#F0FDF4] p-2 rounded";
    li.id = `cart-item-${item.id}`;
    li.innerHTML = `
        <span>${item.name}</span>
        <span class="text-gray-400"><span id="price-${item.id}">৳ ${item.price * item.quantity } x <span id="qty-${item.id}">${item.quantity}</span></span>
        <button onclick="removeFromCart('${item.id}')" class="text-gray-400 ml-2">❌</button></span>
    `;
    cartList.appendChild(li);
}

function updateCartItemDisplay(item) {
    document.getElementById(`qty-${item.id}`).innerText = item.quantity;
    document.getElementById(`price-${item.id}`).innerText = item.price * item.quantity;
}

function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    cart = cart.filter(i => i.id !== id);
    document.getElementById(`cart-item-${id}`).remove();
    updateTotal();
}

function updateTotal() {
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.innerText = total + "৳";
}




loadCategory();
loadAllTrees();
