import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSessao } from './styled'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus
      mollitia ipsa voluptatum, vel, adipisci ullam porro sit cum fugit quaerat
      reiciendis. Sapiente architecto a dolore doloribus eaque maiores?
      Repudiandae?
    </Paragrafo>
    <GitHubSessao>
      <img src="https://github-readme-stats.vercel.app/api?username=JoaopauloDevJ&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoaopauloDevJ&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSessao>
  </section>
)

export default Sobre
