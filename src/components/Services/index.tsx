import { ServicesContainer, ServicesContent, ItemContent } from "./style";

export function Services() {
  return (
    <ServicesContainer>
      <img src="/range.svg" alt="" />
      <ServicesContent>
        <ItemContent>
          <div>
            <strong>Barba</strong>
            <p>
              Tradicional técnica de barbear somada a uma relaxante toalha
              quente, óleo pré-shave, espuma de barbear aquecida. Processo
              finalizado com massagem relaxante para ativar a circulação
              utilizando a linha de produtos Barber Shop.
            </p>
            <div>
              <p>Venha conferir!</p>
            </div>
          </div>
          <div>
            <img src="serviceImageOne.svg" alt="" />
          </div>
        </ItemContent>
        <ItemContent reverse>
          <div>
            <img src="serviceImageTwo.svg" alt="" />
          </div>
          <div>
            <strong>Cabelo</strong>
            <p>
              Corte de Cabelo, lavação com Shampoo e Condicionador Barber Shop.
              Finalização com a linha de produtos Barber Shop.
            </p>
            <div>
              <p>Venha conferir!</p>
            </div>
          </div>
        </ItemContent>
        <ItemContent>
          <div>
            <strong>Acabamentos</strong>
            <p>
              Velho e bom “pezinho” ou “pé de cabelo” a navalha como era chamado
              antigamente, contorno do corte apenas feito com navalhete e lamina
              descartável importada.
            </p>
            <div>
              <p>Venha conferir!</p>
            </div>
          </div>
          <div>
            <img src="serviceImageThree.svg" alt="" />
          </div>
        </ItemContent>
      </ServicesContent>
    </ServicesContainer>
  );
}
