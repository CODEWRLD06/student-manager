const container = document.getElementById('student-info-container');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const seatInput = document.getElementById('seat');
const addBtn = document.getElementById('addBtn');

const addStudent = () => {
    const div = document.createElement('div');

    const nameInfo = document.createElement('h2')
    nameInfo.textContent = " Student Name :" + nameInput.value
    
    const ageInfo = document.createElement('p');
    ageInfo.textContent = "Age :" + ageInput.value
    
    const seatInfo = document.createElement('p')
    seatInfo.textContent = "Seat Number :" + seatInput.value

    div.append(nameInfo, ageInfo, seatInfo);
    
    container.appendChild(div);
    
}

addBtn.addEventListener('click', () => {
 
    if (nameInput.value && ageInput.value && seatInput.value) {
        addStudent();

        nameInput.value = '';
        ageInput.value = '';
        seatInput.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
