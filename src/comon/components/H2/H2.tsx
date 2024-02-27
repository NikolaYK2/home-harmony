import s from './H2.module.scss'

type Props = {
  title: string | undefined,
  variantSize?: 'large' | 'medium'
}
export const H2 = ({title, variantSize = 'medium'}: Props) => {

  return (
    <div className={s.containH2}>
      <h2 className={`${s[variantSize]}`}>{title}</h2>
    </div>
  );
};

