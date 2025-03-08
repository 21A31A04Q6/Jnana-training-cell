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
var year = new Date().getFullYear()
 var date = '&copy; Designed by JNANA, $(year). All Rights Reserved.';
 document.getElementsByTagName('footer')[0].innerHTML = date;
