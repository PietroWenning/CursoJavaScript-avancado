function recursica(max){
    if(max >= 10)return;
    max++
    console.log(max)
    recursica(max)
}
recursica(0)