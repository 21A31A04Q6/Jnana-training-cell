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
    const joinButton = document.querySelector(".join");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close");

    
    joinButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


    document.querySelector("#register-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (name && email && password) {
            alert('Account created for ${name}!');
            modal.style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    });
});
var year = new Date().getFullYear()
 var date = '&copy; Designed by JNANA, $(year). All Rights Reserved.';
 document.getElementsByTagName('footer')[0].innerHTML = date;