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
      <div className={s.containerHeader}>

        <Button as={'a'} className={s.logo}>
          HOME HARMONY
        </Button>

        <nav className={`${s.nav} ${switchNav && s.navActive}`} onClick={() => {
          setSwitchNav(false)
        }}>

          <div className={`${s.items} ${switchNav && s.itemsActive}`} onClick={(event) => event.stopPropagation()}>
            <ul>
              {navigation.map(page => <li key={page.id}>
                  <Button as={'a'} href={''} variant={'link'}>
                    {page.name}
                  </Button>
                </li>
              )}
            </ul>

            <Messenger className={s.messengers}/>

          </div>
        </nav>

        <MenuBurger switchNav={switchNav} setSwitchNav={setSwitchNav}/>

      </div>
    </header>
  );
};

