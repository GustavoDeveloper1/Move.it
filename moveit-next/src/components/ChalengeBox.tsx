// import Styles from '../styles/Pages/ChallengeBox.modules.css';

export function ChallengeBox() {

    const hasActiveChallenge = true;


    return (

        <div /*className={Styles.challengeBoxContainer} */ className="challengeBox-container" >
            {
                hasActiveChallenge ? (
                    <div className="challengeActive">
                        <header> Ganhe 400xp</header>

                        <main>
                            <img src="icons/bodt.svg" alt=""/>
                            <strong>Novo Desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos</p>
                        </main>

                        <footer>
                            <button type="button"
                            className=""
                            >Falhei
                            </button>
                            <button type="button"
                            className=""
                            >Comple
                            tei</button>
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