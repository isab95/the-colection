
//adding a title to the page
document.title = "My Collection";
//create variable for existing element
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
//create element h1
const h1 = document.createElement("h1");
//adding h1 to header
h1.innerHTML = "<span>f</span>avourite <span>m</span>anga <span>c</span>";
header.appendChild(h1);

//adding colection item


function addCollectionItem (parent, item){
    

}//end addCollectionItem

const collection =
[
    {
        id : 0,
        H : 203,
        S : 69,
        L : 29,//text zone change the ligness with +40 (max 80) at least 20
        manga : ["Manga name", "one piece"],
        publishYear : ["publish in", "1997"],
        anime : true,
        type : ["type", "shonen"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Monkey D Luffy"],
                    nickname : ["nickname", "mugiwara no luffy"],
                    story : [""],
                    picture : "./assets/images/monkey-D-luffy.jpg"
                },
                {
                    id : 1,
                    name : ["Tony Tony Chopper"],
                    nickname : ["nickname", "~"], 
                    story : "",
                    picture : ""
                }
            ]
    },
    {
        id : 1,
        H : 323,
        S : 100,
        L : 74,
        manga : ["Manga name", "fairy tail"],
        publishYear : ["publish in", "2006"],
        anime : true,
        type : ["type", "shonen"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Lucy Heartfilia"],
                    nickname : ["nickname", "Lucky Lucy"],
                    story : [""],
                    picture : ""
                },
                {
                    id : 1,
                    name : ["Freed Justine"],
                    nickname : ["nickname", "Freed"], 
                    story : [""],
                    picture : ""
                }
            ]
    },
    {
        id : 2,
        H : 30,
        S : 100,
        L : 59,
        manga : ["Manga name", "five"],
        publishYear : ["publish in", "2004"],
        anime : false,
        type : ["type", "shojo"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Hina Asõ"],
                    nickname : ["nickname", "Hime"],
                    story : [""],
                    picture : ""
                },
                {
                    id : 1,
                    name : ["Jun Taraiku"],
                    nickname : ["nickname", "~"], 
                    story : [""],
                    picture : ""
                }
            ]
    },
    {
        id : 3,
        H : 288,
        S : 82,
        L : 46,
        manga : ["Manga name", "ouran high school host club"],
        publishYear : ["publish in", "2003"],
        anime : true,
        type : ["type", "shojo"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Haninozuka Mitsukuni"],
                    nickname : ["nickname", "Honey sempai"],
                    story : [""],
                    picture : ""
                },
                {
                    id : 1,
                    name : ["Morinozuka Takeshi"],
                    nickname : ["nickname", "Mori sempai"], 
                    story : [""],
                    picture : ""
                }
            ]
    },
    {
        id : 4,
        H : 308,
        S : 95,
        L : 61,//color choice stopped here
        manga : ["Manga name", "skip beat"],
        publishYear : ["publish in", "2002"],
        anime : true,
        type : ["type", "shojo"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Tsuruga Ren"],
                    nickname : ["nickname", "Corn"],
                    story : [""],
                    picture : ""
                }
            ]
    },
    {
        id : 5,
        H : 203,
        S : 69,
        L : 29,
        manga : ["Manga name", "katekyo hitman reborn"],
        publishYear : ["publish in", "2004"],
        anime : true,
        type : ["type", "shonen"],
        charachter : 
            [
                {
                    id : 0,
                    name : ["Fon"],
                    nickname : ["nickname", "Storm acrcobaleno"],
                    story : "",
                    picture : ""
                }
            ]
    }
]//end collection