let selectedIngredients = [];

        function selectIngredient(ingredient) {
            if (selectedIngredients.length < 4) {
                selectedIngredients.push(ingredient);
                document.getElementById('result').innerHTML = `${ingredient} added!`;
                if (selectedIngredients.length === 4) {
                    document.getElementById('cookBtn').disabled = false;
                    disableIngredientButtons();
                }
            }
        }

        function disableIngredientButtons() {
            let buttons = document.querySelectorAll('#buttons .btn');
            buttons.forEach(button => {
                button.disabled = true;
            });
        }

        function enableIngredientButtons() {
            let buttons = document.querySelectorAll('#buttons .btn');
            buttons.forEach(button => {
                button.disabled = false;
            });
        }

        function cookMeal() {
            let meal = generateMeal(selectedIngredients);
            document.getElementById('result').innerHTML = `You made: ${meal}!`;

            // Reset the selection and enable the buttons
            selectedIngredients = [];
            enableIngredientButtons();
            document.getElementById('cookBtn').disabled = true;

            // Show a reset toast
            M.toast({html: 'Meal cooked! Select new ingredients to cook again.'});
        }

        function generateMeal(ingredients) {
            const meals = {
                'Banana,Banana,Stick,Stick': 'Banana Shake',
                'Honey,Stick,Stick,Stick': 'Amberosia',
                'Banana,Ice,Stick,Stick': 'Banana Pop',
                'Meat,Egg,Meat,Egg': 'Bacon and Eggs',
                'Asparagus,Asparagus,Ice,Ice': 'Asparagus Soup',
                'Asparagus,Vegetable,Mushroom,Mushroom': 'Asparagazpacho'
            };

            const key = ingredients.sort().join(',');
            return meals[key] || 'Wet Goop';
        }

document.addEventListener('DOMContentLoaded', function() {
    var carouselElem = document.querySelector('.carousel');
    var carouselInstance = M.Carousel.init(carouselElem, {
        indicators: true,
        onCycleTo: function(item) {
            // Extract data from the current carousel item
            var ingredients = item.dataset.ingredients;
            var quantity = item.dataset.quantity;

            // Update the table with the new data
            document.getElementById('ingredients').textContent = ingredients;
            document.getElementById('quantity').textContent = quantity;
        }
    });

    // Set initial item if necessary
    carouselInstance.set(0);
});

// Make sure the carousel initializes properly
$(document).ready(function(){
    $('.carousel').carousel();
});