import {Button} from "@/comon/components/btnPoly/Button.tsx";
import {IconSvg} from "@/comon/components/IconSVG/IconSvg.tsx";
import s from './Item.module.scss'
import {ItemsType} from "@/features/2-main/products/model/itemsReducer.ts";

type Props = {
  items: ItemsType
}
export const Item = ({items}: Props) => {

  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={items.img[0]} alt={'img'}/>

        <Button as={'a'} href={''} variant={'link'}>select options</Button>

        <div className={s.options}>
          <IconSvg name={'like'}/>
        </div>
      </div>

      <div className={s.data}>
        <div>
          <h2>
            {items.title}
          </h2>
          <p>
            ${items.price}
          </p>
        </div>
        <span className={s.description}>{items.description}</span>
      </div>
    </div>)
}
