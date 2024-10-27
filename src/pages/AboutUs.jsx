import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutUs = () => (
  <>
    <div className=' p-5'>
      <div className="h-screen w-auto bg-cover bg-center rounded-3xl" style={{ backgroundImage: "url('/about.jpg')" }}>
        <div className="flex justify-between h-24">
          <img src="./logo.png" alt="Logo" className="h-24 bg-zinc-900 py-3 px-12 rounded-br-3xl" />
          <nav className="flex items-center me-auto ms-5">
            <ul className="flex space-x-6 border border-zinc-100 rounded-full px-5 py-3">
              <li><Link to="/home"
                className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
                Home</Link></li>
              <li><Link to="/aboutUs"
                className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
                About Us</Link></li>
              <li><Link to="/contactUs"
                className="text-white hover:bg-white hover:text-black rounded-full px-2 py-1">
                Contact Us</Link></li>
            </ul>
          </nav>
          <div className="flex items-center  bg-zinc-900 py-1 px-10 rounded-bl-3xl">
            <button className="text-white bg-zinc-900 bg-opacity-50 px-4 py-2 border border-zinc-100 hover:bg-white hover:text-black rounded-full">
              Log Out</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default AboutUs;