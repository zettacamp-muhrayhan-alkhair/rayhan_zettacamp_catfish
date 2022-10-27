import { Addresses } from './addresses.model';

export interface User {
  _id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  position: string;
  'marital status': string;
  addresses: Addresses;
}
