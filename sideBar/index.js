$(document).ready(function () {
  let html = `<div class="d-flex">
      <div id="sideBar" class="sidebar bg-dark" style="display: none">
        <div class="sideBar-heading">  <a href="https://www.sakthifinance.com/"
      ><img src="1.png" alt="" srcset="" width="250px"
    /></a></div>
        <div class="sideBar-content"></div>
      </div>

      <div class="container-fluid" id="mainContainer">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="navBar">
          <button class="btn btn-danger btn-sm" id="sideBarToggle">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Dashboard</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0 collapse navbar-collapse justify-content-end"
              >
                <li class="nav-item">
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>`;
  let htmll = `</div>
    </div>`;
  let style = `<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
<link rel="stylesheet" href="sidebar.css" />
`;
  $("body").prepend(html);
  $("body").append(htmll);
  $("head").append(style);
  $("#sideBar").animate(
    {
      width: "toggle",
    },
    "slow"
  );
  $("#sideBarToggle").click(function () {
    // $("#sideBar").toggleClass("active");
    // alert("hai");

    $("#sideBar").animate(
      {
        width: "toggle",
      },
      "slow"
    );
  });
});

// console.log("hai");
