import { Col, Container, Row } from 'react-bootstrap';
import Charts from '../components/atoms/Chart';
import SideBar from '../components/organisms/SideBar';

export default function Mahasiswa() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col>
            <Charts chartType="bar" />
            <Charts chartType="line" />
            <Charts chartType="pie" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
