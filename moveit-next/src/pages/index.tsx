import { GetServerSideProps } from 'next';

import ExperienceB from '../components/ExperienceBar';
import Head from 'next/head';
import { Profile } from '../components/Perfil';
import { CompleteChalenges } from '../components/CompleteChalenge';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChalengeBox';
import { CountdownProvider } from '../Contexts/CountDownContext';
import { ChallengesProvider } from '../Contexts/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience:number ,
  challengesCompleted: number 
}

export default function Home(props) {
  return (

    <ChallengesProvider level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
      <div className="container">
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceB />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChalenges />
              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}


export const getSeverSideProps: GetServerSideProps = async (ctx) => {

  const user = {
    level: 1,
    currentExperience: 50,
    ChallengesCompleted: 2
  }

  const { level, currentExperience, ChallengesCompleted } = ctx.req.cookies;

  return {
    props: {

      level: Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted :Number(ChallengesCompleted)

    }
  }
}

