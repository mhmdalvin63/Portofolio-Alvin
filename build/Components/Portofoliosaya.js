import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import '../Css/Portofoliosaya.css';
import Tentangsaya from '../Assets/Tentangsaya.png';



const Header = () => {

  return (
    <div className="tentangsaya pop py-5">
        <Container>
            <h1 className='fwb text-center'><span className='text-yellow'>Portofolio</span> Saya</h1>

            <div className='cover mt-5 pop'>
                <div className='framework'>
                    <h5 className='text-purple fwb'>React JS</h5>
                </div>
                <div className='konten-porto text-purple'>
                    <ul>
                        <li className='text-white my-2'>
                            <p className='fwb'>KOMINFO <span className='text-yellow'>( UMKM LEVEL UP )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berupa Dashboard Admin berdasarkan design UI/UX</p></li>
                                <li><p>Mengkonsumsi data API dan menampilkan secara Real Time menggunakan Pusher</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>KOMINFO <span className='text-yellow'>( UMKM BUSSINES ACCELERATOR )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berupa Dashboard Admin berdasarkan design UI/UX</p></li>
                                <li><p>Mengkonsumsi data API dan menampilkan secara Real Time menggunakan Pusher</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>PATRAJASA <span className='text-yellow'>( CALL CENTER DRIVER PERTAMINA )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berupa Dashboard Admin berdasarkan design UI/UX</p></li>
                                <li><p>Mengkonsumsi data API dan menampilkan secara Real Time menggunakan Pusher</p></li>
                                <li><p>Mendeteksi Lokasi Driver & Pembuat Ticket Laporan berdasarkan Lat & Long dan dimunculkan di Dashboard Maps</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='cover mt-5 pop'>
                <div className='framework'>
                    <h5 className='text-purple fwb'>Laravel</h5>
                </div>
                <div className='konten-porto text-purple'>
                    <ul>
                        <li className='text-white my-2'>
                            <p className='fwb'>Qianzy <span className='text-yellow'>( Company Profile )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>PDFI <span className='text-yellow'>( Event Website )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                                <li><p>Menampilkan data Integrasi dari BackEnd</p></li>
                                <li><p>Membuat fitur Search, Filtering, DLL</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>Brosys <span className='text-yellow'>( Company Profile )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>Razadipta <span className='text-yellow'>( Company Profile )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>KEMENDIKBUD <span className='text-yellow'>( Persona UMKM )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                                <li><p>Menampilkan data Integrasi dari BackEnd</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>JDKOI <span className='text-yellow'>( Penjualan Ikan Koi )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                                <li><p>Menampilkan data Integrasi dari BackEnd</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>Elegant Fashion <span className='text-yellow'>( Katalog Website )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                                <li><p>Membuat sistem yang dibutuhkan / BackEnd</p></li>
                                <li><p>Menampilkan data Integrasi dari BackEnd</p></li>
                                <li><p>Membuat fitur Search, Filtering, DLL</p></li>
                            </ul>
                        </li>
                        <li className='text-white my-2'>
                            <p className='fwb'>MPR RI <span className='text-yellow'>( Event Quiz 3 Provinsi )</span></p>
                            <ul>
                                <li><p>Membuat Tampilan pengguna berdasarkan design UI/UX</p></li>
                                <li><p>Mengkonsumsi data API dan menampilkan secara Real Time menggunakan Pusher</p></li>
                                <li><p>Membuat fitur Spinwheel, Timering, Multi Akses device menggunakan Pusher</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Header;
