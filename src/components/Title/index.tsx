import { Title as EstiloTitulo } from './styled'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <EstiloTitulo fontSize={props.fontSize}>{props.children}</EstiloTitulo>
)

export default Title
