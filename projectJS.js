function generateMealPlan() {
	// Validate email
	var emailInput = document.getElementById("email").value;
	if (!isValidEmail(emailInput)) {
		alert("Please enter a valid email address.");
		return;
	}

	// Get user input values
	var name = document.getElementById("name").value;
	var email = emailInput;
	var goal = document.getElementById("goal").value;

	// Get meal input values for each day of the week
	var breakfast = document.getElementById("breakfast").value;
	var snack1 = document.getElementById("snack1").value;
	var lunch = document.getElementById("lunch").value;
	var snack2 = document.getElementById("snack2").value;
	var dinner = document.getElementById("dinner").value;

	// HTML meal plan
	var mealPlanHTML = `
        <html>
        <head>
            <title>Meal Plan for ${name}</title>
            <style>
                /* Add your CSS styling here */
                body {
                    font-family: 'Orbitron', sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>Weekly Meal Plan for ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>

            <h2>Meal Plan:</h2>
            <ul>
                <li><strong>Breakfast:</strong> ${breakfast}</li>
                <li><strong>Snack:</strong> ${snack1}</li>
                <li><strong>Lunch:</strong> ${lunch}</li>
                <li><strong>Snack:</strong> ${snack2}</li>
                <li><strong>Dinner:</strong> ${dinner}</li>
            </ul>
        </body>
        </html>
    `;

	// Open a new tab and write the content
	var newTab = window.open();
	newTab.document.write(mealPlanHTML);
}

function isValidEmail(email) {
	// Basic email validation using a regular expression
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function clearForm() {
	document.getElementById("mealPlanForm").reset();
}

function printMealPlan() {
	window.print();
}
