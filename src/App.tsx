import Project from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Project />
        </main>
      </Container>
    </>
  )
}

export default App
