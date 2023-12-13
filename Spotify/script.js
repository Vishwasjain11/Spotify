console.log("Welcome to Spotify")

//Intialize the variable
let songIndex = 0;
let audioElement = new Audio ('songs/pf.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song=[             
    {songName : "Excuses - Ap Dillion", filepath: "songs/pf1.mp3", coverPath:"covers/pf1.jpg"},
    {songName : "Brown Munde - AP Dillion", filepath:"songs/pf2.mp3", coverPath:"covers/pf2.jpg"},
    {songName : "Chek it out - Parmish", filepath: "songs/pf3.mp3", coverPath:"covers/pf3.jpg"},
    {songName : "Arjun Valli - Animal ", filepath: "songs/pf4.mp3", coverPath:"covers/pf4.jpg" } , 
    {songName : "The script- Hall of fame", filepath: "songs/pf5.mp3", coverPath:"covers/pf5.jpg" },
    {songName : "3:59 - Divine", filepath: "songs/pf6.mp3", coverPath:"covers/pf6.jpg" },
    {songName : "The Last ride - sidhu Moosewala", filepath: "songs/pf7.mp3", coverPath:"covers/pf8.jpg"},
]

songItems.forEach((element, i)=>{   
    element.getElementsByTagName("img")[0].src= song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

//audioElement.play();

// Handle Play/Pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }   
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    
//update seekabr
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause'); 
    audioElement.src= `songs/pf${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex].songName;     
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');    

   }) 
}); 

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src= `songs/pf${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex].songName; 
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= `songs/pf${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex].songName; 
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');    
})