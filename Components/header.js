import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import '../Css/header.css';
import headerImg from '../Assets/img-header.png';



const Header = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Assets/CV_MUHAMMAD_ALVIN_NEW.pdf'; // Ganti dengan path ke file PDF yang ingin didownload
        link.setAttribute('download', 'CV_MUHAMMAD_ALVIN.pdf'); // Nama file yang akan di-download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className="header">
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col lg={8} xs={12}>
                    <h5 className='fwb text-lg-start text-center'>Halo, Perkenalkan Saya,</h5>
                    <h1 className='fwb text-yellow my-2'>MUHAMMAD ALVIN</h1>
                    <h5 className='fwb text-lg-start text-center'>Junior Frontend Developer</h5>
                    <div className='text-lg-start text-center'>
                        <button onClick={handleDownload} className='button-cv bg-yellow my-3'>
                            <p className='fwb pop text-purple'>Download CV</p>
                        </button>
                    </div>
                    <div className='info d-lg-flex d-block text-lg-start text-center my-3'>
                        <div className='icon mx-lg-0 mx-auto my-lg-0 my-3'>
                            <FontAwesomeIcon icon={faWhatsapp} size='x'/>
                        </div>
                        <h5>0888-1404-833</h5>
                    </div>
                    <div className='info d-lg-flex d-block text-lg-start text-center my-3'>
                        <div className='icon mx-lg-0 mx-auto my-lg-0 my-3'>
                            <FontAwesomeIcon icon={faGithub} size='x'/>
                        </div>
                        <h5>mhmdalvin63</h5>
                    </div>
                    <div className='info d-lg-flex d-block text-lg-start text-center my-3'>
                        <div className='icon mx-lg-0 mx-auto my-lg-0 my-3'>
                            <FontAwesomeIcon icon={faEnvelope} size='sm'/>
                        </div>
                        <h5>alvinwork635@gmail.com</h5>
                    </div>
                    <div className='info d-lg-flex d-block text-lg-start text-center my-3'>
                        <div className='icon mx-lg-0 mx-auto my-lg-0 my-3'>
                            <FontAwesomeIcon icon={faHouse} size='sm'/>
                        </div>
                        <h5>Depok, Jawa Barat</h5>
                    </div>  
                </Col>

                <Col lg={4} xs={0} className='text-center d-lg-block d-none'>
                    <img className='headerImg' src={headerImg} alt="headerImg" />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
