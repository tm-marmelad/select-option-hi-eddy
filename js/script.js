const dateSelectElement = document.getElementById('date-select');
const monthSelectElement = document.getElementById('month-select');
const yearSelectElement = document.getElementById('year-select');
const textElement = document.querySelector('.text');


const optionElement = document.createElement('option');
optionElement.setAttribute('value', 'September');
optionElement.innerHTML =  'September';

const optionElement2 = document.createElement('option');
optionElement2.setAttribute('value', 'October');
optionElement2.innerHTML = 'October';

const optionElement3 = document.createElement('option');
optionElement3.setAttribute('value', 'November');
optionElement3.innerHTML =  'November';

const optionElement4 = document.createElement('option');
optionElement4.setAttribute('value', 'December ');
optionElement4.innerHTML = 'December';


monthSelectElement.insertAdjacentElement('beforeEnd', optionElement);
monthSelectElement.insertAdjacentElement('beforeEnd', optionElement2);
monthSelectElement.insertAdjacentElement('beforeEnd', optionElement3);
monthSelectElement.insertAdjacentElement('beforeEnd', optionElement4);

for (let date = 1; date <= 31; date++) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', date);
    optionElement.innerHTML = date;
    dateSelectElement.insertAdjacentElement('beforeEnd', optionElement);
}


for (let year = 1900; year <= 2022; year++) {
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value', year);
    optionElement.innerHTML = year;
    yearSelectElement.insertAdjacentElement('beforeEnd', optionElement);
}

document.querySelector('button').onclick = myClick;

function myClick() {

    let a = document.querySelector('.i-1').value;
    let b = document.querySelector('.i-2').value;
    let c = document.querySelector('.i-3').value;
    a = ('https://www.google.com/search?q=' + a + b + c)

    console.log(a)
    document.querySelector('.text').innerHTML = a
}
