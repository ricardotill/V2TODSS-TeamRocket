import { Vertrouwenspersoon } from './vertrouwenspersoon';
import { Huisarts } from './huisarts';

export class Patient {
  naam: string;
  adres: string;
  geboortedatum: string;
  telefoon: string;
  verzekeringsgegevens: string;
  foto: string;
  qrcode: number;
  probleem: string;

  huisarts: Huisarts;
  medicijnen: string[];
  vertrouwenspersonen: Vertrouwenspersoon[];
}
