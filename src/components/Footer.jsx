function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className='max-w-7xl mx-auto'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center space-x-4">
            <img src="./logo.png"
              alt="Logo Rick and Morty"
              className="h-12" />
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-400">Uriel Martz</p>
            <p className="text-gray-300">Developer</p>
          </div>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="container flex mx-auto text-center md:text-right justify-between">
          <div><span className="text-gray-400">©2024 RickandMorty API</span></div>
          <a href="#"
            className="text-gray-400 hover:underline">
            Aviso de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
