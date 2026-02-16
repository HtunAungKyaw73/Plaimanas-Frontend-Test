// Mobile menu toggle
const menuToggleBtn = document.querySelector(".menu__toggle-btn");
const menuNavBar = document.querySelector(".menu__navbar");
const menuIcon = document.getElementById("menu-icon");

menuToggleBtn.addEventListener("click", () => {
  menuNavBar.classList.toggle("active");

  // Prevent scrolling
  if (menuNavBar.classList.contains("active")) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // Icon change
  menuIcon.setAttribute(
    "width",
    menuNavBar.classList.contains("active") ? "21" : "20",
  );
  menuIcon.setAttribute(
    "height",
    menuNavBar.classList.contains("active") ? "17" : "9",
  );
  menuIcon.setAttribute(
    "viewBox",
    menuNavBar.classList.contains("active") ? "0 0 21 17" : "0 0 20 9",
  );

  menuIcon.innerHTML = menuNavBar.classList.contains("active")
    ? `<path d="M0.148926 16.4772L20.1489 0.477241" stroke="black" />
       <path d="M0.148926 0.477242L20.1489 16.4772" stroke="black" />`
    : `<path d="M0 0.5H20" stroke="black" />
       <path d="M0 8.5H20" stroke="black" />`;

  menuIcon.style.transform = menuNavBar.classList.contains("active")
    ? "translateY(5px)"
    : "translateY(0px)";
});

// Submenu toggle for mobile
const submenuToggle = document.querySelector(".menu__submenu");

submenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  const submenu = submenuToggle.nextElementSibling;
  submenu.classList.toggle("active");
  submenuToggle.classList.toggle("active");
});

// Desktop Menu config
document.addEventListener("DOMContentLoaded", () => {
  const editorialItem = document.querySelector(".menu__item--editorial");
  const hoverMenu = document.querySelector(".menu__desktop--hover");
  const menuList = document.querySelector(".menu__desktop-item");

  editorialItem.addEventListener("mouseenter", () => {
    hoverMenu.classList.add("active");
  });

  hoverMenu.addEventListener("mouseleave", () => {
    hoverMenu.classList.remove("active");
  });

  menuList.addEventListener("mouseleave", () => {
    hoverMenu.classList.remove("active");
  });
});

// FAQ accordion functionality
const accordionButtons = document.querySelectorAll(".accordion__question");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion__item");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Close all first
    document.querySelectorAll(".accordion__item").forEach((i) => {
      i.querySelector(".accordion__question").setAttribute(
        "aria-expanded",
        "false",
      );
      i.classList.remove("accordion__item--open");
    });

    // Only open clicked item if it was closed
    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      item.classList.add("accordion__item--open");
    }
  });
});
