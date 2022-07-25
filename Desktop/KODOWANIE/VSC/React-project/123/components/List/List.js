import Column from "../Column/Column";
import styles from "../Column/Column.module.scss";

const List = () => {
    return (
        <div className="list">
            <header className="header">Things to do<span>soon</span></header>
            <p className="description">Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column title="Books" />
                <Column title="Movies" />
                <Column title="Games" />
            </section>

        </div>
    )
} 

export default List;