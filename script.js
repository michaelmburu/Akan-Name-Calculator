const akanNames = {
    male: ['Kofi', 'Kwaku', 'Kwame', 'Kwabena', 'Yaw', 'Kwasi', 'Kwadwo'],
    female: ['Ama', 'Akua', 'Yaa', 'Afua', 'Adwoa', 'Akosua', 'Abenaa']
};

function calculateDayOfWeek(birthdayDate) {
    const cC = parseInt(birthdayDate.getFullYear().toString().substring(0, 2));
    const yY = parseInt(birthdayDate.getFullYear().toString().substring(2, 4));
    const mM = birthdayDate.getMonth() + 1;
    const dD = birthdayDate.getDate();
    return Math.floor(( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7);
}

function calculateMyAkanName() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;
    if (birthDate && gender) {
        const dayOfWeek = calculateDayOfWeek(birthDate);
        const akanName = akanNames[gender][dayOfWeek];
        document.getElementById('result').innerText = `Your Akan name is ${akanName}`;
    } else {
        alert('Please enter a valid birthdate and select a gender.');
    }
}