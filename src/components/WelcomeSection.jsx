import { Link } from 'react-router-dom';

const WelcomeSection = () => (
  <div className="h-screen w-auto bg-cover bg-center rounded-3xl"
       style={{ backgroundImage: "url('/home.jpg')" }}>
    <div className="flex justify-between h-24">
      <img src="./logo.png"
        alt="Logo"
        className="h-24 bg-zinc-900 py-3 px-12 rounded-br-3xl" />
      <nav className="flex items-center me-auto ms-5">
        <ul className="flex space-x-6 border border-zinc-100 rounded-full px-8 py-3">
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
      <div className="flex items-center bg-zinc-900 py-2 px-10 rounded-bl-3xl">
        <Link to="/"
          className="text-white ms-44 bg-zinc-900 bg-opacity-50 px-8 py-2 border border-zinc-100 hover:bg-white hover:text-black rounded-full"
        >Log Out</Link>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start h-full text-center text-white ms-20">
      <h1 className="text-5xl md:text-8xl text-black bg-white p-2 rounded-3xl">Morty! Boom!</h1>
      <div className="flex">
        <h1 className="text-5xl md:text-8xl text-black bg-white p-2 rounded-3xl">I'm a</h1>
        <h1 className="text-5xl md:text-8xl text-white bg-black p-2 rounded-3xl">website. </h1>
      </div>
      <hr class=" w-2/5 h-1 mt-4 bg-gray-100 border-0 rounded md:mt-10 dark:bg-zinc-900"></hr>
      <p className="mt-4 max-w-lg bg-zinc-300 text-black p-3 rounded-3xl text-left">
        What do you think about that? I turned myself into a website! W-what are you just staring at me for,
        bro? I turned myself into a website, Morty!
      </p>
    </div>
  </div>
);

export default WelcomeSection;

