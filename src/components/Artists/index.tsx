import { ArtistsContainer, ImagesContainer, ImageContainer } from "./style";

export function Artists() {
  return (
    <ArtistsContainer>
      <h2>Nossos Artistas</h2>
      <p>
        Nossos profissionais são extremamente experientes e se esforçam ao
        máximo para agradar os clientes venha conhecer nossa equipe e não irá se
        arrepender.
      </p>
      <strong>Conheça</strong>

      <ImagesContainer>
        <img src="/leftArtist.svg" alt="" />
        <div>
          <ImageContainer>
            <div>
              <img src="/artistOne.svg" alt="" />
              <div>
                <p>
                  <span>João</span> Da Silva
                </p>
                <p>Cabelo | Barba | Sombrancelha</p>
              </div>
            </div>
            <div>
              <img src="/artistTwo.svg" alt="" />
              <div>
                <p>
                  <span>Juliana</span> Hartz
                </p>
                <p>Cabelo | Sombrancelha</p>
              </div>
            </div>
          </ImageContainer>
          <ImageContainer>
            <div>
              <img src="/artistThree.svg" alt="" />
              <div>
                <p>
                  <span>Paulo</span> Garcia
                </p>
                <p>Cabelo | Barba</p>
              </div>
            </div>
            <div>
              <img src="/artistFour.svg" alt="" />
              <div>
                <p>
                  <span>Jonathan</span> Rocha
                </p>
                <p>Cabelo | Sombrancelha</p>
              </div>
            </div>
          </ImageContainer>
        </div>
        <img src="/rightArtist.svg" alt="" />
      </ImagesContainer>
    </ArtistsContainer>
  );
}
