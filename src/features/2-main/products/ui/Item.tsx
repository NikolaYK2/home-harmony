import {Button} from "@/comon/components/btnPoly/Button.tsx";
import {IconSvg} from "@/comon/components/IconSVG/IconSvg.tsx";
import s from './Item.module.scss'
import {itemsThunk, ItemsType} from "@/features/2-main/products/model/itemsReducer.ts";
import {useAppDispatch} from "@/app/lib/hooks.ts";

type Props = {
  items: ItemsType
}
export const Item = ({items}: Props) => {
const dispatch = useAppDispatch();

// const handle =()=>{
//   dispatch(itemsActions.chooseFavoriteProduct({itemId: items.id}))
// }
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={items.img[0]} alt={'img'}/>

        <Button as={'a'} href={''} variant={'link'}>select options</Button>

        <div className={`${s.options} ${items.favorite &&  s.activeOptions}`}
             onClick={()=>dispatch(itemsThunk.chooseFavoriteProductTC(items.id))}>
          <IconSvg name={'like'}/>
        </div>
      </div>

      <div className={s.data}>
        <div>
          <a href={''}>
            {items.title}
          </a>
          <p>
            ${items.price}
          </p>
        </div>
        <span className={s.description}>{items.description}</span>
      </div>
    </div>)
}
