import { UpperContainer, LowerContainer, Card } from "./style";
import { OuterContainer, Container } from "../style";

const Attests = () => {
  return (
    <OuterContainer>
      <Container>
        <UpperContainer>
          <h2>Depoimentos</h2>
          <p>Lorem ipsum dolor sit emet</p>
        </UpperContainer>

        <LowerContainer>
          <Card>
            <img src={"https://picsum.photos/200"} alt={""} />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </Card>

          <Card>
            <img src={"https://picsum.photos/200"} alt={""} />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </Card>

          <Card>
            <img src={"https://picsum.photos/200"} alt={""} />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </Card>
        </LowerContainer>
      </Container>
    </OuterContainer>
  );
};

export default Attests;
