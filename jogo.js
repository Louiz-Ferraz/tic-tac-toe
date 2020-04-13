console.log('Tic-tac-toe --- Louiz-Ferraz');

const board = new Image();
board.src = './images/board.png';

const pecas = new Image();
pecas.src = './images/pecas2.png';

const vezX = new Image();
vezX.src = './images/vez-xzin.png';

const vezO = new Image();
vezO.src = './images/vez-bolinha.png';

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

//Turn X
const turnX = {
    sX: 0,
    sY: 0,
    w: 208,
    h: 38,
    x: canvas.width/2 - 208/2,
    y: 25,
    desenha() {
        contexto.drawImage(
            vezX,
            turnX.sX, turnX.sY,
            turnX.w, turnX.h,
            turnX.x, turnX.y,
            turnX.w, turnX.h,
        );
    }
}

//Turn O
const turnO = {
    sX: 0,
    sY: 0,
    w: 208,
    h: 38,
    x: canvas.width/2 - 208/2,
    y: 25,
    desenha() {
        contexto.drawImage(
            vezO,
            turnO.sX, turnO.sY,
            turnO.w, turnO.h,
            turnO.x, turnO.y,
            turnO.w, turnO.h,
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
            turnX.desenha();
        }
    }
};

//Help: https://pt.stackoverflow.com/questions/190570/mudar-o-nome-de-uma-variavel-usando-parametros-de-uma-fun%C3%A7%C3%A3o-javascript
function criarDURANTES(u) {

    if (u == 1) {
        Telas['DURANTE'+ u] = {
            desenha() {
                telaBoard.desenha();
                cliqueX1 = cliqueX;
                cliqueY1 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                turnO.desenha();
            }
        };
        mudaParaTela(Telas.DURANTE1);
    }

    if (u == 2) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX2 = cliqueX;
                cliqueY2 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                turnX.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE2);
    }

    if (u == 3) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX3 = cliqueX;
                cliqueY3 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                turnO.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE3);
    }

    if (u == 4) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX4 = cliqueX;
                cliqueY4 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                turnX.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE4);
    }

    if (u == 5) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX5 = cliqueX;
                cliqueY5 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                peca1.desenha(cliqueX5,cliqueY5);
                turnO.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE5);
    }

    if (u == 6) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX6 = cliqueX;
                cliqueY6 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                peca1.desenha(cliqueX5,cliqueY5);
                peca2.desenha(cliqueX6,cliqueY6);
                turnX.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE6);
    }

    if (u == 7) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX7 = cliqueX;
                cliqueY7 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                peca1.desenha(cliqueX5,cliqueY5);
                peca2.desenha(cliqueX6,cliqueY6);
                peca1.desenha(cliqueX7,cliqueY7);
                turnO.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE7);
    }

    if (u == 8) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX8 = cliqueX;
                cliqueY8 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                peca1.desenha(cliqueX5,cliqueY5);
                peca2.desenha(cliqueX6,cliqueY6);
                peca1.desenha(cliqueX7,cliqueY7);
                peca2.desenha(cliqueX8,cliqueY8);
                turnX.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE8);
    }

    if (u == 9) {
        Telas['DURANTE' + (u)] = {
            desenha() {
                telaBoard.desenha();
                cliqueX9 = cliqueX;
                cliqueY9 = cliqueY;
                peca1.desenha(cliqueX1,cliqueY1);
                peca2.desenha(cliqueX2,cliqueY2);
                peca1.desenha(cliqueX3,cliqueY3);
                peca2.desenha(cliqueX4,cliqueY4);
                peca1.desenha(cliqueX5,cliqueY5);
                peca2.desenha(cliqueX6,cliqueY6);
                peca1.desenha(cliqueX7,cliqueY7);
                peca2.desenha(cliqueX8,cliqueY8);
                peca1.desenha(cliqueX9,cliqueY9);
                turnO.desenha();
            }   
        };
        mudaParaTela(Telas.DURANTE9);
    }
}

function loop() {

    //console.log('teste contador loop');

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
    cursorX = event.offsetX;
    cursorY = event.offsetY;
    console.log(`x=${cursorX}`);
    console.log(`y=${cursorY}`);

    //Click on position 1
    if(cursorX >= 29 & cursorX <= 109 & cursorY >= 112 & cursorY <= 192) {
        if (pos1 == 0) {
            cliqueX = posicao1.x;
            cliqueY = posicao1.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos1 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 2
    if(cursorX >= 120 & cursorX <= 200 & cursorY >= 112 & cursorY <= 192) {
        if (pos2 == 0) {
            cliqueX = posicao2.x;
            cliqueY = posicao2.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos2 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 3
    if(cursorX >= 212 & cursorX <= 292 & cursorY >= 112 & cursorY <= 192) {
        if (pos3 == 0) {
            cliqueX = posicao3.x;
            cliqueY = posicao3.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos3 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };
    
    //Click on position 4
    if(cursorX >= 29 & cursorX <= 109 & cursorY >= 203 & cursorY <= 283) {
        if (pos4 == 0) {
            cliqueX = posicao4.x;
            cliqueY = posicao4.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos4 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 5
    if(cursorX >= 120 & cursorX <= 200 & cursorY >= 203 & cursorY <= 283) {
        if (pos5 == 0) {
            cliqueX = posicao5.x;
            cliqueY = posicao5.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos5 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 6
    if(cursorX >= 212 & cursorX <= 292 & cursorY >= 203 & cursorY <= 283) {
        if (pos6 == 0) {
            cliqueX = posicao6.x;
            cliqueY = posicao6.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos6 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 7
    if(cursorX >= 29 & cursorX <= 109 & cursorY >= 294 & cursorY <= 374) {
        if (pos7 == 0) {
            cliqueX = posicao7.x;
            cliqueY = posicao7.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos7 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 8
    if(cursorX >= 120 & cursorX <= 200 & cursorY >= 294 & cursorY <= 374) {
        if (pos8 == 0) {
            cliqueX = posicao8.x;
            cliqueY = posicao8.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos8 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

    //Click on position 9
    if(cursorX >= 212 & cursorX <= 292 & cursorY >= 294 & cursorY <= 374) {
        if (pos9 == 0) {
            cliqueX = posicao9.x;
            cliqueY = posicao9.y;
            contadorCliques = contadorCliques + 1;
            criarDURANTES(contadorCliques);
            console.log(`A tela ativa é ${telaAtiva}`);
            console.log(`Contador de cliques: ${contadorCliques}`);
        }
        pos9 = 1;
        console.log(`Contador de cliques: ${contadorCliques}`);
    };

};

document.addEventListener("click", MousePos);

mudaParaTela(Telas.INICIO);
console.log(`A tela ativa é ${telaAtiva}`)
console.log(Telas);
loop();
