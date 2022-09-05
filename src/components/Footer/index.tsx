import { FooterContainer, FooterContent } from "./style";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <div>
            <img src="/logo.svg" />
          </div>
          <span>
            Aqui na Barber Shop nosso principal objectivo é deixar nossos
            clientes satisfeitos.
          </span>
        </div>
        <div>
          <strong>Navegar</strong>
          <p>Ínicio</p>
          <p>Serviços</p>
          <p>Produtos</p>
          <p>Profissionais</p>
          <p>Preços</p>
          <p>Contatos</p>
        </div>
        <div>
          <strong>Siga-nos</strong>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </FooterContent>
      <p>© 2022 4sTech</p>
    </FooterContainer>
  );
}
