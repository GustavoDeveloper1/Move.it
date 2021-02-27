import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";

// import styles from '../styles/Pages/CompleteChalenges.modules.css';
export function CompleteChalenges(){
   
    const {challengeCompleted} = useContext(ChallengesContext);

    return (
        <div className="completeChalenges-container">
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    );

}