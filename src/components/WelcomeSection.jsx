import Navbar from '../components/Navbar'
import ImgHome from '../assets/home.webp';

const WelcomeSection = () => {
  return (
    <div
      className="sm:h-screen w-auto bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${ImgHome})` }}
    >
      {/* Navbar Component */}
      <Navbar />
      {/* Contenido Principal */}
      <div className="flex flex-col justify-center items-start h-full text-center text-white mx-5 md:ms-20 py-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-black bg-white p-2 rounded-3xl">
          Morty! Boom!
        </h1>
        <div className="flex">
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-black bg-white p-2 rounded-3xl">
            I'm a
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-white bg-black p-2 rounded-3xl">
            website.
          </h1>
        </div>
        <hr className="w-2/5 h-1 mt-4 bg-gray-100 border-0 rounded md:mt-10 dark:bg-zinc-900" />
        <p className="mt-4 max-w-lg bg-zinc-300 text-black p-3 rounded-3xl text-left">
          What do you think about that? I turned myself into a website! W-what are you just staring at me for,
          bro? I turned myself into a website, Morty!
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;

