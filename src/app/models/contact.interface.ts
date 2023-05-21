import { Titulo } from '../types/contacts.types';

export interface Contact {
  id?: number;
  nombre: string;
  email: string;
  numero: string;
  titulo: Titulo;
}
