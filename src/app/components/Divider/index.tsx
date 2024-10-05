import styles from './styles.module.scss'

export function Divider({ text }: { text?: string }) {
    return (
        <div className={styles.divider}>
            <hr />
            <span>{text}</span>
            <hr />
        </div>
    )
}