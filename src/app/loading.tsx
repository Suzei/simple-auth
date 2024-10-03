import Image from "next/image";
import loading from './assets/loading.webp'

export default function Loading() {
    return (
        <div className="centralize-column">
            <Image src={loading} width={30} alt="Indicativo de carregamento" unoptimized />
        </div>
    )
}