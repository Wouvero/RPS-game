class Game{
    constructor () {
        this.player_score = 0;
        this.oponent_score = 0;
        this.symbols = document.getElementsByClassName('symbol');
        this.score = document.getElementById('score');
        this.state = document.getElementById('state');
        this.player_symbol = document.getElementById('player_symbol');
        this.oponent_symbol = document.getElementById('oponent_symbol');
    }

    playGame () {
        for (let i = 0; i < this.symbols.length; i++) {
            this.symbols[i].addEventListener("click", () => this.doMagic(i));
        }
    }

    doMagic (player_symbol) {
        var player_symbol = player_symbol;
        var oponent_symbol = this.generateNumber();
        var whoWin = this.whoWin(player_symbol, oponent_symbol);
        
        this.state.innerHTML = whoWin;
        this.state.removeAttribute('class');
        this.state.classList.add(`${whoWin}`);
        this.score.innerHTML = `${this.player_score}:${this.oponent_score}`;
        this.player_symbol.innerHTML    = `<img src="../img/${player_symbol}.svg" alt="player symbol" class="img_symbol">`;
        this.oponent_symbol.innerHTML   = `<img src="../img/${oponent_symbol}.svg" alt="oponent symbol" class="img_symbol">`;
    }
    
    generateNumber () {
        return Math.floor(Math.random() * 3);
    }

    whoWin (player_symbol, oponent_symbol) {
        if(player_symbol === 0 && oponent_symbol === 2){
            this.player_score ++;
            return "WIN";
        }
        if(player_symbol === 1 && oponent_symbol === 0){
            this.player_score ++;
            return "WIN";
        }
        if(player_symbol === 2 && oponent_symbol === 1){
            this.player_score ++;
            return "WIN";
        }
        if(player_symbol === oponent_symbol){
            return "TIES";
        }
        else{
            this.oponent_score ++;
            return "LOSE"
        }
    }  
}export default Game;
