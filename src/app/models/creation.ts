import { Category } from './category';
import { Language } from "./language";

export interface Creation {
  id: number;
  title: string;
  description: string;
  year: number;
  picture: string;
  categories: Category[];
  languages: Language[];
}
