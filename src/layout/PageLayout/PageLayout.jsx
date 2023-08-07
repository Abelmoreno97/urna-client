import { Container } from "@chakra-ui/react";

function PageLayout({ children }) {
  return (
    <Container
      sx={{
        minHeight: "90vh",
        width: "500px",
        padding: "30px",
        backgroundColor: "#2D3748",
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
