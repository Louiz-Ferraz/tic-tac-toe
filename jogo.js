console.log('Tic-tac-toe --- Louiz-Ferraz');

const board = new Image();
board.src = './images/board.png';

const pecas = new Image();
pecas.src = './images/pecas2.png';

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

//
//Imagens
//

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
    sX: 15,
    sY: 249,
    w: 73,
    h: 73,
    x: 33,
    y: 297,
    desenha() {
        contexto.drawImage(
            pecas,
            peca1.sX, peca1.sY,
            peca1.w, peca1.h,
            peca1.x, peca1.y,
            peca1.w, peca1.h,
        );
    }
}

//Peça 2 - O
const peca2 = {
    sX: 15,
    sY: 15,
    w: 73,
    h: 73,
    x: 33,
    y: 205,
    desenha() {
        contexto.drawImage(
            pecas,
            peca2.sX, peca2.sY,
            peca2.w, peca2.h,
            peca2.x, peca2.y,
            peca2.w, peca2.h,
        );
    }
}

//
//Posições
//
const posicao1 = {
    x: 33,
    y: 114,
}

const posicao2 = {
    x: 124,
    y: 114,
}

const posicao3 = {
    x: 216,
    y: 114,
}

const posicao4 = {
    x: 33,
    y: 205,
}

const posicao5 = {
    x: 124,
    y: 205,
}

const posicao6 = {
    x: 216,
    y: 205,
}

const posicao7 = {
    x: 33,
    y: 297,
}

const posicao8 = {
    x: 124,
    y: 297,
}

const posicao9 = {
    x: 216,
    y: 297,
}

function click() {

}

function loop() {

    telaBoard.desenha();
    peca1.desenha();
    peca2.desenha();
    requestAnimationFrame(loop); //Função que ajuda a desenhar os quadros de forma inteligente
    
}

loop();
