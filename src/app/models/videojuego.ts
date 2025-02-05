export interface Videojuego {
  id: number;
  nombre: string;
  tipo: string;
  anyo: string; // o Date, dependiendo de cómo esté definido
  plataforma: string;
  descripcion: string;
  tipo_id: number;  // ID relacionado con el tipo
  tipo_nombre: string;  // Nombre del tipo
}
