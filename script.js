const dayOutput = document.querySelector('.day');
const dayInputField = document.querySelector('#day');
const monthOutput = document.querySelector('.month');
const monthInputField = document.querySelector('#month');
const yearOutput = document.querySelector(".year");
const yearInputField = document.querySelector("#year");
const button = document.querySelector('.img');
const dayReq = document.querySelector("#dayReq");
const monthReq = document.querySelector("#monthReq");
const yearReq = document.querySelector("#yearReq");
const dayVal = document.querySelector("#dayVal");
const monthVal = document.querySelector("#monthVal");
const yearVal = document.querySelector("#yearVal");


button.addEventListener('click', ()=>{

    
    const dayInput = dayInputField.value;
    const monthInput = monthInputField.value;
    const yearInput = yearInputField.value;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay  = today.getDate();

    const dob = new Date(yearInput, monthInput-1, dayInput);
    const inputYear = dob.getFullYear();
    const inputMonth = dob.getMonth();
    const inputDay = dob.getDate();

    let userYears = currentYear - inputYear;
    let userMonths = currentMonth - inputMonth;
    let userDays = currentDay - inputDay;

    if (userMonths < 0) {
        userYears--;
        userMonths += 12;
    }
    if (userDays < 0) {
        userMonths--;
        userDays += new Date(currentYear, currentMonth, 0).getDate();
    }

    if(dayInput === ''){
        dayReq.style.display = 'block';
    } else {
        dayReq.style.display = "none";
    }
    
    if (monthInput === ''){
        monthReq.style.display = 'block';
    } else{
        monthReq.style.display = "none";
    }
    
    if (yearInput === ''){
        yearReq.style.display = 'block';
    } else{
        yearReq.style.display = "none";
    }

    if (dayInput > 31) {
        dayVal.style.display = "block";
    } else {
        dayVal.style.display = "none";
    }

    if (monthInput > 12) {
        monthVal.style.display = "block";
    } else {
        monthVal.style.display = "none";
    }

    if (yearInput > currentYear) {
        yearVal.style.display = "block";
    } else {
        yearVal.style.display = "none";
    }
    
    if(dayInput != '' && monthInput != '' && yearInput != '' && !(yearInput > currentYear) && !(monthInput > 12) && !(dayInput > 31)){
        dayOutput.innerHTML = userDays;
        monthOutput.innerHTML = userMonths;
        yearOutput.innerHTML = userYears;
    }
})

dayInputField.addEventListener("keydown", (e) => {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

monthInputField.addEventListener("keydown", (e) => {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

yearInputField.addEventListener("keydown", (e) => {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
        e.preventDefault();
    }
});

