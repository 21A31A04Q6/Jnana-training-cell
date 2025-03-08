document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        { name: "Home", link: "index.html" },
        { name: "Our programs", link: "program.html" },
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

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.querySelector(".join");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close");

    // Show the modal when the Join button is clicked
    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    document.querySelector("#register-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const U_name = document.querySelector("#name").value;
        const U_email = document.querySelector("#email").value;
        const U_password = document.querySelector("#password").value;

        // Simple validation
        if (U_name && U_email && U_password) {
            alert('Account created for ${name}!');
            modal.style.display = "none";
            // Here you can send the data to a backend server for account creation
        } else {
            alert("Please fill in all fields.");
        }
    });
});
 var year = new Date().getFullYear()
 var date = '&copy; Designed by JNANA, $(year). All Rights Reserved.';
 document.getElementsByTagName('footer')[0].innerHTML = date;
