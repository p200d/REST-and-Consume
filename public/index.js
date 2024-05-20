import { contactAPI } from './contactAPI.js';
import { debounce } from './debounce.js';

const clearMainHTML = () => { setMain('') };
const setMainHTML = (htmlString) => { document.querySelector('main').innerHTML = htmlString; };

/* const handleButtonClick = debounce(() => {
    console.log('xyz');
}, 500); */

const buttons = document.querySelectorAll('.btn');

buttons.forEach((currentButton) => {
    currentButton.value === 'clear' 
        ? currentButton.addEventListener('click', clearMainHTML) // Clear button
        : currentButton.addEventListener('click', handleButtonClick); // API call button
});

function handleButtonClick() {
    handleAPICall(this.value);
} 

async function handleAPICall(resource) {
    setMainHTML('Loading API resource...');
    const response = await fetch(`https://fakerapi.it/api/v1/${resource}?_quantity=1000`);
    const data = await response.json();
}