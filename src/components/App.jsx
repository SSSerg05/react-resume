import { Container } from "./App.styled";
import SideBar from "./SideBar/SideBar";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <>
      <Container>
        <SideBar />
        <Main />
      </Container>
      <Footer />
    </>
  );
};

export default App;