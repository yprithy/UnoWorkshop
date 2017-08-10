export interface Card {
    value: number,
    colour: string,
    image: string,
    [key: string]: any
}

export class UnoDeck {

    private cards:Card[] = [];

    constructor(){

        for(let i = 0; i<2; i++) {
                for(let j=0;j<12; j++) {
                    let prefix = "0";
                    if(j<10) {
                        prefix = prefix + j;
                    }
                    else {
                        prefix = j + "";
                    }
                }
            }

    }
}