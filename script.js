console.log("script")
// Our Variables--
let audioelement=new Audio("songs/1.mp3")
let songindex=0;
let mainplay=document.querySelector("#mainplay")
let progressbar=document.querySelector("#progressbar")
let playback=document.querySelector(".play-back")
let playnext=document.querySelector(".play-next")
let artist=document.querySelector(".artist")
let title=document.querySelector(".title")
let image=document.querySelector("#cover")
let duration=document.querySelector(".duration")
let volume=document.querySelector("#volume")
// --Our Variable//


// Script for volume buutton--
volume.addEventListener("click",()=>{
    if(audioelement.volume != 0){
        volume.classList.remove("fa-volume-high")
        volume.classList.add("fa-volume-off")

    
        console.log("volume")
        audioelement.volume=0
    }
    else{
        audioelement.volume=1
        volume.classList.remove("fa-volume-off")
        volume.classList.add("fa-volume-high")
        
        

    
    }
    
})

// --Script for volume button

// Default --
artist.innerText=songs[songindex].artist
title.innerText=songs[songindex].title
image.src=songs[songindex].cover
// --Default



mainplay.addEventListener("click",()=>{
    if(audioelement.paused){
        audioelement.play()
        mainplay.classList.remove("fa-play")
        mainplay.classList.add("fa-pause")
        // console.log(songs[songindex].title)
    }
    else{
        audioelement.pause()
        mainplay.classList.remove("fa-pause")
        mainplay.classList.add("fa-play")
    }
    }
    
)




// For Progreebar value update and audio --
progressbar.addEventListener("change",()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100
    if(audioelement.paused){
        audioelement.play()
        mainplay.classList.remove("fa-play")
        mainplay.classList.add("fa-pause")
    }
})
// ----





// for previous and next button--
function playnextsong(){
    songindex=(songindex+1)%songs.length
    audioelement.src=songs[songindex].path
    artist.innerText=songs[songindex].artist
    title.innerText=songs[songindex].title
    image.src=songs[songindex].cover
   duration.innerText=songs[songindex].duration

    
    if(songindex>songs.length){
        songindex=1
    }

}
playnext.addEventListener("click",()=>{
    playnextsong();
    if(audioelement.paused){
        audioelement.play()
        mainplay.classList.remove("fa-play")
        mainplay.classList.add("fa-pause")
        console.log(songs[songindex].title)
        
    }
    
})
if(progressbar.value==audioelement.duration){
    playnextsong()
}



function playbacksong(){
    if(songindex==0){
        songindex=1
    }
    songindex=(songindex-1)%songs.length
    audioelement.src=songs[songindex].path
    console.log(songs[songindex].title)
    
    artist.innerText=songs[songindex].artist
    title.innerText=songs[songindex].title
    image.src=songs[songindex].cover
   duration.innerText=songs[songindex].duration

    
}
playback.addEventListener("click",()=>{
    playbacksong();
    
    if(audioelement.paused){
        audioelement.play()
        mainplay.classList.remove("fa-play")
        mainplay.classList.add("fa-pause")
    }

})

//----

        audioelement.addEventListener("timeupdate",()=>{
            let progress=(audioelement.currentTime/audioelement.duration)*100
            
            progressbar.value=progress
            if(progressbar.value==100){
                playnextsong()
                audioelement.play()
            }
        })
        console.log(audioelement.duration)

   duration.innerText=songs[songindex].duration