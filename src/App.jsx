import './App.css'
import Header from './Header'
import Principal from './Principal'
import Footer from './Footer'


const App = () => {
  return (
    <>
     <Header />
     <Principal contenido="Estoy usando props" />
     <Footer />
    </>
  )
}

export default App