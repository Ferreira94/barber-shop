import {
  ProductsContainer,
  CardsContainer,
  CardContainer,
  DotsContainer,
  Dot,
} from "./style";
import { products } from "../../utils/index";
import { ProductCard } from "../ProductCard";
import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Products() {
  const [isActiveSlide, setIsActiveSlide] = useState(0);

  return (
    <ProductsContainer>
      <header>
        <h2>Nossos Produtos</h2>
        <strong>Veja Todos</strong>
      </header>

      <CardsContainer>
        {products.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            image={item.image}
            value={item.value}
          />
        ))}
      </CardsContainer>

      <CardContainer>
        <div>
          <CaretLeft
            onClick={
              isActiveSlide === 0
                ? () => setIsActiveSlide(2)
                : () => setIsActiveSlide(isActiveSlide - 1)
            }
          />
          <ProductCard
            name={products[isActiveSlide].name}
            image={products[isActiveSlide].image}
            value={products[isActiveSlide].value}
          />
          <CaretRight
            onClick={
              isActiveSlide === 2
                ? () => setIsActiveSlide(0)
                : () => setIsActiveSlide(isActiveSlide + 1)
            }
          />
        </div>
        <DotsContainer>
          <Dot
            isActive={isActiveSlide === 0}
            onClick={() => setIsActiveSlide(0)}
          />
          <Dot
            isActive={isActiveSlide === 1}
            onClick={() => setIsActiveSlide(1)}
          />
          <Dot
            isActive={isActiveSlide === 2}
            onClick={() => setIsActiveSlide(2)}
          />
        </DotsContainer>
        <strong>Veja Todos</strong>
      </CardContainer>
    </ProductsContainer>
  );
}
