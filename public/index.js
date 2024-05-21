import { contactAPI } from './contactAPI.js';
import { debounce } from './debounce.js';
import { mutateData } from './mutateData.js';

const clearMainHTML = () => { setMainHTML('') };
const setMainHTML = (htmlString) => { document.querySelector('main').innerHTML = htmlString; };
const appendToMainHTML = (htmlString) => { document.querySelector('main').innerHTML += `<div>${htmlString}</div>` };

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
    let countryName = document.querySelector('input').value;

    setMainHTML('Loading API resource...');
    let data = await contactAPI(resource);
    const filteredData = await mutateData(countryName, resource, data.data);
    clearMainHTML();
    if (filteredData.length == 0)
        setMainHTML(`No ${resource} found for ${countryName}... Try again.`)
    else {
        filteredData.forEach((dataObj) => {
            appendToMainHTML(JSON.stringify(dataObj));
        })
    }
}