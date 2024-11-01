document.querySelectorAll('.clickable-arcade input').forEach(img => {
    img.onclick = () => {
        document.querySelector('.container').style.display = 'block';
        document.querySelector('.bg-images').style.display = 'block';
        document.querySelector('.content').style.display = 'none';
        document.querySelector('header').style.display = 'none';
        document.body.style.backgroundImage = "url ('images/arcade-back.jpg')";
    }
});

const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
let active = 1;
const limit = 20;


updateProgress();

nextButton.addEventListener('click', () => {
    active++;

    if(active > steps.length) {
        active = steps.length;
    }

    updateProgress();
});

prevButton.addEventListener('click', () => {
    active--;

    if(active < 1) {
        active =1;
    }

    updateProgress();
});

function updateProgress (){
    console.log('steps.length =>' + steps.length);
    console.log('active =>' + active);

    steps.forEach((step, i) => {
        if (i === (active-1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' + i);
        } else {
            step.classList.remove(('active'));
            form_steps[i].classList.remove('active');
        }
    });

    if (active === 1) {
        prevButton.disabled = true;
    } else if (active === steps.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false
    }
}


let userInputDate = document.getElementById('date');
let y3;

userInputDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInputDate.value);
    let today = new Date();
    // console.log("im here");
    // Розрахунок віку
    y3 = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Корекція віку, якщо день народження ще не настав
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        y3--;
    }
    return y3; // Повертаємо розрахований вік
}

let isValid = true;

const firstNameField = document.getElementById("first-name");
const firstNameError = document.querySelector(".first-name-error");

firstNameField.addEventListener("input", function (event) {
    // Регулярное выражение для проверки имени (только буквы, минимум 2 символа)
    const namePattern = /^[A-Za-zА]+$/;
    const result = document.getElementById("first-name-result");
    result.textContent = 0 + "/" + limit;

    const textLength = firstNameField.value.length;
    result.textContent = textLength + "/" + limit;
    if (!namePattern.test(firstNameField.value)) {
        firstNameError.textContent = "The name must consist only of letters!";
        firstNameField.classList.add("invalid");
        firstNameError.style.display = "block";
        isValid = false;// Показываем сообщение об ошибке
    }else if(firstNameField.value.length === 1 ) {
        firstNameError.textContent = "The name must have 2 letters or more!";
        firstNameField.classList.add("invalid");
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameField.setCustomValidity("");
        firstNameError.style.display = "none";
        firstNameField.classList.remove("invalid");
        firstNameField.classList.add("success");
        isValid = true;
    }

});

const lastNameField = document.getElementById("last-name");
const lastNameError = document.querySelector(".last-name-error");

lastNameField.addEventListener("input", function (event) {
    // Регулярное выражение для проверки имени (только буквы, минимум 2 символа)
    const namePattern = /^[A-Za-zА]+$/;
    const result = document.getElementById("last-name-result");
    result.textContent = 0 + "/" + limit;

    const textLength = lastNameField.value.length;
    result.textContent = textLength + "/" + limit;

    if (!namePattern.test(lastNameField.value)) {
        lastNameError.textContent = "The last name must consist only of letters!";
        lastNameError.style.display = "block";
        lastNameField.classList.add("invalid");
        isValid = false;
    } else if(lastNameField.value.length === 1 ) {
        lastNameError.textContent = "The name must have 2 letters or more!";
        lastNameError.style.display = "block";
        lastNameField.classList.add("invalid");
        isValid = false;
    } else {
        lastNameField.setCustomValidity("");
        lastNameError.style.display = "none";
        lastNameField.classList.remove("invalid");
        lastNameField.classList.add("success");
        isValid = true;
    }
});


const ageField = document.getElementById("age");
const dateField = document.getElementById("date");
const birthError = document.querySelector(".birth-error");

ageField.addEventListener("input", function (event) {
    const ageValue = parseInt(ageField.value, 10);
    calculateAge();

    if (y3 !== ageValue) {
        birthError.textContent = "Birthday and age do not correspond to each other !";
        birthError.style.display = "block";
        dateField.classList.add("invalid");
        ageField.classList.add("invalid");
        isValid = false;
    } else {
        birthError.style.display = "none";
        dateField.classList.remove("invalid");
        ageField.classList.remove("invalid");
        dateField.classList.add("success");
        ageField.classList.add("success");
        isValid = true;
    }
});


