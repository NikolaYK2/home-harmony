import s from './Header.module.scss'
import {MenuBurger} from "@/features/1-header/ui/menuBurger/MenuBurger.tsx";
import {useState} from "react";
import {Messenger} from "@/comon/components/messenger/Messenger.tsx";
import {Button} from "@/comon/components/btnPoly/Button.tsx";

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
  const [switchNav, setSwitchNav] = useState(false)

  return (
    <header className={s.header}>

      <div className={s.logo}>
        <Button as={'a'} href={''}>
          HOME HARMONY
        </Button>
      </div>

      <nav className={`${s.nav}`} onClick={() => {setSwitchNav(false)}}>

        <div className={`${s.blockUl} ${switchNav ? s.navActive : ''}`} onClick={(event) => event.stopPropagation()}>
          <ul>
            {navigation.map(page => <li key={page.id}>
                <Button as={'a'} href={''} variant={'link'}>
                  {page.name}
                </Button>
              </li>
            )}
          </ul>

          {switchNav && <Messenger/>}

        </div>
      </nav>

      <MenuBurger switchNav={switchNav} setSwitchNav={setSwitchNav}/>

    </header>
  );
};

