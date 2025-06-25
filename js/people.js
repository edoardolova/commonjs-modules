const completeName = require("./names.js");
const getHobbies = require("./hobbies.js");

function person(){
    return {
        fullName: completeName("Edoardo", "Lova"),
        hobbies: getHobbies("games", "anime", "music")
    }
}

console.log(person());