import s from './Header.module.scss'
// import logo from '@/assets/img/logo/logo.png'
import {Button} from "@/comon/components/Button.tsx";
import {MenuBurger} from "@/features/1-header/ui/menuBurger/MenuBurger.tsx";
import {useState} from "react";

type TypeArr = {
  id: string,
  name: string
}
const navigation: TypeArr[] = [
  {id: '1', name: 'ABOUT US'},
  {id: '2', name: 'CONTACTS'},
  {id: '3', name: 'ROOM'},
]
export const Header = () => {

  const [switchNav, setSwitchNav] = useState(true)

  return (
    <header className={s.header}>

      <div className={s.logo}>
        <Button as={'a'} href={''}>
          HOME HARMONY
        </Button>
      </div>

      <nav className={`${s.nav} ${switchNav ? s.navActive : ''}`}>
        <ul>
          {navigation.map(page => <li key={page.id} className={s.page}>
              <Button as={'a'} href={''} variant={'link'}>
                {page.name}
              </Button>
            </li>
          )}
        </ul>
      </nav>

      <MenuBurger switchNav={switchNav} setSwitchNav={setSwitchNav}/>
    </header>
  );
};

