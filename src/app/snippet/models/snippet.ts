import {Label} from './label';

export interface Snippet {
    id: string;
    title: string;
    creator?: string;
    date?: string;
    code: string;
    comment?: string;
    file?: string;
    favorites?: boolean;
    labels?: Label[];
}
