const addButton = document.getElementById("addCourse");
const deleteButton = document.getElementById("deleteCourse");
const calcButton = document.getElementById("calculate");
const tableBody = document.getElementById("tbody");
const result = document.getElementById("result");
let i = 1;

function addC(){
    i++;
    let row = tableBody.insertRow();
    row.insertAdjacentHTML('beforeend', `<td>${i}</td><td><input type="text" class="w-100 form-control form-control-sm bg-dark text-light border-primary text-center" placeholder="Course name (optional)"></td><td><input type="number" class="ch w-100 form-control form-control-sm bg-dark text-light border-primary text-center" step="0.5" min="0" placeholder="Credit Hours"></td><td><input type="number" class="gpa w-100 form-control form-control-sm bg-dark text-light border-primary text-center" step="0.01" min="0" placeholder="GPA"></td>`);
}
function deleteC(){
    if(i===1){return}
    else {
        i--;
        tableBody.deleteRow(i);
    }
}
function calculate(){
    let gpas = document.querySelectorAll('.gpa');
    let ch = document.querySelectorAll('.ch');
    for(let e = 0; e<i; e++){
        let val = Number(gpas[e].value);
        let val2 = Number(ch[e].value);
        if(!gpas[e].value.trim() || isNaN(val) || val<0){
            alert(`Please enter a valid GPA (Row ${e+1})!`);
            return;
        }
        if(!ch[e].value.trim() || isNaN(val2) || val2<=0){
            alert(`Please enter valid Credit Hours (Row ${e+1})!`);
            return;
        }
    }
    let sum = [];
    let chArray = [];
    for(let e = 0; e<i; e++){
        sum[e] = gpas[e].value*ch[e].value;
        chArray[e] = ch[e].value;
    }
    sum = sum.reduce((a,b)=> a + b, 0);
    chArray = chArray.map(Number);
    chArray = chArray.reduce((a,b)=> a + b, 0);
    let gpa = sum/chArray;
    result.innerText = `Final GPA: ${gpa.toFixed(2)}`;
}

addButton.addEventListener("click", addC);
deleteButton.addEventListener("click", deleteC);
calcButton.addEventListener("click", calculate);
