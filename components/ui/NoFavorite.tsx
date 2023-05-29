import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh-100px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>
        <h1>No hay favoritos</h1>
      </Text>
    </Container>
  );
};
