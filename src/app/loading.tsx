import Image from "next/image";
import loading from './assets/loading.gif'

export default function Loading() {
    return (
        <div className="centralize-column">
            <Image src={loading} alt="Indicativo de carregamento" unoptimized />
            Carregando...
        </div>
    )
}