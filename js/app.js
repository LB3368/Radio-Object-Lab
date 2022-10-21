/*
1. Create a new HTML/CSS/JS replLinks to an external site.Links to an external site. page and complete the following in your .js file
2. Give it a property called stations and make the value an array of station objects
3. Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
4. Song object should have two properties: title and artist
5. Create a currentStation property on your radio object
6. Create a method on your radio object that changes the station. 
7. When the station is changed, pick a song from that station console.log("Now Playing:" + song.title + "by" + song.artist)
*/

const radio = {
    currentStation: 0,
    stations: [
      {
        name: "92.9",
        color: 'red',
        songs: [
          {
            title: "Somebody That I used to know",
            artist: "Gotye"
          },
          {
            title: "You Proof",
            artist: "Morgan Wallen"
          }
        ]
      },
      {
        name: "97.9",
        color: 'purple',
        songs: [
          {
            title: "Something in the Orange",
            artist: 'Zach Bryan'
          },
          {
            title: 'Glimpse Of Us',
            artist: "Joji"
          }
        ]
      },
      {
        name: "99.7",
        color: 'green',
        songs: [
          {
            title: "Running Up That Hill (A Deal With God)",
            artist: 'Kate Bush'
          },
          {
            title: 'Golden Hour',
            artist: "JVKE"
          }
        ]
      },
    ],
    
    changeStation: () => {
      let newStation 
  
      if (radio.currentStation === radio.stations.length - 1) {
        newStation = radio.stations[radio.currentStation = 0]
      } else {
        newStation = radio.stations[radio.currentStation += 1]
      }
      
      const song = newStation.songs[Math.floor(Math.random() * newStation.songs.length)]
  
      console.log(`Station: ${newStation.name} | Now Playing: ${song.title} by ${song.artist}`)
      updateDOM(newStation.name, song, newStation.color)
    }
  }
  

const radioEl = document.querySelector('.radio')
const stationEl = document.querySelector('.station')
const changeBtn = document.querySelector('#change')
const songEl = document.querySelector('.song')

changeBtn.addEventListener('click', radio.changeStation)

function updateDOM (stationName, songObj, color) {
  stationEl.textContent = stationName
  radioEl.style.backgroundColor = color
  songEl.textContent = ` Now Playing: ${songObj.title} by ${songObj.artist}`
}

radio.changeStation()
/**
 * / PART 2 THE DOM
/*

Directions
This morning we will be taking the radio object that you built yesterday and integrate that into the DOM

Setup:
1. In the same folder as yesterday, make an index.html and style.css file.

2. Link your CSS and JS to the index.html

Requirements:
1. There must be HTML elements that display the current station and song on the radio.

2. There must be a button that when pressed, will change the station. The elements that display the current station and song should be updated when the button is pressed.

Don't overcomplicate this. You already have all of the contents in your radio object to display.

Think about the HTML element you can use and how we can manipulate them once an event occurs.
Look back on the W4D2 lesson, where we added comments to the <ul> with the click of a button!

 */

//=======Instructor Code==============




/*
radio.changeStation() 

const btn = document.querySelector('button')
const p = document.querySelector('p')
const h3 = document.querySelector('h3')


btn.addEventListener("click",(evt)=> {
let newSong =radio.changeStation()
h3.textContent=`Station: ${radio.stations[radio.currentStation].name}`
p.textContent = `Artist: ${newSong.artist} Song: ${newSong.title}`
})


const stations = [
    {name: `x`, songs:[{title: `a`, artist: `b`},{title: `c`, artist: `d`},{title: `e`, artist: `f`}]},
    {name: `x`, songs:[{title: `g`, artist: `h`},{title: `i`, artist: `j`},{title: `k`, artist: `l`}]},
    {name: `x`, songs:[{title: `m`, artist: `n`},{title: `o`, artist: `p`},{title: `q`, artist: `r`}]},
]
//Create a currentStation property on your radio object


const radio = function(currentStation) {
    //Create a method on your radio object that changes the station. 
    let currentSong = Math.floor(Math.random()*3)
    console.log("Now Playing:" + stations[currentStation].songs[currentSong].title + " by " + stations[currentStation].songs[currentSong].artist)
}
//When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

radio(0)
console.log(stations)
*/