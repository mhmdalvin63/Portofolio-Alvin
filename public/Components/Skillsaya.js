import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import '../Css/Skillsaya.css';
import Skillsaya from '../Assets/Skillsaya.png';



const Header = () => {

  return (
    <div className="skillsaya">
        <Container>
            <Row className='align-items-center justify-content-lg-between justify-content-center'>
                <Col xs={4} className='text-end d-lg-none d-block'>
                    <img className='Skillsayaimg' src={Skillsaya} alt="Skillsaya" />
                </Col>
                <Col lg={6} xs={12} className='mt-lg-0 mt-5'>
                    <h1 className='pop fwb text-lg-start text-center'><span className='text-yellow '>
                    Skill</span> Saya</h1>

                    <div className='list-skill mt-5 justify-content-lg-start justify-content-center gap-3'>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>HTML</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>CSS</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>Javascript</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>Laravel</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>React JS</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>API</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>Pusher</h5>
                            </div>
                        </div>
                        <div xs={3} className='my-2'>
                            <div className='button-skill'>
                                <h5 className='text-purple'>Bootstrap</h5>
                            </div>
                        </div>
                    </div>

                </Col>
                <Col xs={5} className='text-end d-lg-block d-none'>
                    <img className='Skillsayaimg' src={Skillsaya} alt="Skillsaya" />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Header;
