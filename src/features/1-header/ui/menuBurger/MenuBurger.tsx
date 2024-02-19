import s from './MenuBurger.module.scss'
import {useEffect, useState} from "react";


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
      // setModNav(s.navOff)
      // setModBurger(s.menuBurger)
      document.body.style.overflow = "unset"
    } else {
      // setModNav(s.activeNav)
      // setModBurger(s.activeBurger)
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