const emailField = document.getElementById("email-address");
const emailError = document.querySelector(".email-error");

emailField.addEventListener("input", function (event) {
    const emailPattern = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}\.[a-zA-Z]{2,3}$/;


    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = "Please enter email correctly";
        emailError.style.display = "block";
        emailField.classList.add("invalid");
        isValid = false;
    } else {
        emailField.setCustomValidity("");
        emailError.style.display = "none";
        emailField.classList.remove("invalid");
        emailField.classList.add("success");
        isValid = true;
    }
});
const questGenreValues = {
    Horror: ["Quiet place", "Friday 13", "Saw"],
    Detective: ["Sherlock Holmes", "Zodiac"],
    Mystery: ["The illusion of deception", "The Land of Oz"],
    Adventure: ["Chernobyl", "Monster Corporation", "Jumanji", "Among Us"]
};

const boardGenreValues = {
    Mind: ["Monopoly", "Domino", "Erudite", "Chess"],
    Card: ["Uno", "Guess who"],
    ForKids: ["Spot it"],
    ForAdult: ["Truth or drink"],
    Other: ["Poker", "Jenga", "Twister", "Sea battle", "Darts"]
};
const questPlotValues = {
    "Quiet place": ["Easy", "Medium", "Hard"],
    "Friday 13": ["Normal", "Difficult", "Extreme"],
    "Saw": ["Challenging", "Expert"],
    "Sherlock Holmes": ["Beginner", "Intermediate", "Expert"],
    "Zodiac": ["Mysterious", "Complex"],
    "The illusion of deception": ["Beginner", "Advanced"],
    "The Land of Oz": ["Easy", "Normal"],
    "Chernobyl": ["Difficult", "Survival"],
    "Monster Corporation": ["Normal", "Challenging"],
    "Jumanji": ["Easy", "Epic"],
    "Among Us": ["Suspicious", "Deceptive", "Complex"]
};
const boardPlotValues = {
    "Monopoly": ["Easy", "Medium", "Hard"],
    "Domino": ["Beginner", "Intermediate"],
    "Erudite": ["Normal", "Challenging"],
    "Chess": ["Beginner", "Intermediate", "Advanced"],
    "Uno": ["Casual", "Competitive"],
    "Guess who": ["Family-friendly", "Advanced"],
    "Spot it": ["Quick", "Challenging"],
    "Truth or drink": ["Light", "Intense"],
    "Poker": ["Casual", "Tournament"],
    "Jenga": ["Fun", "Competitive"],
    "Twister": ["Casual", "Party"],
    "Sea battle": ["Quick", "Strategic"],
    "Darts": ["Casual", "Competitive"]
};

const gameGenreValues = {
    Arcade: ["Car racing", "Motorcycle", "Dance"],
    Shooters: ["Counter Strike", "Valorant", "Fortnite", "Pubg"],
    Playstation: ["Select disk game in place"],
    StoryGames: ["The last of us", "Detroit"],
    Survivors: ["Don`t starve together", "Minecraft", "Alien:isolation", "Frozen city"]
};
const gamePlotValues = {
    "Car racing": ["Arcade", "Simulation", "Realistic"],
    "Motorcycle": ["Casual", "Extreme", "Racing"],
    "Dance": ["Easy", "Medium", "Hard"],
    "Counter Strike": ["Casual", "Competitive", "Professional"],
    "Valorant": ["Normal", "Challenging"],
    "Fortnite": ["Casual", "Competitive"],
    "Pubg": ["Casual", "Survival"],
    "Select disk game in place": ["Easy", "Medium", "Hard"],
    "The last of us": ["Normal", "Survival", "Hardcore"],
    "Detroit": ["Normal", "Difficult"],
    "Don`t starve together": ["Normal", "Survival"],
    "Minecraft": ["Survival", "Creative", "Hardcore"],
    "Alien: Isolation": ["Normal", "Nightmare"],
    "Frozen city": ["Normal", "Difficult"]
};

let array;

function changeDropdownValue(value, id, genreObjectName) {
    const plotSelect = document.getElementById(id);
    plotSelect.innerHTML = "<option value='' disabled selected>Select</option>";

    switch(genreObjectName) {
        case 'questGenreValues':
            array = questGenreValues;
            break;
        case 'boardGenreValues':
            array = boardGenreValues;
            break;
        case 'gameGenreValues':
            array = gameGenreValues;
            break;
    }

    if (value && array[value]) {
        array[value].forEach(function (plot) {
            let newOption = document.createElement("option");
            newOption.value = plot;
            newOption.text = plot;
            plotSelect.appendChild(newOption);
        });
    }
}

