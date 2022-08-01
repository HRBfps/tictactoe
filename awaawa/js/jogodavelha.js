var letra = 'X'

function joga(){

}

function verif(){
    var c11 = document.getElementById('cell11').innerHTML;
    var c12 = document.getElementById('cell12').innerHTML;
    var c13 = document.getElementById('cell13').innerHTML;
    var c21 = document.getElementById('cell21').innerHTML;
    var c22 = document.getElementById('cell22').innerHTML;
    var c23 = document.getElementById('cell23').innerHTML;
    var c31 = document.getElementById('cell31').innerHTML;
    var c32 = document.getElementById('cell32').innerHTML;
    var c33 = document.getElementById('cell33').innerHTML;
}
if (((c11 !='') && (c12 !='') && (c13 !='') || 
(c11 !='') && (c22 !='') && (c33 !='') ||
(c11 !='') && (c21 !='') &&(c31 !='') ||
(c12 !='') && (c22 !='') && (c32 !='') || 
(c13 !='') && (c23 !='') && (c33 !='') || 
(c13 !='') && (c22 !='') && (c31 !='') || 
(c12 !='') && (c22 !='') && (c32 !='') || 
(c12 !='') && (c22 !='') && (c32 !='') || 
(c12 !='') && (c22 !='') && (c32 !='') || 
)) {
    alert('Você ganhou! parabéns campeão!');
    novo();
}

function novo(){
    for (i=1; i<4; i++){
        for (j=1; j<4; j++) {
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';
        }
    }
}