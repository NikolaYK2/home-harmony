import s from './Header.module.scss'
import logo from '@/assets/img/logo/logo.png'
import {Button} from "@/comon/components/Button.tsx";

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

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Button as={'a'} href={''} item={logo}>
          HOME HARMONY
        </Button>
      </div>
      <nav className={s.pages}>
        {navigation.map(page => <ul key={page.id}>
          <li className={s.page}>
            <Button as={'a'} href={''} variant={'link'}>
              {page.name}
            </Button>
          </li>
        </ul>)}
      </nav>
    </header>
  );
};

