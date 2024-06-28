import Home from "./home.module.js";
import Details from './details.module.js';


let home = new Home();
let details = new Details()

home.initHome()


$(".nav-link").click(function () {
    let cat = this.innerHTML;
    $(".loadingScreen").fadeIn(500)
    home.getGames(cat)

    //Remote class active from all links
    $('.nav-link').removeClass('active');

    //Add class active to the selected link
    $(this).addClass('active');
})


$(document).ready(function(){
    $(".loadingScreen").fadeOut(500)
})