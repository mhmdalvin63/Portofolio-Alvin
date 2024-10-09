import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Css/Tentangsaya.css';
import Tentangsaya from '../Assets/Tentangsaya.png';



const Header = () => {

  return (
    <div className="tentangsaya">
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col lg={6} xs={6} className='text-center'>
                    <img className='TentangsayaImg' src={Tentangsaya} alt="Tentangsaya" />
                </Col>
                <Col lg={6} xs={12} className='mt-lg-0 mt-5'>
                    <h1 className='fwb text-yellow text-lg-start text-center'>
                        Tentang <span className='text-white'>Saya</span>
                    </h1>
                    <h5 className='mt-5 text-lg-start text-center'>
                    <span className='text-yellow'>Junior Frontend Developer</span> dengan lebih dari 1 tahun pengalaman di bidang <span className='text-yellow'>Pemrograman Website</span>. Menguasai website framework seperti <span className='text-yellow'>Laravel & React JS</span>. Memiliki portofolio yang mencakup berbagai proyek website. Berorientasi pada Tampilan pengguna & Pengalaman antarmuka.
                    </h5>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
