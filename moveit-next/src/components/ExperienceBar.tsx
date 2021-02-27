import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";


export default function ExperienceBar() {
    const {currentExperience,experienceToNextlevel } = useContext(ChallengesContext);

    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel;

    return (
        <header className="experience-bar">
            <span>0xp</span>
            <div >
                <div style={{ width: `${porcentToNextLevel}%` }} />
                <span className="current-experience" style={{ left: `${porcentToNextLevel}%` }}>{currentExperience} Xp</span>
            </div>
            <span>{experienceToNextlevel} Xp</span>
        </header>

    );
}