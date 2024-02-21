import {Button} from "@/comon/components/btnPoly/Button.tsx";
import s from './Messenger.module.scss'

export const Messenger = () => {

  const messengers =[{name: 'Linkedin', link:''},{name: 'Telegram', link:''},]
  return (
    <div className={s.messengers}>
      {messengers.map(el=><Button as={'a'} href={el.link} variant={'link'}>{el.name}</Button>)}
    </div>
  );
};
