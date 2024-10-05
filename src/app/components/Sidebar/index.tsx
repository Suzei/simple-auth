import Image from 'next/image'
import styles from './styles.module.scss'
import logoAlt from '../../assets/logo-alt.svg'
import { SideBarOptions } from '@/app/(routes)/dashboard/page'
import Link from 'next/link'

interface SideBarProps {
    sideBarOptions: SideBarOptions[]
}

export function Sidebar({ sideBarOptions }: SideBarProps) {
    return (
        <aside className={styles.sidebar}>
            <header>
                <Image height={60} width={170} src={logoAlt} alt="Logo alternativa, branca, com animal ao lado" />
            </header>
            <hr />
            <nav>
                {sideBarOptions?.map(item => (
                    <Link key={item.key} href={`dashboard/${item.key}`}>
                        <button
                            disabled={item.isAuthorized}
                            type="button"
                            onClick={item.onClick}>
                            {item.icon}
                            {item.title}

                        </button>
                    </Link>
                ))}
            </nav>
        </aside >
    )
}