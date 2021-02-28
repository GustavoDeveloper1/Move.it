import { ReactNode, createContext , useState, useContext, useEffect} from "react";
import { ChallengesContext } from "./ChallengesContext";

let countDownTimeout: NodeJS.Timeout;

interface CountdownContextData {
    minutes : number,
    seconds : number,
    hasFineshed : boolean,
    startCountdown : () => void ,
    isActive: boolean,
    resetCountdown: () => void,
}


interface CountdownProviderProps {
    children: ReactNode
}


export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider ({children} : CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext);


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false)
    const [hasFineshed, sethasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountdown() {
        setisActive(true);
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout);
        setisActive(false);
        setTime(0.1 * 60);
        sethasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {

            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            sethasFinished(true);
            setisActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);


    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFineshed,
            startCountdown,
            isActive,
            resetCountdown
        }}> 
            {children}  
        </CountdownContext.Provider>
    )
}