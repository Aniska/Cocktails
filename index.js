var apiResponse = {
   "drinks": [
      {
         "strDrink": "3-Mile Long Island Iced Tea",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg",
         "idDrink": "15300"
      },
      {
         "strDrink": "69 Special",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg",
         "idDrink": "13940"
      },
      {
         "strDrink": "Ace",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
         "idDrink": "17225"
      },
   ]
};


var drinks = apiResponse.drinks;

var cocktailList = document.querySelector('#cocktail-list');

for (var i = 0; i < drinks.length; i++) {
   var drink = drinks[i];
   var name = drink.strDrink;
   var imageUrl = drink.strDrinkThumb;
   var id = drink.idDrink;
   
   var cocktailCard = createCocktailCard(name, imageUrl, id);
   cocktailList.appendChild(cocktailCard);
}


function createCocktailCard(name, imageUrl, id) {
   var result = document.createElement('div');

   // Setting the class
   result.classList.add('card');

   var img = document.createElement('img');
   img.src = imageUrl;
   result.appendChild(img);

   var h3 = document.createElement('h3');
   h3.textContent = name;
   result.appendChild(h3);

   result.addEventListener('click', function(event) {
      console.log("You clicked on " + name); // Remove later...
      var spotlight = createCocktailSpotlight(name, imageUrl, id);
      document.body.appendChild(spotlight);
   });

   return result;
}


function createCocktailSpotlight(name, imageUrl, id) {
   var result = document.createElement('div');
   result.id = 'spotlight';

   // Create a card for the cocktail details
   var card = document.createElement('div');
   card.id = 'spotlight-card';

   var h1 = document.createElement('h1');
   h1.textContent = name;
   card.appendChild(h1);

   var img = document.createElement('img');
   img.src = imageUrl;
   card.appendChild(img);

   // We'll fetch the cocktail-making instructions later from the API using the id. For now:
   var instructions = document.createElement('p');
   instructions.textContent = "Instructions on how to make cocktails will go here later";
   card.appendChild(instructions);

   // Add the card to the spotlight
   result.appendChild(card);

   // Add event listener so can remove (existing) spotlight, i.e. overlay, when click on it
   result.addEventListener('click', function(event) {
      result.remove();
   });

   return result;
}


