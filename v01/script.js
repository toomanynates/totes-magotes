// best practice if you have an id
console.log("title 1: " + document.getElementById('title').innerHTML);

// secondary practice if you do not have an id
console.log("title 2: " + document.querySelector('#title').innerHTML);

// secondary and if you need to access a class
console.log("title 2: " + document.querySelector('.hero__container').innerText);

function onClickDarkTheme() {
  const body = document.querySelector('body');  
  console.log("onClickDarkTheme() " + body.style.classList);
  body.classList.toggle('dark-theme');
}


// element toggle function
const elementToggleFunc = function (elem) {
  if (elem) {
    elem.classList.toggle("active");
  }
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar], .mobile-nav");
const sidebarBtn = document.querySelector("[data-sidebar-btn], .header__hamburger");
const overlay = document.querySelector("[data-overlay], .overlay");

// sidebar toggle functionality for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
    elementToggleFunc(overlay);
  });
}



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item], .testimonial-item");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    elementToggleFunc(modalContainer);
    elementToggleFunc(overlay);
  }
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    if (modalImg && this.querySelector("[data-testimonials-avatar], .testimonial-avatar")) {
      modalImg.src = this.querySelector("[data-testimonials-avatar], .testimonial-avatar").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar], .testimonial-avatar").alt;
    }
    if (modalTitle && this.querySelector("[data-testimonials-title], .testimonial-title")) {
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title], .testimonial-title").innerHTML;
    }
    if (modalText && this.querySelector("[data-testimonials-text], .testimonial-text")) {
      modalText.innerHTML = this.querySelector("[data-testimonials-text], .testimonial-text").innerHTML;
    }

    testimonialsModalFunc();
  });
}

// add click event to modal close button
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", function () {
    if (modalContainer && modalContainer.classList.contains('active')) {
      testimonialsModalFunc();
    }
    if (sidebar && sidebar.classList.contains('active')) {
      elementToggleFunc(sidebar);
    }
    if (overlay && overlay.classList.contains('active')) {
      elementToggleFunc(overlay);
    }
  });
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form && form.checkValidity()) {
      if (formBtn) {
        formBtn.removeAttribute("disabled");
      }
    } else if (formBtn) {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks.length && pages.length) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }

    });
  }
}

// Close mobile nav when mobile links are clicked
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
const mobileNavBtn = document.querySelector('.mobile-nav__btn');
if (mobileNavLinks.length) {
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (sidebar && sidebar.classList.contains('active')) elementToggleFunc(sidebar);
      if (overlay && overlay.classList.contains('active')) elementToggleFunc(overlay);
    });
  });
}
if (mobileNavBtn) {
  mobileNavBtn.addEventListener('click', function () {
    if (sidebar && sidebar.classList.contains('active')) elementToggleFunc(sidebar);
    if (overlay && overlay.classList.contains('active')) elementToggleFunc(overlay);
  });
}