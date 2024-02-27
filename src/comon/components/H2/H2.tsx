import s from './H2.module.scss'

type Props = {
  title: string | undefined
}
export const H2 = ({title}: Props) => {
  return (
    <div className={s.containH2}>
      <h2>{title}</h2>
    </div>
  );
};

