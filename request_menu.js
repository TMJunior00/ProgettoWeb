"use strict";

let menu = document.getElementById("menu");

const x = `

<!--MENU-->
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container">
    <!--Logo-->
    <a class="navbar-brand fs-4" href="index.html">Piemonte Calcio</a>
    <!--Toggle Btn-->
    <button
      class="navbar-toggler shadow-none border-0" 
      type="button"
      data-bs-toggle="offcanvas" 
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!--Sidebar-->
    <div 
      class="sidebar offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <!--Sidebar Header-->
      <div
        class="offcanvas-header
        text-white border.bottom"
      >
        <h5
          class="offcanvas-title"
          id="offcanvasNavbarLabel">Offcanvas</h5>
        <button
          type="button"
          class="btn-close btn-close-white shadow-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!--Sidebar Body-->
      <div class="offcanvas-body d-flex flex-lg-row flex-column p-4 p-lg-0">
        <ul
          class="navbar-nav justify-content-center align-items-center
          fs-5 flex-grow-1 pe-3"
        >
          <li class="nav-item mx-2">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-2">
          <a class="nav-link" href="fields.html">Campi</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#preferiti">Preferiti</a>
          </li>
        </ul>
        <!--Login/Sign up-->
        <!--xs-up-hidden mt-3 text-center-->
        <div
          class="d-flex flex-column flex-lg-row
          justify-content-center align-item-center gap-3 h-100"
        >
          <a
          href="#login"
          class="text-white text-decoration-none px-3 py-1
          rounded-4"
          >Login</a
          >
          <a
            href="#signup"
            class="text-white text-decoration-none px-3 py-1
            rounded-4"
            >Sign Up</a
          >
        </div>
      </div>
    </div>
  </div>
</nav>
`;

menu.innerHTML += x;