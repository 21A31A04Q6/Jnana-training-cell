document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        { name: "Home", link: "index.html" },
        { name: "Our Programs", link: "program.html" },
        { name: "Projects", link: "train.html" },
        { name: "About Us", link: "about.html" },
        { name: "Contact", link: "contact.html" }
    ];

    const navMenu = document.getElementById("nav-menu");

    menuItems.forEach(item => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        navMenu.appendChild(li);
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email is required.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        valid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Clear form after submission
    }
});
var year = new Date().getFullYear()
 var date = '&copy; Designed by JNANA, $(year). All Rights Reserved.';
 document.getElementsByTagName('footer')[0].innerHTML = date;