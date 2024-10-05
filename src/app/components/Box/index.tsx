import styles from "./styles.module.scss";
import { AuthType } from "@/app/types/AuthType";
import { LoginText } from "@/app/utils/LoginDinamicText";

interface BoxType {
    boxType: "default" | "form";
    children: React.ReactNode;
    authOption: AuthType;
}

export function Box({ boxType = "default", children, authOption }: BoxType) {
    const LoginTextDynamic = LoginText(authOption);
    return (
        <div className={styles.box}>
            {boxType === "form" ? (
                <>
                    <header>
                        <h2>{LoginTextDynamic?.title}</h2>
                        <span>{LoginTextDynamic?.text}</span>
                    </header>

                    {children}
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </div>
    );
}
