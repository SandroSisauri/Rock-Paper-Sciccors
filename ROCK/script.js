const Rock = document.getElementById('rock')
const Paper = document.getElementById('paper')
const sciccors = document.getElementById('sciccors')
const middle = document.getElementById('middle')
const PlayerRealScore = document.getElementById('my-score')
const PcRealScore = document.getElementById('pc-score')
const StartH1 = document.getElementById('StartAnimation')


//Let variables
let RockTapPC = false
let PaperTapPC = false
let sciccorsTapPC = false


let RockTap = false
let PaperTap = false
let sciccorsTap = false
let PlayerWin = false
let PcWin = false
let PlayerPoint = 0
let PcPoint = 0

//Event Listeners

Rock.addEventListener('click' , RockTapF )
Paper.addEventListener('click' ,PaperTapF)
sciccors.addEventListener('click' ,sciccorsTapF)

//Functions

function RockTapF(){
    RockTap = false
    PaperTap = false
    sciccorsTap = false
    middle.innerHTML = ''
    RockTap = true
    PcHand()
    Imggen('Rock.png' , 'TableHandOne' )
    Logic()


}
function PaperTapF(){
    RockTap = false
    PaperTap = false
    sciccorsTap = false
    middle.innerHTML = ''
    PaperTap = true
    PcHand()
    Imggen('paper.png' , 'TableHandTwo')
    Logic()

}
function sciccorsTapF(){
    RockTap = false
    PaperTap = false
    sciccorsTap = false
    middle.innerHTML = ''
    sciccorsTap = true
    PcHand()
    
    Imggen('sciccors.png' ,'TableHandThee')
    Logic()
}
function PcHand(){

    RockTapPC = false
    PaperTapPC = false
    sciccorsTapPC = false

   let Randomnum = Math.floor(Math.random() * 3);


    if(Randomnum == 0){
        RockTapPC = true
        Imggen('Rock.png' , 'PCTableHandOne' )
    }else if(Randomnum == 1){
        PaperTapPC = true
        Imggen('paper.png' , 'PCTableHandTwo')
    }else if(Randomnum == 2){
        sciccorsTapPC = true
        Imggen('sciccors.png' ,'PCTableHandThee')
    }
    
}

function Logic(){

    // tie
    if( RockTap == true && RockTapPC == true){
        
    }
    if( PaperTap == true && PaperTapPC == true){
        
    }
    if( sciccorsTap == true && sciccorsTapPC == true){
        
    }

//rock 
    if(RockTap == true && PaperTapPC == true){
        PcPoint++
        PcRealScore.innerText = 'PC score: ' + '' + PcPoint
    }else if(RockTap == true && sciccorsTapPC == true){
        PlayerPoint++
        PlayerRealScore.innerText = 'MY score: ' + '' + PlayerPoint
    }
// paper
    if(PaperTap == true && sciccorsTapPC == true){
        PcPoint++
        PcRealScore.innerText = 'PC score: ' + '' + PcPoint
    }else if(PaperTap == true && RockTapPC == true){
        PlayerPoint++
        PlayerRealScore.innerText = 'MY score: ' + '' + PlayerPoint
    }
// sciccors
    if(sciccorsTap == true && RockTapPC == true){
        PcPoint++
        PcRealScore.innerText = 'PC score: ' + '' + PcPoint
    }else if(sciccorsTap == true && PaperTapPC == true){
        PlayerPoint++
        PlayerRealScore.innerText = 'MY score: ' + '' + PlayerPoint
    }
    CheckWinner()
}


function CheckWinner(){
 if(PlayerPoint == 5){
    Swal.fire('You Won')
    PlayerPoint = 0
    PcPoint = 0
    PcRealScore.innerText = 'PC score: ' + '' + PcPoint
    PlayerRealScore.innerText = 'MY score: ' + '' + PlayerPoint
    middle.innerHTML = ''
    middle.appendChild(StartH1)

 }else if(PcPoint == 5){
    Swal.fire('You Lost')
    PlayerPoint = 0
    PcPoint = 0
    PcRealScore.innerText = 'PC score: ' + '' + PcPoint
    PlayerRealScore.innerText = 'MY score: ' + '' + PlayerPoint
    middle.innerHTML = ''
    middle.append(StartH1)


 }
}
function Imggen(name , id , ){
    let img = new Image(185, 256)
    img.src = name
    img.setAttribute('id' , id)
    middle.appendChild(img)
    


}