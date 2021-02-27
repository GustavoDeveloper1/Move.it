import { createContext, useState, ReactNode } from 'react';
import challenges from '../challenges.json';

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: Number,
    activeChallenge: Challenge,
    currentExperience: number,
    challengeCompleted: number,
    experienceToNextlevel:number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void
};

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextlevel = Math.pow((level + 1) * 4 , 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }



    return (
        <ChallengesContext.Provider value={{ level, currentExperience, challengeCompleted,experienceToNextlevel, activeChallenge, resetChallenge, levelUp, startNewChallenge }}>

            {children}

        </ChallengesContext.Provider>
    )
}