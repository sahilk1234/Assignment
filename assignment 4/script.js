//carousel
var slideIndex = 1;
var myTimer;
var slideshowContainer;
window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {
        plusSlides(1);
    }, 4000);
    slideshowContainer = document.getElementsByClassName("carousel-container")[0];
    slideshowContainer.addEventListener("mouseenter", pause);
    slideshowContainer.addEventListener("mouseleave", resume);
});

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides((slideIndex -= 1));
    } else {
        showSlides((slideIndex += 1));
    }

    if (n === -1) {
        myTimer = setInterval(function() {
            plusSlides(n + 2);
        }, 4000);
    } else {
        myTimer = setInterval(function() {
            plusSlides(n + 1);
        }, 4000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(n + 1);
    }, 4000);
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
};

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(slideIndex);
    }, 4000);
};


//sign in form
function signin() {
    document.getElementsByClassName("signin-box")[0].classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches("#sign-in-btn")) {
        if (document.getElementsByClassName("signin-box")[0].classList.contains("show")) {
            document.getElementsByClassName("signin-box")[0].classList.remove("show");
        }
    }
};

// dropdown menu
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

//read json file

readTextFile("data.json", function(text) {
    var regionsData = JSON.parse(text);
    var menuContainer = $(".header-dropdown-menu");
    var sidemContainer = $(".side-menu");
    var i = 0;
    var k = 0;
    var j = 0;
    $.each(regionsData.childCategories, (index, item) => {
        console.log(item.displayName);
        var sidemenu = `<div class="menu-item">
                  <button onclick="openchildemenu(${i});" id="menu-close">
                  ${item.displayName}
                  <ion-icon class="side-menu-icon" name="chevron-forward-outline"></ion-icon>
                  </button>
                  <div class="menu-item-child">
                  <div class="menu-item-child1">
                    <button class="back-btn"  onclick="closechildmenu(${i});">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    &nbsp;back
                    </button>`;

        var dropdownGroup = ` <div class="header-dropdown-item">
                        <button class="h-btn" onclick="displaymenu(${i});">${item.displayName}</button>
                        <ion-icon class="dropdown-icon" name="chevron-down-outline"></ion-icon>
                        <div class="dropdown-content1" id="myDropdown1">`;
        $.each(item.childCategories, (index, item) => {
            if (item.childCategories != null) {
                dropdownGroup += `<div class="dropdown-content1-l1">
                            <a href="#">${item.displayName}</a>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                              <div class="dropdown-content1-l2">
                              <ul>`;

                sidemenu += `<button onclick="displaychildmenu(${k});" >
         ${item.displayName}
        <ion-icon class="side-menu-icon" name="chevron-forward-outline"></ion-icon>
        </button>
        <div class="menu-item-child-2">
                  <div class="menu-item-child2">
                    <button class="back-btn" onclick="closechildmenu2(${k});">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    &nbsp;back
                    </button>`;
                $.each(item.childCategories, (indexs, items) => {
                    sidemenu += `<button onclick="" >
          ${items.displayName}
          </button>`;
                    dropdownGroup += `<li><a href="#">${items.displayName}</a></li>`;
                });
                sidemenu += `</div></div>`;
                dropdownGroup += `</ul></div></div>`;
                k++;
            } else {
                dropdownGroup += `<div class="dropdown-content1-l1">
                          <a href="#">${item.displayName}</a>
                          </div>`;
                sidemenu += `<button onclick="" id="menu-close">  
        ${item.displayName}
        </button>`;
            }
            j++;
        });
        dropdownGroup += `
    </div>
    </div>`;
        sidemenu += `</div></div></div>`;
        menuContainer.append(dropdownGroup);
        sidemContainer.append(sidemenu);
        i++;
    });
});

function displaymenu(i) {
    document
        .getElementsByClassName("dropdown-content1")[i].classList.toggle("show1");
    document
        .getElementsByClassName("dropdown-icon")[i].classList.toggle("rotate");
}

window.onclick = function(e) {
    if (!e.target.matches(".h-btn")) {
        var myDropdown = document.getElementsByClassName("dropdown-content1");
        var rotate = document.getElementsByClassName("dropdown-icon");
        for (var i = 0; i < rotate.length; i++) {
            if (rotate[i].classList.contains("rotate")) {
                rotate[i].classList.remove("rotate");
            }
        }
        for (var i = 0; i < myDropdown.length; i++) {
            if (myDropdown[i].classList.contains("show1")) {
                myDropdown[i].classList.remove("show1");
            }
        }
    }
};

function openmenu() {
    document
        .getElementsByClassName("side-menu")[0]
        .setAttribute("style", "display:block");
}

function closemenu() {
    document
        .getElementsByClassName("side-menu")[0]
        .setAttribute("style", "display:none");
}

function openchildemenu(i) {
    document
        .getElementsByClassName("menu-item-child")[i].setAttribute("style", " display:block");
}

function closechildmenu(i) {
    document
        .getElementsByClassName("menu-item-child")[i].setAttribute("style", " display:none");
}

function displaychildmenu(i) {
    document.getElementsByClassName("menu-item-child-2")[i].setAttribute("style", " display:block");
}

function closechildmenu2(i) {
    document.getElementsByClassName("menu-item-child-2")[i].setAttribute("style", " display:none");
}