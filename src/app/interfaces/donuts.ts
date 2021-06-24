export interface Donuts {
    count: number;
    results: 
        {id: number,
        ref: string,
        name: string
        }
}

export interface Donut {
    id: number;
    ref: string;
    name: string;
    calories: number;
    extras: string;
    photo: string;
}