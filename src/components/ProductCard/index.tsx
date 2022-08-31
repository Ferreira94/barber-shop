import { ProductCardContainer } from "./style";

interface IProductCardProps {
  name: string;
  value: number;
  image: string;
}

export function ProductCard({ image, name, value }: IProductCardProps) {
  return (
    <ProductCardContainer>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <span>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </ProductCardContainer>
  );
}
