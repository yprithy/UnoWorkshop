export interface Card {
    value: number,
    colour: string,
    image: string,
    [key: string]: any
}

export interface Player {
    
}

export class UnoDeck {

    private static colours = ["Red", "Yellow", "Green", "Blue"];
    private cards:Card[] = [];

    constructor(){

        for(let i = 0; i<2; i++) {
            for(let c = 0; c<UnoDeck.colours.length; c++) {
                for(let j=0;j<12; j++) {
                    let prefix = "0";
                    if(j<10) {
                        prefix = prefix + j;
                    }
                    else {
                        prefix = j + "";
                    }
                    this.cards.push({value: j+1, 
                        colour: UnoDeck.colours[c],
                    image: "/assets/uno_deck/c0" +c+"_" +prefix+".png"});
                    }        
                }
            }
        for(let i = 0; i<4; i++) {
        this.cards.push({value: 0, 
                        colour: UnoDeck.colours[i],
                    image: "/assets/uno_deck/c" + i + "_00.png"});
                    } 
        for(let i = 0; i<4; i++) {
        this.cards.push({value: 13, 
                        colour: "All 4 Colours",
                    image: "/assets/uno_deck/c4_00.png"});
                    }

        for(let i = 0; i<4; i++) {
        this.cards.push({value: 14, 
                        colour: "Plus 4 Cards",
                    image: "/assets/uno_deck/c4_01.png"});
                    }

        }

        public Shuffle(times: number = 5) {

            for(let x = 0; x<times; x++) {
            for(let i in this.cards){
                let swapNum = Math.floor(Math.random()*100);
                let c:Card = this.cards[swapNum];
                this.cards[swapNum] = this.cards[i];
                this.cards[swapNum] = c;
            }
            }

        }
        

    }
