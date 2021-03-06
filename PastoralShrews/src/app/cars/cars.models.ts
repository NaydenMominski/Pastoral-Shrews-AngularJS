import { IComment } from './comment.models';

export class ICar {
       $key: string;
       userEmail: string;
       model: string;
       year: string;
       brand: string;
       location: string;
       transmission: string;
       power: string;
       color: string;
       engine: string;
       image: string;
       description: string;
       price: string;
       timeStamp: number;
       comments: Array<IComment>;
       type: string;
    }
