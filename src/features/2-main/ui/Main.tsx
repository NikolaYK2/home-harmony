import {useAppSelector} from "@/app/lib/hooks.ts";
import {itemsSelect} from "@/features/2-main/model/mainSelectors.ts";
import s from './Main.module.scss'
export const Main = () => {

  const items = useAppSelector(itemsSelect)

  return (
    <div className={'appContainer'}>

        <section className={s.blockItem}>
          {items.map(el => <div key={el.id} className={s.item}>
            {el.category}
            {el.img}
            {el.title}
            {el.Description}
            {el.price}
          </div>)}
        </section>

        <aside>11</aside>

    </div>
  );
}
