//keeps track of what options were picked
const correctAnswer = document.getElementById("correct")
const numEl = document.getElementById("number")
const percentEl = document.getElementById("percent")
const customText = document.getElementById("custom-text")

//if question one choice is green, etc, counter++

if (correctAnswer) {
        correctAnswer.addEventListener("click", function(){ 
        if(localStorage.getItem("4")){
            localStorage.setItem("5", "5")
        }
        else if(localStorage.getItem("3")){
            localStorage.setItem("4", "4")
        }
        else if(localStorage.getItem("2")){
            localStorage.setItem("3", "3")
        }
        else if(localStorage.getItem("1")){
            localStorage.setItem("2", "2")
        }
        else {
            localStorage.setItem("1", "1")
        }
    })
}

if(numEl){
    if(localStorage.getItem("5")){
        numEl.textContent = localStorage.getItem("5")
        percentEl.textContent = 100
        customText.textContent = "This is... eerie. You shouldn't know this much about me!! WHO ARE YOU?? Except if you guessed... you definitely did lol."
    }
    else if(localStorage.getItem("4")){
        numEl.textContent = localStorage.getItem("4")
        percentEl.textContent = 80
        customText.textContent = "You REALLY care about me...🥹"
    }
    else if(localStorage.getItem("3")){
        numEl.textContent = localStorage.getItem("3")
        percentEl.textContent = 60
        customText.textContent = "I forgive you, bestie!"
    }
    else if(localStorage.getItem("2")){
        numEl.textContent = localStorage.getItem("2")
        percentEl.textContent = 40
        customText.textContent = "It's ok, it was a hard quiz!"
    }
    else if(localStorage.getItem("1")){
        numEl.textContent = localStorage.getItem("1")
        percentEl.textContent = 20
        customText.textContent = "Woomp Woomp :0("
    }
    else {
        numEl.textContent = 0
        percentEl.textContent = 0
        customText.textContent = "WHO ARE YOU!?!?!?!?!?!"
    }
    localStorage.clear()
}