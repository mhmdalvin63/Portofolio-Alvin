import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import '../Css/Pengalamansaya.css';
import Tentangsaya from '../Assets/Tentangsaya.png';



const Header = () => {

  return (
    <div className="tentangsaya pop py-5">
        <Container>
            <h1 className='fwb text-center'><span className='text-yellow'>Pengalaman</span> Saya</h1>

            <div className='cover mt-5 pop'>
                <div className='tahun'>
                    <h5 className='text-purple fwb'>2022 - 2023</h5>
                </div>
                <div className='konten text-purple'>
                    <div className='judul-konten text-purple'>
                        <h5 className='fwb'>PT Spero Mahakarya</h5>
                        <p>Praktek Kerja Lapangan</p>
                    </div>
                    <hr style={{ border: "1px solid #41065B", width: "100%", margin: ".35rem" }} />
                    <ul>
                        <li><p>Menjadi Fullstack Developer menggunakan Framework Laravel</p></li>
                        <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX
                        </p></li>
                        <li><p>Mengatur output data yang akan dilihat oleh pengguna</p></li>
                        <li><p>Mengolah data, seperti Filtering, Searching, DLL</p></li>
                        <li><p>Membuat CRUD sederhana</p></li>
                    </ul>
                </div>

                
            </div>
            <div className='cover mt-5 pop'>
                <div className='tahun'>
                    <h5 className='text-purple fwb'>2023 - 2024</h5>
                </div>
                <div className='konten text-purple'>
                    <div className='judul-konten text-purple'>
                        <h5 className='fwb'>PT Spero Mahakarya</h5>
                        <p>Frontend Developer</p>
                    </div>
                    <hr style={{ border: "1px solid #41065B", width: "100%", margin: ".35rem" }} />
                    <ul>
                        <li><p>Fokus sebagai Frontend Developer dengan Framework Laravel & React JS</p></li>
                        <li><p>Mengatur output API untuk Tampilan pengguna</p></li>
                        <li><p>Mengolah data API, seperti Filtering, Searching, DLL</p></li>
                        <li><p>Membuat Output data Realtime menggunakan PUSHER</p></li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Header;
