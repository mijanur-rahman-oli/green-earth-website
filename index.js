const categoryContainer = document.getElementById('categoryContainer');



const loadCategory = () => {

    fetch('https://openapi.programming-hero.com/api/categories')
        .then((res) => res.json())
        .then((data) => {
        const categories = data.categories;
        showCategory(categories);

      });

};



const showCategory = (categories) => {

    categories.forEach(cat => {
    categoryContainer.innerHTML += `
                
                <li id='${cat.id}' class= "hover:bg-[#15803d] hover:text-white cursor-pointer ">
                ${cat.category_name}</li>
                
          `
    });

}






loadCategory();