import { Label } from "./label";

export interface Snippet {
    id: number,
    title: string,
    creator: string,
    date: Date,
    code: string,
    comment: string,
    file: string,
    labels: Label[]
}
