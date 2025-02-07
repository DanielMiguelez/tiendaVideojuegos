export interface Videojuego {
  id: number;
  nombre: string;
  tipo_id: number;  // Este es el ID del tipo (debería ser un número)
  anyo: string;  // O Date, si usas una fecha completa
  plataforma_id: number;  // Este es el ID de la plataforma (también un número)
  descripcion: string;
  tipo_nombre: string;  // Nombre del tipo
}
