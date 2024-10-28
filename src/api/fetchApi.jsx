export const fetchApi = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  return await response.json();
};
//Componente fetch API, url en variable de entorno