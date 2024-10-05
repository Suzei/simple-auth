import styles from './styles.module.scss'

function DashboardTemplate({ children }: { children: React.ReactNode }) {
    return (
        <main id={styles.container}>
            {children}
        </main>
    )
}


export default DashboardTemplate