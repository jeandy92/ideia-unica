import React from 'react'
import styles from "./css/index.module.css"
function PlayerDetails(props) {
    
    
    return (
        <div className={styles.c_player_details}>
            <div className={styles.details_img}>
                <img src="./elfo_negro.png"/>
            </div>
            <h3 className={styles.details_title}>{props.song.title}</h3>
            <h4 className={styles.details_artist}>{props.song.artist}</h4>
        </div>
    )

}

export default PlayerDetails 
