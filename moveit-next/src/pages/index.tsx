import ExperienceB from '../components/ExperienceBar';
import Head from 'next/head';
import { Profile } from '../components/Perfil';


export default function Home() {
  return (
    <div className="container">
      <ExperienceB />

      <section>
        <div>
          <Profile/>
        </div>
        
        <div>

        </div>
      </section>
    </div>

  )
}
