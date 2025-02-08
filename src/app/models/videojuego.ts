
export interface Videojuego {
  id: number;
  nombre: string;
  tipo_id: number; // Asegúrate de agregar esta propiedad
  anyo: number;    // O un tipo adecuado para la fecha, como Date
  plataforma_id: number; // Asegúrate de agregar esta propiedad
  descripcion: string;
  tipo_nombre: string;
}