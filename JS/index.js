var meals = [
  {
    star: 4.8,
    reviews: 223,
    prepTime: 20,
    cookTime: 15,
    users: 4,
    imgSrc: "./img/photo-1603133872878-684f208fb84b.avif",
    foodName: "Chicken Stir-Fry",
    decrebtion: "Quick and healthy stir-fry with colorful vegetables",
    Ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    Instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    nutrition: {
      Calories: "320 kcal",
      Carbohydrates: "18g",
      Fat: "20g",
      Protein: "34g",
      Fiber: "5g",
      Sodium: "840mg",
    },
    Chefs: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },

  // Meal 2 – Beef Tacos
  {
    star: 4.7,
    reviews: 180,
    prepTime: 15,
    cookTime: 30,
    users: 3,
    imgSrc: "../img/pexels-ash-craig-122861-376464.jpg",
    foodName: "Beef Tacos",
    decrebtion: "Crispy tacos filled with seasoned beef and fresh toppings",
    Ingredients: [
      "400g ground beef",
      "Taco seasoning mix",
      "8 taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1/2 cup shredded cheese",
      "Sour cream",
    ],
    Instructions: [
      "Cook ground beef in a skillet until browned.",
      "Add taco seasoning and a splash of water. Simmer 2–3 mins.",
      "Warm taco shells in oven.",
      "Fill shells with beef, lettuce, tomatoes, and cheese.",
      "Top with sour cream and serve.",
    ],
    nutrition: {
      Calories: "290 kcal",
      Carbohydrates: "21g",
      Fat: "14g",
      Protein: "22g",
      Fiber: "3g",
      Sodium: "650mg",
    },
    Chefs: [
      "Use lean beef for better texture",
      "Warm shells to avoid cracking",
      "Add jalapeños for extra heat",
    ],
    extendedTour: true,
  },

  // Meal 3 – Creamy Pasta Alfredo
  {
    star: 4.9,
    reviews: 310,
    prepTime: 10,
    cookTime: 20,
    users: 2,
    imgSrc: "../img/pexels-ella-olsson-572949-1640777.jpg",
    foodName: "Pasta Alfredo",
    decrebtion: "Rich and creamy Alfredo pasta with Parmesan",
    Ingredients: [
      "250g fettuccine pasta",
      "1 cup heavy cream",
      "1/2 cup Parmesan cheese",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "Salt and black pepper",
    ],
    Instructions: [
      "Cook pasta until al dente.",
      "Melt butter in a pan and sauté garlic.",
      "Pour cream and simmer for 3 minutes.",
      "Add Parmesan and mix until creamy.",
      "Combine with pasta and season.",
    ],
    nutrition: {
      Calories: "410 kcal",
      Carbohydrates: "45g",
      Fat: "22g",
      Protein: "14g",
      Fiber: "2g",
      Sodium: "500mg",
    },

    Chefs: [
      "Add grilled chicken for more protein",
      "Use fresh Parmesan for best flavor",
      "Keep heat low to avoid splitting the sauce",
    ],
  },

  // Meal 4 – Grilled Salmon
  {
    star: 4.6,
    reviews: 150,
    prepTime: 15,
    cookTime: 40,
    users: 2,
    imgSrc: "../img/pexels-jang-699953.jpg",
    foodName: "Grilled Salmon",
    decrebtion: "Juicy grilled salmon with lemon and herbs",
    Ingredients: [
      "2 salmon fillets",
      "2 tablespoons olive oil",
      "1 lemon, sliced",
      "Salt and pepper",
      "Fresh dill",
    ],
    Instructions: [
      "Brush salmon with oil and season.",
      "Grill skin-side down for 6 minutes.",
      "Flip and cook 4–5 more minutes.",
      "Serve with lemon slices and dill.",
    ],
    nutrition: {
      Calories: "350 kcal",
      Carbohydrates: "0g",
      Fat: "22g",
      Protein: "36g",
      Fiber: "0g",
      Sodium: "80mg",
    },

    Chefs: [
      "Don't overcook salmon",
      "Use cast iron grill for best sear",
      "Add garlic butter on top when serving",
    ],
    extendedTour: true,
  },

  // Meal 5 – Avocado Salad
  {
    star: 4.5,
    reviews: 95,
    prepTime: 10,
    cookTime: 0,
    users: 2,
    imgSrc: "../img/pexels-rajesh-tp-749235-1633525.jpg",
    foodName: "Avocado Salad",
    decrebtion: "Fresh salad with avocado, tomatoes and lemon dressing",
    Ingredients: [
      "2 ripe avocados, diced",
      "1 cup cherry tomatoes",
      "1 cucumber, chopped",
      "1/2 red onion, sliced",
      "2 tablespoons olive oil",
      "Lemon juice",
      "Salt & pepper",
    ],
    Instructions: [
      "Mix all vegetables in a bowl.",
      "Whisk oil, lemon, salt, and pepper.",
      "Pour dressing and toss gently.",
      "Serve chilled.",
    ],
    nutrition: {
      Calories: "350 kcal",
      Carbohydrates: "0g",
      Fat: "22g",
      Protein: "36g",
      Fiber: "0g",
      Sodium: "80mg",
    },
    Chefs: [
      "Use ripe avocados only",
      "Add feta cheese for extra flavor",
      "Serve immediately to avoid browning",
    ],
  },
];

