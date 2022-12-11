var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")
var count = 0

function increment() {
count += 1
countEl.textContent = count
}




function save() {
    
    var prevCount = count + " - "
    saveEl.textContent += " " + prevCount
    var resetCount = count = 0
    countEl.textContent = count = 0
    

    
}