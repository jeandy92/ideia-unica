import React from 'react'
import styles from "./css/index.module.css"
function PlayerDetails(props) {
    
    
    return (
        <div className={styles.c_player_details}>
            <div className={styles.details_img}>
                <img src="https://i.ibb.co/mFkxBfB/elfo-negro.png"/>
            </div>
            <h3 className={styles.details_title}>Palmeiras nao tem Mundial</h3>
            <h4 className={styles.details_artist}>Guilherme</h4>
        </div>
    )

}

export default PlayerDetails 
