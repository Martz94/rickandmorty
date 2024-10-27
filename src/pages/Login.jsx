import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // función de autenticación de Firebase
import { auth } from '../firebaseConfig'; // configuración de Firebase
import { useNavigate } from 'react-router-dom'; //  hook para la navegación

// Componente Login que maneja el formulario de inicio de sesión
const Login = () => {
  const navigate = useNavigate(); // Hook para redirigir a otras rutas
  const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico ingresado
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña ingresada
  const [error, setError] = useState(''); // Estado para almacenar mensajes de error

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Autentica al usuario con correo y contraseña usando Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario logueado:", userCredential.user);
      navigate("/home"); // Redirige a la página "/home" después de iniciar sesión
    } catch (error) {
      // Mensaje de error si el inicio de sesión es incorrecto
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className="flex h-screen p-10 bg-zinc-900 gap-5 justify-center mx-auto">
      {/* Imagen de sesion*/}
      <div className="w-1/2 bg-cover bg-center rounded-3xl max-w-xl mx-10"
        style={{ backgroundImage: "url('/login.jpg')" }}>
      </div>

      {/* formulario de inicio de sesión */}
      <div className="w-1/2 flex flex-col px-14 justify-center text-white">
        <div>
          <h2 className="text-4xl mb-4 text-left">Log In</h2>
          <p className="mb-10">Por favor ingresa tu nombre de usuario y contraseña</p>
        </div>

        {/* formulario de entrada de usuario*/}
        <div>
          <input
            type="email"
            className="p-3 mb-4 rounded-full w-full bg-zinc-900 text-white border border-zinc-100"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
          />
          <input
            type="password"
            className="p-3 mb-4 rounded-full bg-zinc-900 w-full text-white border border-zinc-100"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
          />
          {error && <p className="text-red-500">{error}</p>} {/* mensaje de error */}
        </div>

        {/* Botón de inicio de sesión */}
        <div className='mt-8'>
          <button
            onClick={handleLogin} // Llama a handleLogin cuando se hace clic en el botón
            className="p-3 bg-white text-black rounded-full w-full">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