var lastRandom;
function change() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * meals.length);
  } while (randomIndex == lastRandom);
  lastRandom = randomIndex;
  displayMeals(meals[randomIndex]);
}

function displayMeals(meals) {
  var listIngredients = ``;
  var listInstructions = ``;
  var listChefs = ``;

  for (var i = 0; i < meals.Ingredients.length; i++) {
    listIngredients += `
      <div class="d-flex align-items-center mb-3">
        <span class="text-white me-2 number rounded-circle d-flex justify-content-center align-items-center">${
          i + 1
        }</span>
        <span>${meals.Ingredients[i]}</span>
      </div>
    `;
  }

  for (var i = 0; i < meals.Instructions.length; i++) {
    listInstructions += `
      <div class="d-flex mb-3">
        <div class="Instructions-number rounded-4 fs-4 text-white d-flex justify-content-center align-items-center fw-bold me-2">
          ${i + 1}
        </div>
        <div class="">
          <p class="fw-light">${meals.Instructions[i]}</p>
        </div>
      </div>
    `;
  }

  for (var i = 0; i < meals.Chefs.length; i++) {
    listChefs += `
      <div class="item rounded-0 p-3 d-flex align-items-center bg-tab-content mb-3">
        <i class="fa-solid fa-circle-check me-3"></i>
        <p class="mb-0">${meals.Chefs[i]}</p>
      </div>
    `;
  }

  document.getElementById("demo").innerHTML = `
    <div class="container-fluid px-4 h-100 ">
          <div class="row h-100">
            <div class="col-lg-5 position-relative h-100 m-0 p-0 reduse">
              <figure class="w-100 h-100 m-0 p-0 overflow-hidden" >
                <img
                  class="w-100 h-100"
                  src=${meals.imgSrc}
                  alt=""
                />
                <figcaption class="d-flex flex-column w-100">
                  <div class="bg-white py-2 px-3 w-auto rounded-pill top-fig position-absolute">
                    <i class="fa-solid fa-star me-2 text-warning"></i>
                    <span class="fw-bold">${meals.star} <span class="text-secondary fw-light">(${meals.reviews} reviews)</span></span>
                  </div>

                  <div class="bg-white rounded-4 p-3 d-flex justify-content-around bottom-fig position-absolute">

                    <div class="text-center">
                      <div class="icon-1 fs-4">
                        <i class="fa-solid fa-clock"></i>
                      </div>
                      <div class="">
                        <p class="text-secondary m-0 fw-light">Prep Time</p>
                        <p class="fw-bolder  m-0">${meals.prepTime} min</p>
                      </div>
                    </div>

                    <div class="text-center">
                      <div class="icon text-danger fs-4">
                        <i class="fa-solid fa-fire-burner"></i>
                      </div>
                      <div class="">
                        <p class="text-secondary m-0 fw-light">Cook Time</p>
                        <p class="fw-bolder  m-0">${meals.cookTime} min</p>
                      </div>
                    </div>

                    <div class="text-center">
                      <div class="icon text-primary fs-4">
                        <i class="fa-solid fa-users"></i>
                      </div>
                      <div class="">
                        <p class="text-secondary m-0 fw-light">Servings</p>
                        <p class="fw-bolder  m-0">${meals.users} people</p>
                      </div>
                    </div>

                  </div>
                </figcaption>
              </figure>
            </div>

            <div class="col-lg-7 bg-white height-1 reduse-2" >
              <div class="p-4 content">
                <span class="py-1 px-3 rounded-pill top-span me-3">Easy</span>
                <span class="py-1 px-3 rounded-pill top-span top-span-1">Asian</span>

                <div class="row mt-3 ">
                  <div class="col-md-8">
                    <h3 class="fs-3 fw-bolder">${meals.foodName}</h3>
                    <p class="text-secondary">
                      ${meals.decrebtion}
                    </p>
                  </div>
                  <div class="col-md-4 text-end hedar-icone d-flex text-md-end">
                    <span class="d-flex justify-content-center align-items-center me-2 rounded-3 transition"><i class="fa-solid fa-bookmark fs-5"></i></span>
                    <span class="d-flex justify-content-center align-items-center rounded-3 transition"><i class="fa-solid fa-share-nodes fs-5"></i></span>
                  </div>

                  <div id="erore-masege" class="col-12 d-none">
                    <div class="long-time d-flex align-items-center  p-3">

                      <div class="me-3">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                      </div>

                      <div class="">
                        <h6>Extended Preparation Time</h6>
                        <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                      </div>
                    </div>
                  </div>

                </div>



              <ul class="nav nav-pills my-3 justify-content-center border-bottom pb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <i class="fa-solid fa-list-check"></i>
                    Ingredients                  
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    <i class="fa-solid fa-book-open"></i>
                    Instructions
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <i class="fa-brands fa-nutritionix"></i> 
                    Nutrition
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-Chef-tab" data-bs-toggle="pill" data-bs-target="#pills-Chef" type="button" role="tab" aria-controls="pills-Chef" aria-selected="false">
                    <i class="fa-solid fa-cheese"></i>
                    Chef's Tips
                  </button>
                </li>
              </ul>

              <div class="tab-content height ingredients rounded-4" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                  <div class="bg-tab-content p-3 rounded-4">

                    ${listIngredients}
                  </div>
                </div>

                <div class=" p-3 mb-3 tab-pane fade bg-white" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                
                  ${listInstructions}

                </div>

                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                  <div class="row">

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-1 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-fire rounded-3 me-2"></i>
                          <span>Calories</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Calories}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-2 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-dumbbell rounded-3 me-2"></i>
                          <span>Protein</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Protein}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-3 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-wheat-awn rounded-3 me-2"></i>>
                          <span>Carbohydrates</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Carbohydrates}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-5 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-seedling rounded-3 me-2"></i>
                          <span>Fiber</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Fiber}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-5 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-droplet rounded-3 me-2"></i>
                          <span>Fat</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Fat}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <div class="p-3 box rounded-3 box-6 d-flex justify-content-between align-items-center">
                        <div class="icone d-flex align-items-center">
                          <i class="fa-solid fa-cube rounded-3 me-2"></i>
                          <span>Sodium</span>
                        </div>
                        <div class="content">
                          <p class="m-0 fw-bolder">${meals.nutrition.Sodium}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                
                <div class="tab-pane fade" id="pills-Chef" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                  <div class="rounded-0">
                    ${listChefs}
                  </div>
                </div>
              </div>


              </div>

              <div class=" butn ">
              <div class="pt-2 border-top">
                <button onclick="change()" class="btn text-white py-3 px-4 transition">
                  <i class="fa-solid fa-rotate me-2"></i>
                  <span>Try Another Recipe</span>
                </button>
              </div>
            </div>

            </div>


          </div>


        </div>

    `;

  if (meals.extendedTour == true) {
    document.getElementById("erore-masege").classList.remove("d-none");
  } else {
    document.getElementById("erore-masege").classList.add("d-none");
  }
}

function listChange() {}
