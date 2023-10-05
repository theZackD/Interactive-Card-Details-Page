let CardName = document.querySelector('#CardholderName')
let CardNumber = document.querySelector('#CardNum')
let ExpMM = document.querySelector('#ExpM')
let ExpYY = document.querySelector('#ExpY')
let CVC = document.querySelector('#CVC')

const DispName = document.querySelector('#Fullname')
const DispNum = document.querySelector('#Serialnum')
const DispMonth = document.querySelector('#Month')
const DispYear = document.querySelector('#Year')
const DispCVC = document.querySelector('#ECVC')

const MaxNumber = CardNumber.getAttribute("maxlength")
const MaxMonth = ExpMM.getAttribute("maxlength")
const MaxYear = ExpYY.getAttribute("maxlength")
const MaxCVC = CVC.getAttribute("maxlength")

var patternMask = IMask(CardNumber, {
    mask: '**** **** **** ****'
});


let MoveToNext = function(Field1, Elm2Id){
    var Len = Field1.value.length;
    var MX = Field1.getAttribute("maxlength");

    if(Len==MX){document.getElementById(Elm2Id).focus();}
}
// let ChangeCardInfo = function(Field, Disp){
//     Disp.innerHTML = Field.value
// }

CardName.addEventListener('keyup', () => {DispName.innerHTML = CardName.value})
CardNumber.addEventListener('keyup', () => {DispNum.innerHTML = CardNumber.value})
ExpMM.addEventListener('keyup', () => {DispMonth.innerHTML = ExpMM.value})
ExpYY.addEventListener('keyup', () => {DispYear.innerHTML = ExpYY.value})
CVC.addEventListener('keyup', () => {DispCVC.innerHTML = CVC.value})


let Notval = document.querySelector('#nonvalid')
let ThankU = document.querySelector('#Thankucard')

// let Validate = function(){
//     Notval.classList.add("NOSHOW");
//     ThankU.classList.remove("NOSHOW");
// }

let ConfButton = document.querySelector(".confirmationdiv")


let Namereg = /^[a-zA-Z\s]+$/
let Numreg = /^(\s*[0-9]+\s*)+$/

let NameError = document.querySelector('#ErrName')
let NumError = document.querySelector('#ErrNumber')
let ExpError = document.querySelector('#ErrExp')
let CVCError = document.querySelector('#ErrCVC')


// CardNumber.addEventListener('keyup', () => {if (CardNumber.value.length >= CardNumber.maxlength){
//     focus(ExpMM)
// } })



ConfButton.addEventListener('click', () => {

    if (!Namereg.test(CardName.value)){
        NameError.innerHTML = 'Only letter are allowed'
    } else if (!Numreg.test(CardNumber.value)){
        NameError.innerHTML = ""
        NumError.innerHTML = 'Enter a valid number please!'
    } else if (!Numreg.test(ExpMM.value) || !Numreg.test(ExpYY.value)){
        NumError.innerHTML = ""
        ExpError.innerHTML = 'Invalid Date !!'
    }else if (!Numreg.test(CVC.value)){
        ExpError.innerHTML = ""
        CVCError.innerHTML = "Enter valid numbers"
    } else {
        CVCError.innerHTML = "";
        Notval.classList.add("NOSHOW");
        ThankU.classList.remove("NOSHOW");
    }
})