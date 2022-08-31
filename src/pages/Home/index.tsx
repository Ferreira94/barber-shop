import {
  About,
  Artists,
  Introduction,
  Products,
  Services,
} from "../../components";

import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />

      <Services />

      <Products />

      <About />

      <Artists />
    </HomeContainer>
  );
}
