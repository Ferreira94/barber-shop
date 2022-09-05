import {
  Envelope,
  FacebookLogo,
  House,
  InstagramLogo,
  Phone,
} from "phosphor-react";
import {
  ContactContainer,
  ContactContent,
  ContactInfos,
  LogosContainer,
} from "./style";

export function Contact() {
  return (
    <ContactContainer>
      <img src="/razorContact.svg" alt="" />
      <ContactContent>
        <img src="/contactImage.svg" alt="" />
        <ContactInfos>
          <div>
            <strong>Endereço:</strong>
            <div>
              <House />
              <p>Rua Julho de Castilhos, nº 2487</p>
            </div>
          </div>
          <div>
            <strong>Telefone/WhatsApp:</strong>
            <div>
              <Phone />
              <p>53 98400-0000</p>
            </div>
          </div>
          <div>
            <strong>E-mail:</strong>
            <div>
              <Envelope />
              <p>barber-shop@email.com</p>
            </div>
          </div>
          <div>
            <strong>Redes Sociais:</strong>
            <LogosContainer>
              <FacebookLogo />
              <InstagramLogo />
            </LogosContainer>
          </div>
        </ContactInfos>
      </ContactContent>
    </ContactContainer>
  );
}
