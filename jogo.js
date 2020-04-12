console.log('Tic-tac-toe --- Louiz-Ferraz');

const board = new Image();
board.src = './images/board2.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


/* contexto.drawImage(  //Exemplo de como funciona drawImage
                        (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
    image,              //Imagem a ser utilizada
    sx, sy,             //Distância até a imagem que queremos que apareça na tela
    sWidth, sHeight,    //Referente ao tamanho da imagem
    dx, dy,             //Referente à posição dentro do canvas
    dWidth, dHeight     //Tamanho da imagem dentro do canvas
); */


//Board
const telaBoard = {
    sX: 57,
    sY: 20,
    w: 285,
    h: 285,
    x: canvas.width/2 - 285/2,
    y: canvas.height/2 - 100,
    desenha() {
        contexto.drawImage(
            board,
            telaBoard.sX, telaBoard.sY,
            telaBoard.w, telaBoard.h,
            telaBoard.x, telaBoard.y,
            telaBoard.w, telaBoard.h,
        );
    }
}

//Peça 1 - X
const peca1 = {
    sX: 57,
    sY: 20,
    w: 285,
    h: 285,
    x: canvas.width/2 - 285/2,
    y: canvas.height/2 - 100,
    desenha() {
        contexto.drawImage(
            board,
            telaBoard.sX, telaBoard.sY,
            telaBoard.w, telaBoard.h,
            telaBoard.x, telaBoard.y,
            telaBoard.w, telaBoard.h,
        );
    }
}

//Peça 2 - O
const peca2 = {
    sX: 57,
    sY: 20,
    w: 285,
    h: 285,
    x: canvas.width/2 - 285/2,
    y: canvas.height/2 - 100,
    desenha() {
        contexto.drawImage(
            board,
            telaBoard.sX, telaBoard.sY,
            telaBoard.w, telaBoard.h,
            telaBoard.x, telaBoard.y,
            telaBoard.w, telaBoard.h,
        );
    }
}

function loop() {

    telaBoard.desenha();
    requestAnimationFrame(loop); //Função que ajuda a desenhar os quadros de forma inteligente
}

loop();
