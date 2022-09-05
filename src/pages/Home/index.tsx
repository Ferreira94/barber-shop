import {
  About,
  Artists,
  Introduction,
  Products,
  Services,
  Values,
} from "../../components";

import { HomeContainer } from "./style";
import { Contact } from "../../components/Contact/index";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />

      <Services />

      <Products />

      <About />

      <Artists />

      <Values />

      <Contact />
    </HomeContainer>
  );
}
