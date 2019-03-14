import {Category} from './category';
import {Contact} from './contact';

export interface Deed {
  id?: number;
  name: string;
  description: string;
  location: string;
  isClosed: boolean;
  teamLeadId?: number;
  category: Category;
  contact: Contact;
  participation: string;
  users: [];
}
