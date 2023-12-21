import {Header} from "@/features/1-header/ui/Header.tsx";
import {Footer} from "@/features/footer/Footer.tsx";
import s from './App.module.scss'
function App() {
  return (
    <div className={s.container}>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
