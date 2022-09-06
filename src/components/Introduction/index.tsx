import { IntroductionContainer } from "./style";

interface IIntroductionProps {
  onclick: () => void;
}

export function Introduction({ onclick }: IIntroductionProps) {
  return (
    <IntroductionContainer>
      <header>
        <img src="/logo.svg" alt="" />
        <div>
          <a href="#services">
            <h4>Serviços</h4>
          </a>
          <a href="#products">
            <h4>Produtos</h4>
          </a>
          <a href="#artists">
            <h4>Profissionais</h4>
          </a>
          <a href="#values">
            <h4>Preços</h4>
          </a>
        </div>
        <a href="#contacts">
          <h4>Contato</h4>
        </a>
        <strong onClick={onclick}>Menu</strong>
      </header>
      <section>
        <p>Desde 2015</p>
        <div>
          <h2>A sua barbearia</h2>
          <h2>Favorita</h2>
        </div>
        <div>
          <p>
            Você quer aparar sua barba, atualizar seu corte de cabelo e com
            estilo?
          </p>
          <span>Este é o lugar certo!</span>
        </div>
        <div>
          <p>Confira!</p>
        </div>
      </section>
    </IntroductionContainer>
  );
}
