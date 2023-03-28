peca = "cavalo";

switch(peca) {
    case "peao":
        console.log("O peão anda para frente e porém só toma peças na diagonal, porém apenas 1 casa, exceto quando na posição inicial onde anda 2 casas");
        break;

    case "torre":
        console.log("A torre anda na horizontal e na vertical");
        break;

    case "cavalo":
        console.log("O cavalo anda em forma de L e é a única peça que pode passar por cima de outra peça");
        break;

    case "bispo":
        console.log("O bispo anda na diagonal");
        break;

    case "rainha":
        console.log("A rainha anda na horizontal, vertical e diagonal")
        break;

    case "rei":
        console.log("O rei anda na horizontal, vertical e diagonal, porém apenas 1 casa")
        break;
}