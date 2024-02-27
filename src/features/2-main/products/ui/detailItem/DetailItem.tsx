import {H2} from "@/comon/components/H2/H2.tsx";
import {useParams} from "react-router-dom";
import {useAppSelector} from "@/app/lib/hooks.ts";
import {itemSelectAutomatized} from "@/features/2-main/products/model/itemsSelectors.ts";
import s from './DetailItem.module.scss'

export const DetailItem = () => {

  const {id} = useParams<'id'>()

  if (id === undefined) return <div>Error: not products</div>

  const item = useAppSelector((state) => itemSelectAutomatized(state, +id))

  return (
    <div className={'appContainer'}>

      <div className={s.item}>

        <div className={s.images}>
          <div className={s.s1}>
            {item?.img.slice(0, -1).map((img) =>
              <div className={s.img}>
                <img src={img} alt="img"/>
              </div>)}
          </div>

          <div className={s.s}>
            <img src={item?.img[0]} alt="img"/>
          </div>
        </div>

        <div>
          <H2 title={item?.title}/>
        </div>
      </div>

      <div></div>
    </div>
  );
};
