var canvas = document.getElementById('meuCanvas'); // em seu HTML esse elemento se parece com <canvas id="meuCanvas"></canvas>
var ctx = canvas.getContext('2d');

var moveDireita = false;
var moveEsquerda = false;
var moveCima = false;
var moveBaixo = false;

document.addEventListener('keydown', (event) => {
    if (event.key =='ArrowRight') {
        moveDireita = true;
    }
    else if (event.key == 'ArrowLeft'){
        moveEsquerda = true;
    }
    else if (event.key == 'ArrowUp'){
        moveCima = true;
    }

    else if (event.key == 'ArrowDown'){
        moveBaixo = true;
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key =='ArrowRight') {
        moveDireita = false;
    }
    else if (event.key == 'ArrowLeft'){
        moveEsquerda = false;
    }

    else if (event.key == 'ArrowUp'){
        moveCima = false;
    }

    else if (event.key == 'ArrowDown'){
        moveBaixo = false;
    }
})

class Main{
    constructor(objetos = [new Spaceship]) {
        this.objetos = objetos;
    }
    roda(){
        console.log('rodei');
        setTimeout(() => { this.roda()} ,100);

        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, 300, 300);  

        for(let obj of this.objetos){
            obj.update();
            obj.render();
        }
    }
}

class Objetos{
    constructor(x,y){
        this.positionX = x;
        this.positionY = y;
    }

    update(){
        console.log('Atualizou!')
    }
    render(){
        console.log('Renderizooou')
    }
}

class Asteroide extends Objetos{}

class Spaceship extends Objetos{
    constructor(){
        super();
        this.positionX = 0;
        this.positionY = 0;
    }
    update(){
        if(moveDireita) {
            this.positionX += 30
        }
        if(moveEsquerda){
            this.positionX -= 30
        }
        if(moveCima) {
            this.positionY -= 30
        }
        if(moveBaixo) {
            this.positionY += 30
        }
    }

    render(){
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fillRect(this.positionX, this.positionY, 50, 50);  
    }
}

jogo = new Main;
jogo.roda();
    