function changeThirdDropdown(value, id, plotObjectName) {
    const difficultySelect = document.getElementById(id);

    difficultySelect.innerHTML = "<option value='' disabled selected>Select</option>";

    switch(plotObjectName) {
        case 'questPlotValues':
            array = questPlotValues;
            break;
        case 'boardPlotValues':
            array = boardPlotValues;
            break;
        case 'gamePlotValues':
            array = gamePlotValues;
            break;
    }

    if (value && array[value]) {
        array[value].forEach(function (difficulty) {
            let newOption = document.createElement("option");
            newOption.value = difficulty;
            newOption.text = difficulty;
            difficultySelect.appendChild(newOption);
        });
    }
}

function setBookingRestrictions() {
    const today = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Январь - 0!
    const yyyy = tomorrow.getFullYear();

    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const dateInput = document.getElementById('booking-date');
    dateInput.setAttribute('min', formattedDate);
}

window.onload = setBookingRestrictions;

document.addEventListener('DOMContentLoaded', function() {
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');

    selected.addEventListener('click', function() {
        items.classList.toggle('select-hide');
    });

    const selectItems = document.querySelectorAll('.select-item');
    selectItems.forEach(item => {
        item.addEventListener('click', function() {
            selected.innerHTML = this.getAttribute('data-value');
            items.classList.add('select-hide');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.custom-select')) {
            items.classList.add('select-hide');
        }
    });
});

let total = 0;
togglePrice();
function getPriceValue(priceElement) {
    const priceText = priceElement.querySelector('p').textContent;
    return parseFloat(priceText.match(/[+-]?\d+(\.\d+)?/)[0]);
}


function togglePrice() {
    total = 0;

    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"], textarea');

    inputs.forEach(input => {
        const priceElement = input.closest('div').querySelector('.price');
        if (priceElement) {
            if (input.checked) {
                priceElement.style.display = 'block';
                total += getPriceValue(priceElement);
            } else {
                priceElement.style.display = 'none';
            }
        }
    });

    document.getElementById('total-sum').textContent = total.toFixed(2);
}

function toggleOtherInput(idOption, idDiv, idInput) {
    const otherInputContainer = document.getElementById(idDiv);
    const isChecked = document.getElementById(idOption).checked;

    otherInputContainer.style.display = isChecked ? 'block' : 'none';
    if (!isChecked) document.getElementById(idInput).value = '';
}

function toggleSections() {
    const sections = {
        quest: document.querySelector('.quest-room'),
        board: document.querySelector('.board-games'),
        pc: document.querySelector('.computer-games')
    };

    const selectedValue = document.querySelector('input[name="radio"]:checked')?.id;

    Object.keys(sections).forEach(key => {
        const section = sections[key];
        section.style.display = 'none';
        section.classList.remove('fade-in-active');
        clearInputs(section);
    });

    if (selectedValue && sections[selectedValue]) {
        const selectedSection = sections[selectedValue];
        selectedSection.style.display = 'block';
        requestAnimationFrame(() => selectedSection.classList.add('fade-in-active'));
    const mainBg = document.getElementById("main-bg");
    const gameBg = document.getElementById("game-bg");
    const boardBg = document.getElementById("board-bg");
    const questBg = document.getElementById("quest-bg");
        mainBg.style.display = "none";

        switch (selectedValue) {
            case 'quest':
                boardBg.style.display = "none";
                gameBg.style.display = "none";
                questBg.style.display = "block";
                break;
            case 'board':
                boardBg.style.display = "block";
                gameBg.style.display = "none";
                questBg.style.display = "none";
                break;
            case 'pc':
                boardBg.style.display = "none";
                gameBg.style.display = "block";
                questBg.style.display = "none";
                break;
        }
    }

    const textArea = document.getElementById('comments');
    textArea.style.marginTop = selectedValue ? '20px' : '10px';
}

const radioButtons = document.querySelectorAll('input[name="radio"]');
radioButtons.forEach(button => {
    button.addEventListener('change', toggleSections);
});
document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', togglePrice);
});
function clearInputs(container) {
    const elements = container.querySelectorAll('input, textarea, select');

    elements.forEach(element => {
        element.value = ''; // Очищає всі елементи, які підтримують властивість value

        // Спеціально для checkbox та radio, очищає checked
        if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = false;
        }
        if (element.tagName === 'TEXTAREA') {
            // Знімемо фокус
            element.blur();
        }
    });

}
document.getElementById('other-option').addEventListener('change', toggleOtherInput);
const nameFieldHidden = document.getElementById('nameFieldID');
nameFieldHidden.classList.add('hidden');
document.getElementById('showNameFieldButton').addEventListener('click', function() {
    if (nameFieldHidden.classList.contains('hidden')) {
        nameFieldHidden.classList.remove('hidden');
    } else {
        nameFieldHidden.classList.add('hidden');

    }
});

