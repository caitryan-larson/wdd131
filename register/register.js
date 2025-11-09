// adding and numbering participants
// I dont know why it only works with backticks and not single or double quotes
// this is adding a new form - once we add the button/listener

//adding my variables
const addButton = document.getElementById("add");
const form = document.querySelector("form");

function handleAddParticipant(event) {
    event.preventDefault();
    participantCount += 1;
}
addButton.addEventListener("click", handleAddParticipant,participantTemplate);

function participantTemplate(count){
    return `
    <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
    `;
}


function totalFees() {
// grabbing all of the elements with "fee" and adding them together
let feeElements = document.querySelectorAll("[id^=fee]");
console.log(feeElements);
let total = 0;
feeElements = [...feeElements];
feeElements.forEach(feeInput =
    total += feeInput.value
)
return total
}



//Storing info in object and displaying a message
//I cant figured out how to display their name and the number of paticipants they registered
//const info = {total}
//function successTemplate(info){
//   return `
//  <h2> Registration Successful </h2>
//  `;
//}

 function submitForm(event) {
 event.preventDefault();
 //prevent from reloading page
 }
 