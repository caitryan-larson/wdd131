const mealPlan = [null, null, null, null, null, null, null];

let currentMealName = "";
let currentMealIngredients = "";
let currentMealInstructions = "";

const cards = document.querySelectorAll(".meal-card");
const modal = document.getElementById("modal");
const modalMealName = document.getElementById("modal-meal-name");
const modalIngredients = document.getElementById("modal-ingredients");
const modalInstructions = document.getElementById("modal-instructions");
const addToPlanBtn = document.getElementById("addToPlanBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const nameMeal = card.querySelector(".meal-name");
        const ingredientsMeal = card.querySelector(".meal-ingredients");
        const instructionsMeal = card.querySelector(".meal-instructions");

    if(nameMeal){
        currentMealName = nameMeal.textContent;
    } 
    else{
        currentMealName = "";
    }
    if(ingredientsMeal){
        currentMealIngredients = ingredientsMeal.textContent;
    } 
    else{
        currentMealIngredients = "";
    }
    if(instructionsMeal){
        currentMealInstructions = instructionsMeal.textContent;
    } 
    else{
        currentMealInstructions = "";
    }
    modalMealName.textContent = currentMealName;
    modalIngredients.textContent = currentMealIngredients;
    modalInstructions.textContent = currentMealInstructions;

    openModal();
  });
});

addToPlanBtn.addEventListener("click", () => {
if (!currentMealName) return;

const nextIndex = mealPlan.findIndex((item) => item === null);
mealPlan[nextIndex] = currentMealName;

const cell = document.getElementById(`day-${nextIndex}`);
if (cell) {
cell.textContent = currentMealName;
  }
  closeModal();
});

closeModalBtn.addEventListener("click", closeModal);
