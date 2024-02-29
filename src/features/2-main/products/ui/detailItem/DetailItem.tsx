import {H2} from "@/comon/components/H2/H2.tsx";
import {useParams} from "react-router-dom";
import {itemSelectAutomatized} from "@/features/2-main/products/model/itemsSelectors.ts";
import {useAppSelector} from "@/app/lib/hooks.ts";
import s from './DetailItem.module.scss'
import {Button} from "@/comon/components/btnPoly/Button.tsx";

export const DetailItem = () => {

  const {id} = useParams<'id'>()

  const item = useAppSelector((state) => itemSelectAutomatized(state, Number(id)))


  return (
    <div className={'appContainer'}>

      <div className={s.item}>

        <div className={s.images}>
          <div>
            {item?.img.slice(1).map((img) =>
              <div key={img} className={s.img}>
                <img src={img} alt="img"/>
              </div>)}
          </div>

          <div>
            <img src={item?.img[0]} alt="img"/>
          </div>
        </div>

        <div className={s.describe}>
          <H2 title={item?.title} variantSize={'large'}/>
          <p>${item?.price}</p>
          <p>{item?.description}</p>
          <Button variant={"primary"}>buy</Button>
        </div>
      </div>

      <div></div>
    </div>
  );
};
