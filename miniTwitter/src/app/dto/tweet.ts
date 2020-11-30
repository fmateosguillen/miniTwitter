import { Like } from './like';
import { User } from './user';

export interface Tweet {
    id: number;
    message: string;
    likes: Like[];
    user: User;
}