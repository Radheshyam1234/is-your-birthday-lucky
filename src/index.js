const luckyNum = document.querySelector("#lucky-number");
const bday = document.querySelector("#date-of-birth");
const outText=document.querySelector("#outputTxt");
const checkbutton=document.querySelector("#calculate-button")
const model = document.querySelector(".model");
const modelBtn = document.querySelector(".model-btn");


modelBtn.addEventListener("click", () => {
    model.style.display = "none";
  })



const findSum= (date)=>{
    let sum=0;
    date=date.replaceAll("-","");
    // console.log(date)
    // console.log(typeof(date))
  
   for(let digit of date){

   //console.log(typeof(digit))

   sum+=Number(digit)

   }
  return sum;
}


const IsNumberLucky=(sumOfDate,number)=>{
   
if(sumOfDate%number===0){
outText.innerHTML=`Congratulation !!!!! ${number} is the Lucky number`

}
else{
    outText.innerHTML=`OOps!!! ${number} is not the Lucky number`
}


}





checkbutton.addEventListener("click",()=>{
    const birthdate=bday.value;
    const number=luckyNum.value;
    if(birthdate&&number){
        const sumOfDate=findSum(birthdate);
        IsNumberLucky(sumOfDate,number)
    }
    else{
        outText.innerHTML="Please enter all the details "
    }
})



