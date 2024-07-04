const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

let value = 0

function print_if_lower(value){
    if (value<LIMIT){
        console.log(value)
    }
}

studentReport.forEach(print_if_lower)