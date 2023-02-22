import { Container } from './Container.style';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <div>Layout</div>
      <Footer />
    </Container>
  );
};
