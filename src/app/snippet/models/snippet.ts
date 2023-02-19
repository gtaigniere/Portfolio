import {Label} from './label';

export interface Snippet {
    id: string;
    title: string;
    creator?: string;
    date?: Date;
    code: string;
    comment?: string;
    file?: string;
    favorites?: boolean;
    labels?: Label[];
}
