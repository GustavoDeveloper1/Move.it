import ExperienceB from '../components/ExperienceBar';
import Head from 'next/head';
import { Profile } from '../components/Perfil';
import { CompleteChalenges } from '../components/CompleteChalenge';
import { CountDown } from '../components/CountDown';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceB />

      <section>
        <div>
          <Profile/>
          <CompleteChalenges/>
          <CountDown/>
        </div>
        
        <div>

        </div>
      </section>
    </div>

  )
}
