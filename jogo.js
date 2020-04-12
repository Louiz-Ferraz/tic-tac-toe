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
    //x: 33,
    //y: 297,
    desenha(hrztl,vrtcl) {
        contexto.drawImage(
            pecas,
            peca1.sX, peca1.sY,
            peca1.w, peca1.h,
            hrztl, vrtcl,
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
    //x: 33,
    //y: 205,
    desenha(hrztl,vrtcl) {
        contexto.drawImage(
            pecas,
            peca2.sX, peca2.sY,
            peca2.w, peca2.h,
            hrztl, vrtcl,
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

//
// Telas
//

let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela;
};

const Telas = {
    INICIO: {
        desenha() {
            telaBoard.desenha();
        }
    },
    DURANTE1: {
        desenha() {
            telaBoard.desenha();
            cliqueX1 = cliqueX;
            cliqueY1 = cliqueY;
            peca1.desenha(cliqueX,cliqueY);
        }   
    },
    DURANTE2: {
        desenha() {
            telaBoard.desenha();
            cliqueX2 = cliqueX;
            cliqueY2 = cliqueY;
            peca1.desenha(cliqueX1,cliqueY1);
            peca2.desenha(cliqueX,cliqueY);
        }   
    },
};

function loop() {

    //console.log('teste contador loop');

    //telaBoard.desenha();
    //peca1.desenha(posicao1.x,posicao1.y);
    //peca2.desenha(posicao3.x,posicao3.y);

    x = posicao1.x;
    y = posicao1.y;

    telaAtiva.desenha();
    requestAnimationFrame(loop); //Função que ajuda a desenhar os quadros de forma inteligente

}

var cursorX = 0;
var cursorY = 0;
var contadorCliques = 0;
// Variáveis para impedir repetição dos quadrantes
var pos1 = 0;
var pos2 = 0;
var pos3 = 0;
var pos4 = 0;
var pos5 = 0;
var pos6 = 0;
var pos7 = 0;
var pos8 = 0;
var pos9 = 0;

console.log(`Contador de cliques: ${contadorCliques}`)

function MousePos(event) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    console.log(`x=${cursorX}`);
    console.log(`y=${cursorY}`);

    if(cursorX >= 137 & cursorX <= 217 & cursorY >= 121 & cursorY <= 200) {
        if (pos1 == 0) {
            cliqueX = posicao1.x;
            cliqueY = posicao1.y;
            contadorCliques = contadorCliques + 1;
            mudaParaTela(Telas.DURANTE1);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos1 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    if(cursorX >= 229 & cursorX <= 308 & cursorY >= 121 & cursorY <= 200) {
        if (pos2 == 0) {
            cliqueX = posicao2.x;
            cliqueY = posicao2.y;
            contadorCliques = contadorCliques + 1;
            mudaParaTela(Telas.DURANTE2);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos2 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

};

document.addEventListener("click", MousePos);

mudaParaTela(Telas.INICIO);
console.log(`A tela ativa é ${telaAtiva}`)
loop();
