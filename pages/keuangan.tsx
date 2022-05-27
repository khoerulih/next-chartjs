import { Col, Container, Row } from 'react-bootstrap';
import Charts from '../components/atoms/Chart';
import HeaderPage from '../components/organisms/HeaderPage';
import SideBar from '../components/organisms/SideBar';

export default function Keuangan() {
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
              <h4>Data Keuangan</h4>
              <Charts chartType="line" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
