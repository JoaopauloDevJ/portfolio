import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SideBarProfile } from './style'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarProfile>
      <Avatar />
      <Title fontSize={20}>João Paulo</Title>
      <Paragrafo fontSize={16} tipo="secundario">
        JoaopauloDevJ
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Java Jr.
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SideBarProfile>
  </aside>
)

export default Sidebar
