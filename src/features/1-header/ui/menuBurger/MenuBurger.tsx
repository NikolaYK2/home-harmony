import s from './MenuBurger.module.scss'

export const MenuBurger = () => {
  return (
    <div className={s.containerBurger}>
      <div className={s.decor}></div>
      <div className={s.decor}></div>
    </div>
  );
};
