import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Projetos = () => (
  <Card>
    <Title>Lista de Projetos</Title>
    <Paragrafo tipo="secundario">Lista de projetos feito com vueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projetos
