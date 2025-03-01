function updatePage(document) {
    // Your code goes here
    // Indentify all DOM elements
    const updateForms = document.querySelectorAll('form'); // a list of all forms

    updateForms.forEach((updateForm) => {
        updateForm.addEventListener('submit', (event) => {
            event.preventDefault(); // prevent default behaviour of reloading page

            const target = event.target.getAttribute('data-target');
            const inputElement = document.getElementById(`${target}-input`);
            const targetElement = document.getElementById(target).querySelector('.value');
            targetElement.textContent = inputElement.value;
        })
    });
}

// Example inputs array for testing (this should be provided in the testing context)
const inputs = [
    { id: "name-input", value: "Adventure Backpack" },
    { id: "description-input", value: "A durable backpack for outdoor adventures" },
    { id: "color-input", value: "Green" },
    { id: "volume-input", value: "35L" },
];

// Call the function with the document and inputs in the test context
updatePage(document, inputs);

// Solved with the walkthrough