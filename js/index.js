document.addEventListener("DOMContentLoaded", function () {
    var textButtons = document.querySelectorAll(".textbutton");
    textButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var para = this.nextElementSibling;
            para.style.display = (para.style.display === "none" || para.style.display === "") ? "block" : "none";
        });
    });


    var menuIcon = document.querySelector(".menu");
    var navList = document.querySelector(".navlist");

    menuIcon.addEventListener("click", function () {
        // Toggle the display style of navList
        if (navList.style.display === "none" || navList.style.display === "") {
            navList.style.display = "flex";
        } else {
            navList.style.display = "none";
        }
    });



});


const upidata = 
[
    {
        id:1,
        image:"./image/upi/two-wheller.jpeg",
        name:"Two-Wheeler",
        price:899,

    },
    {
        id:2,
        image:"./image/upi/four-wheeler.jpeg",
        name:"Four-Wheeler",
        price:1099,
        
    },
    {
        id:3,
        image:"./image/upi/hevay.jpeg",
        name:"Heavy-Vehicle",
        price:1199,
        
    },
    {
        id:4,
        image:"./image/upi/hsrp-color-sticker.jpeg",
        name:"Hsrp-with-color-sticker",
        price:1299,
        
    },
    {
        id:5,
        image:"./image/upi/color-sticker.jpeg",
        name:"color-sticker",
        price:999,
        
    }
]


const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const firstPageForm = document.querySelector('.firstpage form');

// Add an event listener to the Next button
nextButton.addEventListener('click', () => {
    // Validate the form fields
    if (validateForm(firstPageForm)) {
        // If the form is valid, update the progress bar and show the next page
        progressBar.style.width = '100%';
        setTimeout(() => {
            document.querySelector('.firstpage').style.display = 'none';
            document.querySelector('.secoundpage').style.display = 'block';
        }, 500); // Adjust the timeout duration as needed
    } else {
        // If the form is not valid, display an error message
        alert('Please fill in all required fields before proceeding.');
    }
});

// Function to validate the form fields
function validateForm(form) {
    // Get all input elements in the form
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    // Check if all required fields are filled and phone number length is not more than 10
    for (const input of inputs) {
        if (input.hasAttribute('required') && !input.value.trim()) {
            // If a required field is empty, set isValid to false
            isValid = false;
        }
        if (input.name === 'mobile' && input.value.length > 10) {
            // If phone number length is more than 10, set isValid to false
            isValid = false;
        }
    }

    // If isValid is still true, all validations passed
    return isValid;
}


const selectVehicleType = document.querySelector('select[name="Select Vehicle Type*"]');

// Get the image and price elements
const imageElement = document.querySelector('.img img');
const priceElement = document.querySelector('.img h1');

// Add an event listener to the select element
selectVehicleType.addEventListener('change', () => {
    // Get the selected option
    const selectedOption = selectVehicleType.value;

    // Find the corresponding data in the upidata array
    const selectedData = upidata.find(data => data.name === selectedOption);

    // Update the image source and price based on the selected data
    if (selectedData) {
        imageElement.src = selectedData.image;
        priceElement.textContent = selectedData.price;
    }
});