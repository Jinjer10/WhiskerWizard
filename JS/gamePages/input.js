export class InputHandler {
    constructor(game){
        this.game = game
        this.keys = [];
        window.addEventListener('keydown', e => {
            if((    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp'  || 
                    e.key === 'ArrowLeft'|| 
                    e.key === 'ArrowRight'||
                    e.key === 'Enter')
                    && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            } else if(e.key === 'D') this.game.debug = !this.game.debug;
            else if(e.key === 'R' && this.game.gameOver) this.game.restart()
            else if(e.key === 'E' && this.game.gameOver) this.game.endGame('keydown')

            
        });
        window.addEventListener('keyup', e => {
        if(     e.key === 'ArrowDown' ||
                e.key === 'ArrowUp'  || 
                e.key === 'ArrowLeft'|| 
                e.key === 'ArrowRight'||
                e.key === 'Enter') { 
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}