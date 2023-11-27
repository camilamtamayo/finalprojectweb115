function generateMealPlan() {
    //  email
    var emailInput = document.getElementById("email").value;
    if (!isValidEmail(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    // input values
    var name = document.getElementById("name").value;
    var email = emailInput;
    var goal = document.getElementById("goal").value;
    
    // meal input values 
    var monday = document.getElementById("monday").value;
    var tuesday = document.getElementById("tuesday").value;
    var wednesday = document.getElementById("wednesday").value;
    var thursday = document.getElementById("thursday").value;
    var friday = document.getElementById("friday").value;
    var saturday = document.getElementById("saturday").value;
    var sunday = document.getElementById("sunday").value;

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
                <li><strong>Monday:</strong> ${monday}</li>
                <li><strong>Tuesday:</strong> ${tuesday}</li>
                <li><strong>Wednesday:</strong> ${wednesday}</li>
                <li><strong>Thursday:</strong> ${thursday}</li>
                <li><strong>Friday:</strong> ${friday}</li>
                <li><strong>Saturday:</strong> ${saturday}</li>
                <li><strong>Sunday:</strong> ${sunday}</li>
            </ul>
        </body>
        </html>
    `;

    // new tab
    var newTab = window.open();
    newTab.document.write(mealPlanHTML);
}


function isValidEmail(email) {
    // email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

function printMealPlan() {
    window.print();
}