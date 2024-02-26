import {useAppSelector} from "@/app/lib/hooks.ts";

import s from './Main.module.scss'
import {itemsSelect} from "@/features/2-main/products/model/itemsSelectors.ts";
import {Item} from "@/features/2-main/products/ui/Item.tsx";

export const Main = () => {

  const items = useAppSelector(itemsSelect)

  return (
    <main className={`appContainer`}>

      <section className={s.blockItem}>
        {items.map(el => <Item key={el.id} items={el}/>)}
      </section>

      <aside>11</aside>

    </main>
  );
}
