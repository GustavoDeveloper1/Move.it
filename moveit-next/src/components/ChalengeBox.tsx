// import Styles from '../styles/Pages/ChallengeBox.modules.css';

import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { CountdownContext } from "../Contexts/CountDownContext";

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    
    function handleChallengeSucess() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFalled() {
        resetChallenge();
        resetCountdown();
    }

    return (


        <div /*className={Styles.challengeBoxContainer} */ className="challengeBox-container" >
            {
                activeChallenge ? (
                    <div className="challengeActive">
                        <header> Ganhe {activeChallenge.amount
                        } XP</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button type="button"
                                className="challengeFalledButton"
                                onClick={handleChallengeFalled}
                            >Falhei
                            </button>
                            <button type="button"
                                className="challengeSucceededButton"
                                onClick={handleChallengeSucess}
                            >Completei</button>
                        </footer>
                    </div>
                ) : (
                        <div className="challegeNotActive" /*className={Styles.challengeBoxContainer} */>
                            <strong> Finalize um ciclo para receber desafios </strong>
                            <p>
                                <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
        </p>
                        </div>
                    )
            }
        </div>

    );
}