import {Category} from './category';
import {LanguageAndTool} from './languageAndTool';

export interface Creation {
  id: string;
  title: string;
  description?: string;
  year?: number;
  picture?: string;
  categories?: Category[];
  languages_tools?: LanguageAndTool[];
}
