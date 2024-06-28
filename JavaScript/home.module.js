import UI from "./ui.module.js";
let ui = new UI();

export default class Home{


    async getGames(cat = "mmorpg") {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '27b8fe8d50msh26e35a85d8a0cdcp12ae4bjsnf14eace6d624',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        let response = await api.json();
        ui.displayHomeContent(response)
        $(".loadingScreen").fadeOut(500)
        
    }

    initHome(){
        ui.displayNav();
        this.getGames();
    }

    




}