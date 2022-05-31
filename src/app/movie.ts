export class Movie {
    id: number;
    name: string;
    description: string;
    imageUrl: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.imageUrl = "";
    }
}

// id: number| undefined = 0;
// name: string| undefined = "nullname";
// description: string| undefined = "nulldescription";
// imageUrl: string| undefined = "nullimage";