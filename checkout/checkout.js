let progresso = 0;

function nextStep(){
    if(progresso < 100){
        progresso += 50;
        document.getElementById('progresso').style.width = progresso + '%';
    }
}