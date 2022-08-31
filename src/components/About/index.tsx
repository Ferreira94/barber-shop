import { Quotes } from "phosphor-react";
import { AboutContainer } from "./style";

export function About() {
  return (
    <AboutContainer>
      <div>
        <h2>
          O nosso objetivo é que você saia da barbearia com uma nova imagem de
          si <strong>mesmo</strong>.
        </h2>
        <p>João da Silva Neto</p>
        <span>Gerente Geral</span>
      </div>
      <div>
        <p>
          Uma barba limpa, um bigode cinzelado, um corte personalizado, cuidados
          direcionados, asseio, é a arte de cuidar de si mesmo. Conosco, você
          chega com ou sem uma ideia precisa do seu visual futuro…
        </p>
      </div>
    </AboutContainer>
  );
}
