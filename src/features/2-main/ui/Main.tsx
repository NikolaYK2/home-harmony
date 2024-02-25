import {useAppSelector} from "@/app/lib/hooks.ts";
import {itemsSelect} from "@/features/2-main/model/mainSelectors.ts";
import s from './Main.module.scss'

export const Main = () => {

  const items = useAppSelector(itemsSelect)

  return (
    <main className={`appContainer`}>

      <section className={s.blockItem}>
        {items.map(el => <div key={el.id} className={s.item}>
          <div className={s.img}>
            <img src={el.img[0]} alt={'chair'}/>
          </div>

          <div className={s.data}>
            <div>
              <h2>
                {el.title}
              </h2>
              <p>
                ${el.price}
              </p>
            </div>
            <span className={s.description}>{el.description}</span>
          </div>
        </div>)}
      </section>

      <aside>11</aside>

    </main>
  );
}
