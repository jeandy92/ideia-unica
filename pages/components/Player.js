import React, {useState, useRef, useEffect} from 'react'
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';
import styles from "./css/index.module.css"

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(isPlaying)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });
    
    const SkipSong = (forwards = true) => {
        console.error('dentro do if')
        if (forwards) {
            console.log('dentro do if')
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                
                return temp;
            });
        }
    }
   /* console.log(SkipSong)
    console.log(props.songs[props.songs[props.currentSongIndex].src])
    console.log(audioEl)*/
    return (
        <div className={styles.c_player}>
            <audio src={'./audio_djavan.mp3'} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={'0'} />
            <PlayerControls isPlaying={false} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>            
            <p>By Sid</p>
        </div>
    )
}


export default Player;