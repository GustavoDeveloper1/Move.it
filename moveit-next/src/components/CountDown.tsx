// import styles from '../styles/components/CountDown.modules.css';

import { useState, useEffect } from "react";

let countDownTimeout: NodeJS.Timeout;


export function CountDown() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setisActive] = useState(false)
    const [hasFineshed, sethasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setisActive(true);
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout);
        setisActive(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {

            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            sethasFinished(true);
            setisActive(false);
        }

    }, [isActive, time]);


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