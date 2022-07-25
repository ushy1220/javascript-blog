/* 
Stwórz nowy komponent Column, który będzie renderował <article> z nagłówkiem o treści podanej w parametrze title.

Element <article> w komponencie powinien korzystać z klasy .column, a nagłówek z klasy .title

Gdy komponent będzie już gotowy, skorzystaj z niego trzy razy w komponencie List. Za każdym razem podawaj jako parametr title inną wartość. Tak, aby za pierwszym razem komponent wyrenderował nagłówek Books, za drugim Movies, a za trzecim Games.

Pamiętaj, że komponent to tylko funkcja. Możemy więc wywoływać ją tyle razy, ile chcemy i za każdym razem możemy robić to z inną wartością argumentu.

Stąd też możemy komponent Column wykorzystać aż trzy razy i po prostu za każdym razem ustalać inną wartość parametru title.

<section className={styles.columns}>
    <Column title="Books" />
    <Column title="Movies" />
    <Column title="Games" />
</section>
 */

import styles from './Column.module.scss';

const Column = props => {
    return (
            <article className={styles.Column}>
               <h2 className={styles.title}>
                <span className={styles.icon + 'fa fa-' + props.icon} /> {props.title}
                </h2>
            </article>
    )
}

export default Column;