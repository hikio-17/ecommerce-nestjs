import {} from 'mongoose';
import { User } from './user';

export interface Product {
  owner: User;
  title: string;
  description: string;
  image: string;
  price: string;
  created: Date;
}
