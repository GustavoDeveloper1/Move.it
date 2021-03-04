// import styles from '../styles/components/LevelUpModal.modules.css';

import { useContext } from "react"
import { ChallengesContext } from "../Contexts/ChallengesContext"
import { CountdownContext } from "../Contexts/CountDownContext";


export function LevelUpModal() {
    const {level} = useContext(ChallengesContext);


    return (
        <div className="overlay">
            <div className="modal-container">
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo Nivel.</p>

                <button type="button" ><img src="/icons/close.svg" alt="Fechar modal"/></button>
            
            </div>
        </div>
    )
}