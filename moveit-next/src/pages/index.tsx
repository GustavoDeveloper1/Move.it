import ExperienceB from '../components/ExperienceBar';
import Head from 'next/head';
import { Profile } from '../components/Perfil';
import { CompleteChalenges } from '../components/CompleteChalenge';


export default function Home() {
  return (
    <div className="container">
      <ExperienceB />

      <section>
        <div>
          <Profile/>
          <CompleteChalenges/>
        </div>
        
        <div>

        </div>
      </section>
    </div>

  )
}
