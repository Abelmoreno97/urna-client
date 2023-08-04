import { Container } from "@chakra-ui/react";

function PageLayout({ children }) {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: "30px",
        backgroundColor: "darkslategray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Container>
  );
}

export default PageLayout;
