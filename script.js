let folder = document.querySelector('#nav-folders');
let menu = document.querySelector('#drop-cont')

let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let image = document.querySelector('#song-img');

let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let next = document.querySelector('#next');
let slider = document.querySelector('#duration_slider');



let timer;
let playing_song = false;
let index_no = 0;

/* Create a audio element */
let track = document.createElement('audio');

/* All Song List's */
let All_Song_Inter = [
    {
        name: "Another Love",
        path: "musics/internacional/Another-Love.mp3",
        img: "img-musics/internacional/Another.jpeg",
        singer: "Tom Odell"
    },
    {
        name: "After Dark",
        path: "musics/internacional/After-Dark.mp3",
        img: "img-musics/internacional/After.jpeg",
        singer: "Mr.Kitty"
    },
    {
        name: "As It Was",
        path: "musics/internacional/As-It-Was.mp3",
        img: "img-musics/internacional/As-it.jpeg",
        singer: "Harry Styles"
    },
    {
        name: "Enemy",
        path: "musics/internacional/Enemy.mp3",
        img: "img-musics/internacional/Enemy.jpeg",
        singer: "Imagine Dragons"
    },
    {
        name: "Impossible", 
        path: "musics/internacional/Impossible.mp3",
        img: "img-musics/internacional/Impossible.jpeg",
        singer: "James Arthur"
    },
    {
        name: "Infinity",
        path: "musics/internacional/Infinity.mp3",
        img: "img-musics/internacional/Infinit.jpeg",
        singer: "Jaymes Young"
    },
    {
        name: "On Me",
        path: "musics/internacional/On-Me.mp3",
        img: "img-musics/internacional/On.jpeg",
        singer: "Tyga"
    },
    {
        name: "Something In The Way",
        path: "musics/internacional/Something-In-The-Way.mp3",
        img: "img-musics/internacional/Something.jpeg",
        singer: "Nirvana"
    },
    {
        name: "Smooth Criminal",
        path: "musics/internacional/Smooth-Criminal.mp3",
        img: "img-musics/internacional/Smooth.jpeg",
        singer: "Michael Jackson"
    },
    {
        name: "Video Games",
        path: "musics/internacional/Video-Games.mp3",
        img: "img-musics/internacional/Games.jpeg",
        singer: "Lana Del Rey"
    }
];

let All_Song_Rock = [
    {
        name: "Black",
        path: "musics/rock/Black.mp3",
        img: "img-musics/rock/Black.jpeg",
        singer: "Pearl Jam"
    },
    {
        name: "Bohemian Rhapsody",
        path: "musics/rock/Bohemian-Rhapsody.mp3",
        img: "img-musics/rock/Bohemian.jpeg",
        singer: "Queen"
    },
    {
        name: "Fear of the Dark",
        path: "musics/rock/Fear-of-the-Dark.mp3",
        img: "img-musics/rock/Fear.jpeg",
        singer: "Iron Maiden"
    },
    {
        name: "Nihil",
        path: "musics/rock/Nihil.mp3",
        img: "img-musics/rock/Nihil.jpeg",
        singer: "Ghostemane"
    },
    {
        name: "Numb",
        path: "musics/rock/Numb.mp3",
        img: "img-musics/rock/Numb.jpeg",
        singer: "Link Park"
    },
    {
        name: "Stressed Out",
        path: "musics/rock/Stressed-Out.mp3",
        img: "./img-musics/rock/Stressed.jpeg",
        singer: "Twenty One Pilots"
    },
    {
        name: "The Final Coundtdown",
        path: "musics/rock/Countdown.mp3",
        img: "img-musics/rock/Final.jpeg",
        singer: "Europe"
    },
    {
        name: "The Last Night",
        path: "musics/rock/The-Last-Night.mp3",
        img: "img-musics/rock/Last.jpeg",
        singer: "Skillet"
    },
    {
        name: "The Writhing On The Wall",
        path: "musics/rock/The-Wall.mp3",
        img: "img-musics/rock/Writing.jpeg",
        singer: "Iron Maiden"
    },
    {
        name: "Unsainted",
        path: "musics/rock/Unsainted.mp3",
        img: "img-musics/rock/Unsainted.jpeg",
        singer: "Slipknot"
    },
];

let All_Song_Geek = [
    {
        name: "Genki-Dama",
        path: "musics/geek/GENKI-DAMA.mp3",
        img: "img-musics/geek/genki.jpeg",
        singer: "7mz"
    },
    {
        name: "Monster",
        path: "musics/geek/Monster.mp3",
        img: "img-musics/geek/monster.jpeg",
        singer: "PlayTauz"
    },
    {
        name: "Batman e Coringa",
        path: "musics/geek/Batman-e-Coringa.mp3",
        img: "img-musics/geek/batman-and-coringa.jpeg",
        singer: "Anirap"
    },
    {
        name: "Punição Divina",
        path: "musics/geek/Punicao.mp3",
        img: "img-musics/geek/punicao-divina.jpg",
        singer: "Flash Beats"
    },
    {
        name: "Rap da Akatsuki",
        path: "musics/geek/Rap-Da-Akatsuki.mp3",
        img: "img-musics/geek/akatsuki.jpeg",
        singer: "7mz"
    },
    {
        name: "Raptributo do Goku",
        path: "musics/geek/Rap-do-Goku.mp3",
        img: "img-musics/geek/goku.jpg",
        singer: "PlayTauz"
    },
    {
        name: "Rap do Naruto",
        path: "musics/geek/Rap-do-Naruto.mp3",
        img: "img-musics/geek/naruto.jpeg",
        singer: "7mz"
    },
    {
        name: "Rap dos 9 Titãs Primordiais",
        path: "musics/geek/Titans-Primordiais.mp3",
        img: "img-musics/geek/titans.jpeg",
        singer: "AniRap"
    },
    {
        name: "Vibe Animes #6 Vilão",
        path: "musics/geek/Vibe-Animes.mp3",
        img: "img-musics/geek/vibe-vilan.jpg",
        singer: "MhRap"
    },
    {
        name: "Vibe Zabuza",
        path: "musics/geek/VIBE-ZABUZA.mp3",
        img: "img-musics/geek/vibe-zabu.jpeg",
        singer: "MhRap"
    },
];