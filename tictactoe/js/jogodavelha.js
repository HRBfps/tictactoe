var letra = 'X';

function joga() {


}
function novo() {
    for (i=1; i<4 ; i++) {
        for(j=1; j<4; j++) {
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';
        }
    }
}

function verif() {
    c11 = document.getElementById('cell11').innerHTML; //1 2 3  11 12 13
    c12 = document.getElementById('cell12').innerHTML; //4 5 6  21 22 23
    c13 = document.getElementById('cell13').innerHTML; //7 8 9  31 32 33
    c21 = document.getElementById('cell21').innerHTML;
    c22 = document.getElementById('cell22').innerHTML;
    c23 = document.getElementById('cell23').innerHTML;
    c31 = document.getElementById('cell31').innerHTML;
    c32 = document.getElementById('cell32').innerHTML;
    c33 = document.getElementById('cell33').innerHTML; 
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13) ) || // 1 2 3
        ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || // 1 5 9
        ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) || // 1 4 7
        ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) || // 4 5 6
        ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || // 7 8 9
        ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) || // 2 5 8
        ((c13 != '') && (c22 != '') && (c31 != '') && (c13 == c22) && (c22 == c31)) || // 3 5 7
        ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) ) { // 3 6 9 
        alert('You are the winner!');
        novo();
}
}