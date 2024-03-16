import { RButton } from "@components/button";
import { RContainer } from "@components/container";
import { RInput } from "@components/input";

export function SignIn() {
    return (
        <RContainer>
            <RInput placeholder="Digite seu email" value=""/>
            <RInput placeholder="Digite sua senha" value="" secureTextEntry/>
            <RButton value="Entrar"/>
        </RContainer>
    )
}