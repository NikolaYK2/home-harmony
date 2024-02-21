import s from './MenuBurger.module.scss'
import {useEffect} from "react";


type Props={
  switchNav: boolean;
  setSwitchNav: (value:boolean)=>void;
}
export const MenuBurger = ({switchNav, setSwitchNav}:Props) => {


  const burgerHandle = () => {
    setSwitchNav(!switchNav)
  }

  useEffect(() => {
    if (switchNav) {
      document.body.style.overflow = "unset"
    } else {
      document.body.style.overflow = "hidden"
    }
  }, [switchNav])


  return (
    <div className={`${s.containerBurger} ${switchNav && s.changeBurger}`} onClick={burgerHandle}>
      <div className={`${s.menuBirger}`}>
        <div className={s.decor}></div>
        <div className={s.decor}></div>
      </div>
    </div>
  );
};
