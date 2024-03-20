import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Project from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import themeLight from './Theme/light'
import themeDark from './Theme/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(true)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Project />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
