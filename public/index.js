import { contactAPI } from './contactAPI.js';
import { debounce } from './debounce.js';
import { mutateData } from './mutateData.js';

const clearMainHTML = () => { setMainHTML('') };
const setMainHTML = (htmlString) => { document.querySelector('main').innerHTML = htmlString; };
const appendToMainHTML = (htmlString) => { document.querySelector('main').innerHTML += `<p>${htmlString}</p>` };
const allKeyValuePairs = (obj) => {
    let returnObj = {};
    for(const [key, value] of Object.entries(obj)) {
        returnObj = {...returnObj, [key]: value};
    }
    return returnObj;
}

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
    const response = await fetch(`https://fakerapi.it/api/v1/${resource}?_quantity=1000`);
    const data = await response.json();
    const filteredData = await mutateData(countryName, resource, data.data);
    console.log(filteredData);
    setMainHTML(`API results for ${resource} in ${countryName}`);
    filteredData.forEach((dataObj) => {
        appendToMainHTML(JSON.stringify(allKeyValuePairs(dataObj)));
    })
}