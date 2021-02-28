// import styles from '../styles/Pages/Profiles.modules.css';

import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { ChallengeBox } from "./ChalengeBox";

export function Profile() {

    const {level} = useContext(ChallengesContext);

    return (
        <div className="profile-container">
            <img src="https://github.com/GustavoDeveloper1.png" alt="Gustavo Dias" />
            <div>
                <strong>Gustavo Dias</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}