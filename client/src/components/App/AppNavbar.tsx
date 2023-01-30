import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>
            React Express Tinkering
          </Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export { AppNavbar };
