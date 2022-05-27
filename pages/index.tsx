import { Col, Container, Row } from 'react-bootstrap';
import HeaderPage from '../components/organisms/HeaderPage';
import SideBar from '../components/organisms/SideBar';

export default function Home() {
  return (
    <div>
      <Container fluid>
        <Row className="p-0">
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <HeaderPage />
            <div className="pages-content">
              <h4>Dashboard</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
