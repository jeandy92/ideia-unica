import { useEffect} from 'react'
import { Component, userState, useState } from 'react';
import { Button } from './components/Button';
import { Audio } from './components/Audio';
import Player from './components/Player'
import styles from './components/index.module.css'





function Home() {
    const [songs, setSongs] = useState([
        { 
         title: "Palmeiras nao tem mundial",
         artist: "Guilherme", 
         img_src: "./elfo_negro.png", 
         src: "./zoa_matheus.mpeg" 
        },
        { 
         title: "Gustavo Lima",
         artist: "Guilherme", 
         img_src: "./elfo_negro.png",  
         src: "./zoa_matheus.mpeg" 
        },
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

    return <div className = {styles.App}>
        <Player
            currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            songs={songs}    
        />
       
    </div>

}

export default Home