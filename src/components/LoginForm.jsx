import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // Hook para navegación a la página de inicio tras inicio de sesión exitoso
  const navigate = useNavigate();
  // Inicializamos react-hook-form para el manejo de formularios y validación
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Estado para manejar errores de inicio de sesión
  const [error, setError] = useState('');
  // Función asíncrona para manejar el inicio de sesión cuando el formulario se envía
  const onSubmit = async (data) => {
    const { email, password } = data;// Extrae el email y la contraseña del formulario
    try {
      // Inicia sesión con Firebase usando el email y la contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario logueado:", userCredential.user);
      navigate("/home"); // Navega a la página de inicio si el inicio de sesión es exitoso
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <>
      <div>
        <h2 className="text-4xl mb-4 text-left">Log In</h2>
        <p className="mb-10">Por favor ingresa tu nombre de usuario y contraseña</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            className="p-3 mb-4 rounded-full w-full bg-zinc-900 text-white border border-zinc-100"
            placeholder="Usuario"
            {...register('email', { required: 'El email es requerido' })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input
            type="password"
            className="p-3 mb-4 rounded-full bg-zinc-900 w-full text-white border border-zinc-100"
            placeholder="Contraseña"
            {...register('password', { required: 'La contraseña es requerida' })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className='mt-8'>
          <button type="submit" className="p-3 bg-white text-black rounded-full w-full">
            Log In
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;


