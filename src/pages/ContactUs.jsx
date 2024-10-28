import Footer from '../components/Footer'
import ImgContact from '../assets/contact.webp'
import Navbar from '../components/Navbar';

const ContactUs = () => (
    <>
      <div className=' p-5'>
        <div className=" h-screen w-auto bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${ImgContact})`, alt: "Descripción", loading: "lazy" }}>
          <Navbar/>
        </div>
      </div>
      <Footer />
    </>
  );

export default ContactUs;