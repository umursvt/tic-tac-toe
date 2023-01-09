const blocks= document.querySelectorAll('.block');
const player_text=document.getElementById('player');
const error_text=document.getElementById('error');
let player = "X";
let game_over=false;
let winner;
let clearBoard = false

function start_game(){
    player_text.textContent =  ` ${player}'s Turn `;
    blocks.forEach(block => block.addEventListener("click",() => chooseArea(block)));
}


function chooseArea(block){
    if (block.textContent=== ''){
        block.textContent=player;
        if (player=='O'){
            block.style.color='purple'
        }
        turnPlayer();
    }
    else{
        error_text.textContent ='It is not a empty space... Choose another one';
        block.style.border='2px solid red'
        setTimeout(()=>{
            error_text.textContent=''
            block.style.border = '1px solid black '
        },2500)
    }
    check_win()
    check_tie()
    

    if (game_over){
        player_text.textContent=`Game is over ${winner} WON!!`
        blocks.forEach(block => block.style.pointerEvents='none')
    }
    


}

function turnPlayer(){
    if (player==='X'){
        player='O'
        player_text.textContent= `${player}'s Turn` 
        return;
    }
    else if(player === 'O'){
        player = 'X'
        player_text.textContent = `${player}'s Turn`
        return;
         
    }
}

function check_win(){
    check_rows()
    check_columns()
    check_diagonals()
}

function check_rows(){
    row1 = (blocks[0].textContent == blocks[1].textContent) && 
    (blocks[0].textContent==blocks[2].textContent) &&
    (blocks[0].textContent !='')

    row2=(blocks[3].textContent == blocks[4].textContent) && 
    (blocks[3].textContent==blocks[5].textContent) &&
    (blocks[3].textContent !='')

    row3=(blocks[6].textContent == blocks[7].textContent) && 
    (blocks[6].textContent==blocks[8].textContent) &&
    (blocks[6].textContent !='')
    if(row1){
        console.log('Game over!.. Winner::',`${blocks[0].textContent}`)
    }
    else if(row2){
        console.log('Game over!.. Winner:',`${blocks[3].textContent}`)
    }
    else if(row3){
        console.log('Game over!.. Winner:',`${blocks[6].textContent}`)
    }

    if (row1 || row2 || row3 ){
        game_over = true
    }
    if (row1) return winner=blocks[0].textContent
    if (row2) return winner=blocks[3].textContent
    if (row3) return winner=blocks[6].textContent
}


function check_columns(){
    col1 = (blocks[0].textContent == blocks[3].textContent) && 
    (blocks[0].textContent==blocks[6].textContent) &&
    (blocks[0].textContent !='')

    col2=(blocks[1].textContent == blocks[4].textContent) && 
    (blocks[1].textContent==blocks[7].textContent) &&
    (blocks[1].textContent !='')

    col3=(blocks[2].textContent == blocks[5].textContent) && 
    (blocks[2].textContent==blocks[8].textContent) &&
    (blocks[2].textContent !='')
    if(col1){
        console.log('Game over!.. Winner::',`${blocks[0].textContent}`)
    }
    else if(col2){
        console.log('Game over!.. Winner:',`${blocks[1].textContent}`)
    }
    else if(col3){
        console.log('Game over!.. Winner:',`${blocks[2].textContent}`)
    }
    if (col1 || col2 || col3 ){
        game_over = true
    }
    if (col1) return winner=blocks[0].textContent
    if (col2) return winner=blocks[1].textContent
    if (col3) return winner=blocks[2].textContent
}

function check_diagonals(){
    dio1 = (blocks[0].textContent == blocks[4].textContent) && 
    (blocks[0].textContent==blocks[8].textContent) &&
    (blocks[0].textContent !='')

    dio2=(blocks[2].textContent == blocks[4].textContent) && 
    (blocks[2].textContent==blocks[6].textContent) &&
    (blocks[2].textContent !='')


    if(dio1){
        console.log('Game over!.. Winner::',`${blocks[0].textContent}`)
    }
    else if(dio2){
        console.log('Game over!.. Winner:',`${blocks[2].textContent}`)
    }
    if (dio1 || dio2){
        game_over = true
    }
    if (dio1) return winner=blocks[0].textContent
    if (dio2) return winner=blocks[2].textContent
}

function check_tie(){
    let values=[]
    blocks.forEach(block => values.push(block.textContent))
    if(!values.includes('')){
        player_text.textContent='It is a TIE... Wanna play one more?'
    }
}

function refresh(){
    document.querySelectorAll('.block').forEach(e => e.textContent='' )
  
}







start_game()
