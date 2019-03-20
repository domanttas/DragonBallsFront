import {User} from './user';

export interface Blog {
  id?: number;
  imageBytes: [];
  blogText: string;
  date: string;
  user: User;
  duration: number;
}
