import {Header} from "@/features/1-header/ui/Header.tsx";
import {Footer} from "@/features/footer/Footer.tsx";
import s from './App.module.scss'
import {Main} from "@/features/2-main/ui/Main.tsx";
function App() {
  return (
    <div className={s.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
