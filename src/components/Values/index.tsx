import { Check, X } from "phosphor-react";
import { CardContainer, ValuesContainer, SkeletonCard } from "./style";
import { useEffect, useState } from "react";

export function Values() {
  const [isHair, setIsHair] = useState(true);
  const [isBeard, setIsBeard] = useState(false);
  const [isEyebrow, setIsEyebrow] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);

    if (isHair) {
      setValue(30);
    }

    if (isBeard) {
      setValue((state) => state + 25);
    }

    if (isEyebrow) {
      setValue((state) => state + 15);
    }

    return;
  }, [isHair, isBeard, isEyebrow]);

  return (
    <ValuesContainer>
      <h2>Nossos Preços</h2>
      <p>
        Além de excelentes serviços e um atendimento diferenciado, <br />
        temos excelente preços
      </p>
      <div>
        <SkeletonCard>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </SkeletonCard>
        <CardContainer>
          <h2>Cabelo e Barba</h2>
          <p>Escolha os serviços que você precisa e veja o valor</p>
          {value > 0 ? (
            <span>
              {value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          ) : (
            <p>Nenhum serviço selecionado</p>
          )}
          <strong>Serviços de qualidade</strong>
          <div onClick={() => setIsHair(!isHair)}>
            {isHair ? <Check /> : <X />}
            <p>Cabelo</p>
          </div>
          <div onClick={() => setIsBeard(!isBeard)}>
            {isBeard ? <Check /> : <X />}
            <p>Barba</p>
          </div>
          <div onClick={() => setIsEyebrow(!isEyebrow)}>
            {isEyebrow ? <Check /> : <X />}
            <p>Sobrancelha</p>
          </div>
        </CardContainer>
        <SkeletonCard>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </SkeletonCard>
      </div>
    </ValuesContainer>
  );
}
