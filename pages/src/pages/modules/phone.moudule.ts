export class Phone {
    constructor(
        private id: number,
        private phones: {
            id: number,
            type: string,
            phone: number
        }
    ) {}
}