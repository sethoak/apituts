const foodContainer = document.querySelector(".foodList");

function createFoodHTML(foodObj) {
  /*
    "name":"Pasta pasta",
    "category":"pasta",
    "ethnicity":"American"
    "restaurantID":1
    */

  let foodHTML = `
        <section>
          <ul>
            <li><h3>Name:${foodObj.name}</li>
            <li>Category:${foodObj.category}</li>
            <li>Ethnicity:${foodObj.ethnicity}</li>
          </ul>
        </section>
    `;

  return foodHTML;
}

function addFoodToDom(htmlString) {
  foodContainer.innerHTML += htmlString;
}

fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    console.log("parsedFoods", parsedFoods);
    parsedFoods.forEach(item => {
      const foodAsHTML = createFoodHTML(item);
      addFoodToDom(foodAsHTML);
    });
  });
