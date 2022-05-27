import { Col, Container, Row } from 'react-bootstrap';
import Charts from '../components/atoms/Chart';
import HeaderPage from '../components/organisms/HeaderPage';
import SideBar from '../components/organisms/SideBar';

export default function Mahasiswa() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <HeaderPage />
            <div className="pages-content">
              <h4>Data Mahasiswa</h4>
              <Charts chartType="bar" />
              <Charts chartType="line" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
