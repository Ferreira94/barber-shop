import { X } from "phosphor-react";
import { useState } from "react";

import {
  About,
  Artists,
  Footer,
  Introduction,
  Products,
  Services,
  Values,
  Contact,
} from "../../components";

import { HomeContainer, MenuMobile } from "./style";

export function Home() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      {!isMenuActive ? (
        <HomeContainer>
          <Introduction onclick={() => setIsMenuActive(true)} />
          <Services />
          <Products />
          <About />
          <Artists />
          <Values />
          <Contact />
          <Footer />
        </HomeContainer>
      ) : (
        <MenuMobile>
          <img src="/logo.svg" alt="" />
          <X onClick={() => setIsMenuActive(false)} />
          <a href="#services" onClick={() => setIsMenuActive(false)}>
            <h4>Serviços</h4>
          </a>
          <a href="#products" onClick={() => setIsMenuActive(false)}>
            <h4>Produtos</h4>
          </a>
          <a href="#artists" onClick={() => setIsMenuActive(false)}>
            <h4>Profissionais</h4>
          </a>
          <a href="#values" onClick={() => setIsMenuActive(false)}>
            <h4>Preços</h4>
          </a>

          <a href="#contacts" onClick={() => setIsMenuActive(false)}>
            <div>
              <h4>Contato</h4>
            </div>
          </a>
        </MenuMobile>
      )}
    </>
  );
}
