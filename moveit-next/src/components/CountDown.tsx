// import styles from '../styles/components/CountDown.modules.css';

import { useContext } from "react";

import { CountdownContext } from "../Contexts/CountDownContext";

export function CountDown() {

    const { minutes,
        seconds,
         hasFineshed,
        isActive,
        resetCountdown,
        startCountdown } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



    return (
        <div>
            <div /*className={styles.countDownContainer}*/ className="countDown-container" >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFineshed ? (

                <button disabled className=" contDownBtnActive"/*className={Styles.startCountdownButton} */>
                    Ciclo Encerrado...
                </button>

            ) : (
                    <>
                        { isActive ? (

                            <button type="button" onClick={resetCountdown} className=" contDownBtnActive"/*className={Styles.startCountdownButton} */>
                                Abandonar Ciclo
                            </button>

                        ) : (

                                <button type="button" onClick={startCountdown} className="startCountdownBtn"/*className={Styles.startCountdownButton} */>
                                    Iniciar um ciclo
                                </button>

                            )
                        }
                    </>
                )}





        </div>

    );
}