import { useEffect} from 'react'
import { Component, userState, useState } from 'react';
import Player from '../components/Player'
import styles from "../components/css/index.module.css"

function App() {
    const [songs, setSongs] = useState([
        { 
         title: "Palmeiras nao tem mundial",
         artist: "Guilherme", 
         src: "./audio_djavan.mp3"  
        }
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

   useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex]);
      
      /*console.log(currentSongIndex)
      console.log(setCurrentSongIndex)
      console.log(nextSongIndex)
      console.log(setNextSongIndex)*/

    return <div className = {styles.App}>
        <Player
            currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            songs={songs}    
        />
       
    </div>

}

export default App