/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import style from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={style.container}>
        <img src="/images/logo.svg" alt="spacetraveling" />
      </div>
    </header>
  );
}
