import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/organisms/SideBar';

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col>
            <h1>Homepage</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
