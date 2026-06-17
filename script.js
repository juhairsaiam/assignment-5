// copy btn add 
let copyCount = 0;
const copyButtons = document.querySelectorAll('.copy');
for( const btn of copyButtons){
    btn.addEventListener('click', function(){
        copyCount++;

    document.getElementById('copy-count').innerText = copyCount;
    })
}
// favorite list count
let favCount = 0;
const favButtons = document.querySelectorAll('.fav');
for( const btn of favButtons){
    btn.addEventListener('click', function(){
        favCount++;

    document.getElementById('fav-count').innerText = favCount;
    })
}
// call coin minus
let coinCount = parseInt(document.getElementById('coin').innerText);
const callButtons = document.querySelectorAll('.call');
for( const btn of callButtons){
    btn.addEventListener('click', function(){
        if( coinCount < 20){
            alert('not enough coin')
        }
        else{
            coinCount = coinCount - 20;
        }
    document.getElementById('coin').innerText = coinCount;
    })
}
