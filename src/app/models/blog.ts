import {User} from './user';

export interface Blog {
  id?: number;
  imageBytes: any;
  blogText: string;
  date: string;
  user: User;
  duration: number;
  imageString?: string;
}
