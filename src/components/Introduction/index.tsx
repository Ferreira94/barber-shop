import { IntroductionContainer } from "./style";

export function Introduction() {
  return (
    <IntroductionContainer>
      <header>
        <img src="/logo.svg" alt="" />
        <div>
          <h4>Ínicio</h4>
          <h4>Serviços</h4>
          <h4>Produtos</h4>
          <h4>Profissionais</h4>
        </div>
        <h4>Contato</h4>
        <strong>Menu</strong>
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