function formatPhone(input) {
    let value = input.value;

    let numbers = value.slice(1).replace(/\D/g, '');

    let formatted = '+';
    for (let i = 0; i < numbers.length; i += 3) {
        formatted += numbers.substring(i, i + 3) + ' ';
    }

    input.value = formatted.trim();
}


document.getElementById('btn-apply').addEventListener('click', function() {
    if(!isValid) {
        return;

    }
    document.getElementById('summaryModal').classList.add = "darkest-font";
    const selectedGenderInput = document.querySelector('.form-one .radio-choice-item input[name="radio-gender"]:checked');

    const genderLabel = selectedGenderInput ? document.querySelector(`label[for="${selectedGenderInput.id}"]`) : null;
    const gender = genderLabel ? genderLabel.innerText : 'Not specified';

    const selectedCategoryInput = document.querySelector('.radio-choice-item input[name="radio"]:checked');

    const categoryLabel = document.querySelector(`label[for="${selectedCategoryInput.id}"]`);
    const category = categoryLabel ? categoryLabel.innerText : 'Not specified';

    let extraOptions = [];
    const extraCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');

    const otherInputs = document.querySelectorAll('.other textarea');

    extraCheckboxes.forEach(checkbox => {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
            extraOptions.push(label.innerText);
        }
    });

    otherInputs.forEach(input => {
        const inputValue = input.value.trim();
        if (inputValue) {
            extraOptions.push(": " + inputValue);
        }
    });

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email-address').value;
    const bookingDate = document.getElementById('booking-date').value;
    const bookingTime = document.getElementById('booking-time').value;
    const selects = document.querySelectorAll('select');
    const selectedOptions = [];
    selects.forEach(select => {
        if (select.value) {
            selectedOptions.push(select.value);
        }
    });

    const summaryContent = `
        <h3>Summary of your information:</h3>
        <p><strong>First Name:</strong> ${firstNameField.value}</p>
        <p><strong>Last Name:</strong> ${lastNameField.value}</p>
        <p><strong>Birth Date:</strong> ${dateField.value}</p>
        <p><strong>Age:</strong> ${ageField.value}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Selects:</strong> ${selectedOptions.length > 0 ?selectedOptions.join('  '): 'any selectes'}</p>
        <p><strong>Extra Options:</strong> ${extraOptions.length > 0 ? extraOptions.join('<br>') : 'no extras'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Booking Date:</strong> ${bookingDate}</p>
        <p><strong>Booking Time:</strong> ${bookingTime}</p>
        <p><strong>Total sum:</strong> ${total}</p>
    `;

    document.getElementById('summaryContent').innerHTML = summaryContent;
    document.getElementById('summaryModal').style.display = 'block';
    addHiddenInput('gender', gender);
    addHiddenInput('category', category);
    addHiddenInput('extra-options', extraOptions.join(', '));
    addHiddenInput('first-name-hidden', firstNameField.value);
    addHiddenInput('last-name-hidden', lastNameField.value);
    addHiddenInput('birth-date-hidden', dateField.value);
    addHiddenInput('age-hidden', ageField.value);
    addHiddenInput('phone-hidden', phone);
    addHiddenInput('email-hidden', email);
    addHiddenInput('booking-date-hidden', bookingDate);
    addHiddenInput('booking-time-hidden', bookingTime);
    addHiddenInput('selects-hidden', selectedOptions.join(', '));
    addHiddenInput('total-sum', total);
    document.getElementById('submit').addEventListener('submit', function(event) {
        document.getElementById('booking-form').submit();
    });
});
function addHiddenInput(name, value) {
    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    document.getElementById('booking-form').appendChild(input);
}
document.getElementById('closeSummary').addEventListener('click', function() {
    document.getElementById('summaryModal').style.display = 'none';
});
