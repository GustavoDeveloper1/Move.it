import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../challenges.json';
import Cookie from 'js-cookie';


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
    resetChallenge: () => void,
    completeChallenge: () => void,
};

interface ChallengesProviderProps {
    children: ReactNode,
    level: number,
    currentExperience:number ,
    challengesCompleted: number 
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children,
...rest }: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextlevel = Math.pow((level + 1) * 4 , 2);

    useEffect( ()=>{

        Notification.requestPermission();
        
        
    }, 
    []);

    useEffect(()=>{

    Cookie.set('level',String(level));
    Cookie.set('currentExperience',String(currentExperience));
    Cookie.set('challengeCompleted',String(challengeCompleted));

    }, [level,currentExperience, challengeCompleted]);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('notification.mp3').play;

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount} Xp`
            });
        }

    }

    function resetChallenge() {
        setActiveChallenge(null)
    }


    function completeChallenge() {

        if (!activeChallenge) {
             return
            };

        const {amount} =activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextlevel) {

            finalExperience = finalExperience - experienceToNextlevel;
            levelUp();

        }

        setCurrentExperience(finalExperience); 
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);

    }


    return (
        <ChallengesContext.Provider value={{ level, currentExperience, challengeCompleted,experienceToNextlevel, activeChallenge, resetChallenge, levelUp, startNewChallenge, completeChallenge }}>

            {children}

        </ChallengesContext.Provider>
    )
}