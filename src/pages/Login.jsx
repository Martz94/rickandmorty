import React from 'react';
import LoginForm from '../components/LoginForm';
import ImgLogin from '../assets/login.webp'

const Login = () => (
  <div className="block md:flex h-screen p-5 lg:p-10 bg-zinc-900 gap-5 justify-center mx-auto">
    {/* Imagen de sesion */}
    <div className=" md:w-1/2 bg-cover bg-center rounded-3xl max-w-xl mx-5 lg:mx-10"
      style={{
        backgroundImage: `url(${ImgLogin})`,
        loading: "lazy",
        alt: "imagen de sesion"
      }}>
    </div>

    {/* Formulario de inicio de sesión */}
    <div className=" mt-20 md:mt-0 md:w-1/2 flex flex-col sm:px-7 lg:px-14 justify-center text-white">
      <LoginForm />
    </div>
  </div>
);

export default Login;


