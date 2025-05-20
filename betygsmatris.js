// ==============================
// Händelse: När sidan har laddats färdigt
// ==============================
document.addEventListener("DOMContentLoaded", function() {
    // Hämta referens till submit-knappen
    var submitButton = document.querySelector("input[type='submit']");

    // Lägg till klick-händelse för knappen
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Hindrar att formuläret skickas till servern direkt
        submitButton.value = "Betyget är uppdaterat"; // Ändra knappens text
    });
});

// ==============================
// Datamodell med elever, ämnen, betyg och kommentarer
// ==============================
var dataObject = {
    "students": {
        "Maja": ["Bugg", "Fysik"],
        "Robert": ["Matematik", "Engelska"],
        "Andreas": ["Fysik", "Matematik"],
        "Moses": ["Bugg", "Engelska"],
        "Molly": ["Matematik", "Fysik", "Bugg", "Engelska"]
    },
    "grades": ["IG", "G", "VG"],
    "comments": ["Bra jobbat", "Boka möte", "Saknas källor!", "Gandalf citat", "Omprov"]
};

// ==============================
// Händelse: När hela fönstret har laddats
// ==============================
window.onload = function() {
    // Hämta referenser till alla select-element
    var studentSel = document.getElementById("student");
    var subjectSel = document.getElementById("subject");
    var gradeSel = document.getElementById("grade");
    var commentSel = document.getElementById("comment");

    // Fyll i dropdown-menyer med värden från dataObject
    populateDropdown(studentSel, Object.keys(dataObject.students)); // Fyll studenter
    populateDropdown(gradeSel, dataObject.grades); // Fyll betyg
    populateDropdown(commentSel, dataObject.comments); // Fyll kommentarer

    // Händelse: När en student väljs, uppdatera ämnes-dropdown
    studentSel.onchange = function() {
        subjectSel.length = 1; // Rensa tidigare alternativ, men behåll "Välj ämne"
        if (this.value in dataObject.students) {
            populateDropdown(subjectSel, dataObject.students[this.value]); // Fyll relevanta ämnen
        }
    };
};

// ==============================
// Funktion: Fyll en dropdown med data från en array
// ==============================
function populateDropdown(selectElement, dataArray) {
    for (var i = 0; i < dataArray.length; i++) {
        selectElement.options[selectElement.options.length] = new Option(dataArray[i], dataArray[i]);
    }
}
