import Details from "./details.module.js";

let details = new Details();

export default class UI {
    constructor() {
        this.homeContent = document.querySelector(".home-content");
        this.nav = document.querySelector(".nav-holder");
        this.main = document.querySelector("#main")
        this.detailsPage = document.querySelector(".details")
        this.detailsContainer = document.querySelector("#details-container")

    }
    displayNav() {
        this.nav.innerHTML = ` <nav class="navbar navbar-expand-lg ">
        <div class="container-md nav-container rounded-4 px-5 py-2">
            <a class="navbar-brand text-white fw-medium" href="#">
                <img src="./imgs/logo-sm.png" alt="logo">
                GAME REVIEWS
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">MMORPG</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SHOOTER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SAILING</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PERMADEATH</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SUPERHERO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PIXEL</a>
                    </li>


                </ul>

            </div>
        </div>
    </nav>`
    }

    displayHomeContent(response) {

        console.log(response)
        var collect = ""
        for (let i = 0; i < response.length; i++) {

            collect += `<div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card bg-transparent text-white h-100 gamebox" id= "${response[i].id}">
                <div class="card-body">
                    <img src="${response[i].thumbnail}" class="w-100" alt="">
                    <div class="caption d-flex justify-content-between py-2">
                        <h6 class="small">${response[i].title}</h6>
                        <span class="bg-primary p-2 badge">free</span>
                    </div>
                    <p class="small text-center opacity-50">${response[i].short_description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between small">
                    <span class="badge badge-color">${response[i].genre}</span>
                    <span class="badge badge-color">${response[i].platform}</span>
                </div>
            </div>
        </div>
        `
        }
        this.homeContent.innerHTML = collect
        this.addCardEvent();

    }

    displayDetails(res) {

        console.log(res);

        this.main.classList.add("d-none")
        this.detailsPage.classList.remove("d-none")

        let screenShotsArray = res.screenshots;
        let screenshots = ``

        for (let i = 0; i< screenShotsArray.length; i++) {
            screenshots += `
            <div class="col-md-3">
                <img src="${screenShotsArray[i].image}" alt="screenshot" class="w-100">
            </div>
            `
           
        }

        const details = `
        <div class="det-head d-flex justify-content-between text-white">
                <h1 class="">Details Game</h1>
                <span class="closeDetailsBtn">
                    <i class="fa-solid fa-xmark opacity-50 fa-2x"></i>
                </span>
        </div>

        <div class="row text-white">
            <div class="col-md-4 mb-4">
                    <img src="${res.thumbnail}" class="w-100" alt="image details">
            </div>

            <div class="col-md-8">
                <h3>Title: ${res.title}</h3>

                <p>
                    Category:
                    <span class="badge text-bg-info cat">${res.genre}</span>
                </p>

                <p>
                    Platform:
                    <span class="badge text-bg-info platform">${res.platform}</span>
                </p>

                <p>
                    Status:
                    <span class="badge text-bg-info status">${res.status}</span>
                </p>

                <p class="small">${res.description}</p>

                <a href="${res.freetogame_profile_url}" class="btn btn-outline-warning text-white" target="_blank">Show Game</a>
            </div>
        </div>

        <div class="row mt-5 gy-3">
             ${screenshots}
        </div>
        `
        this.detailsContainer.innerHTML = details
        this.addCloseDetailsEvent()
        $(".loadingScreen").fadeOut(500);
    }

    addCloseDetailsEvent() {
        let closeDetailsBtn = document.querySelector(".closeDetailsBtn")

        closeDetailsBtn.addEventListener("click", () => {
            this.detailsPage.classList.add("d-none")
            this.main.classList.remove("d-none")
        })
    }


    addCardEvent() {

        let cards = document.querySelectorAll(".card");


        cards.forEach(card => {
            card.addEventListener("click", () => {
                let id = card.getAttribute("id");
                this.detailsPage.classList.remove("d-none")
                this.main.classList.add("d-none")
                details.getDetails(id)
                $(".loadingScreen").fadeIn(500)
            })
        })


    }
}