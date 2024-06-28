import UI from "./ui.module.js";


export default class Details{
    async getDetails(id = "452") {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '27b8fe8d50msh26e35a85d8a0cdcp12ae4bjsnf14eace6d624',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let response = await api.json();

        let ui = new UI();
        ui.displayDetails(response);
        
    }
}