import Footer from '../components/Footer';
import ImgAbout from '../assets/about.webp';
import Navbar from '../components/Navbar';

const AboutUs = () =>  (
    <>
      <div className=' p-5'>
        <div className=" h-screen w-auto bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${ImgAbout})`, alt: "Descripción", loading: "lazy" }}>      
            <Navbar/>
        </div>
      </div>
      <Footer />
    </>
  );

export default AboutUs;