import {Button} from "@/comon/components/btnPoly/Button.tsx";
import s from './Messenger.module.scss'

const messengers =[{name: 'Linkedin', link:''},{name: 'Telegram', link:''},]

type Props={
  className:string
}
export const Messenger = ({className}:Props) => {

  return (
    <div className={s.messengers}>
      {messengers.map(el=><Button key={el.name} as={'a'} className={className} href={el.link} variant={'link'}>{el.name}</Button>)}
    </div>
  );
};
