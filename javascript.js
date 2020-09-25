function callPanzer(){
    let person = prompt("Not so eager champ! State thy name first!", "Type your name here")
    let date = prompt("Kindly state your birth date here traveler", "Date/Month/Year")
    let wiseWords = ['Communism will win','YOU ARE UNDESERVING OF MY WISDOM!',"K-pop isn't real music","They always ask what my wisdom is, never how my wisdom is","as f*ck is the best unit measurement","Sprich Deutsch du Hurensohn"]
    if (person !== null && person !== "Type your name here"){
        document.getElementById("Panzer").innerHTML = 
        `Hello there, General ${person}. This is your wisdom of the day`
        document.getElementById("Wisdom").innerHTML =  wiseWords[(Math.floor(Math.random() * 5)+ 1)]
        console.log(wiseWords[1])
        console.log(Math.floor(Math.random() * 5)+ 1)
        console.log(wiseWords[(Math.floor(Math.random() * 5)+ 1)])
    }
    if(date === '25/09/2020'){
        document.getElementById('Birth').innerText = `Happy birthday general ${person}!`
    }
    else {
        document.getElementById('Birth').innerText = `Good day General ${person}!`
    }
    
}