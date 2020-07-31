const formBtn = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const addNewItem = document.querySelector('.table-body');
const clearBtn = document.querySelector('#clear-btn');

// form submit event handler
formBtn.addEventListener('submit', function (e) {
    const profile = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value
    }
    textFormat(profile);
    saveData(profile);

    //clear input boxs after sumbit
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';

});

// single data format function
let count = 1;
function textFormat(inputData) {
    const htmlText = `<tr>
        <th>${count++}</th>
        <td>${inputData.name}</td>
        <td>${inputData.email}</td>
        <td>${inputData.phone}</td>
        <td>${inputData.address}</td>
    </tr>`;
    addNewItem.innerHTML += htmlText;
}

//store the data in local storage
function saveData(newItem) {
    let profiles;
    if (localStorage.getItem('profiles') === null) {
        profiles = [];
    }
    else {
        profiles = JSON.parse(localStorage.getItem('profiles'));
    }
    profiles.push(newItem);
    localStorage.setItem('profiles', JSON.stringify(profiles));
}

/// Show Data When Browser Open
document.addEventListener('DOMContentLoaded', function () {
    const showData = JSON.parse(localStorage.getItem('profiles'));
    showData.forEach(element => {
        textFormat(element);
    });
})

// clear all data form local storage
clearBtn.addEventListener('click', function () {
    let profiles;
    if (localStorage.getItem('profiles') === null) {
        profiles = [];
    }
    else {
        profiles = JSON.parse(localStorage.getItem('profiles'));
    }
    localStorage.clear(profiles);
    addNewItem.innerHTML = '';
})