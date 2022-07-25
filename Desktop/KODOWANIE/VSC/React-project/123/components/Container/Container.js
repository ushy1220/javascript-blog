/* Stwórz komponent Container, który powinien renderować diva z jedną klasą, która będzie musiała być odpowiednio ostylowana (max-width: 1200px, margin: 20px auto).

Treść tego diva powinna być “dynamiczna”, a więc, zależna od parametru. Tym parametrem będzie children. */

import styles from './Container.module.scss';

const Container = props => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Container;