const h1Counter = document.querySelector("#counter")

let i = -1
let heart = 0
let interval = setInterval( myIncrementer, 1000)
let isPaused = false

function myIncrementer(){
    //event.preventDefault
    if(!isPaused){
    i++;
    h1Counter.textContent = i;
    heart = 0
}}
myIncrementer()

function pause(){
    isPaused = !isPaused;
    if(isPaused){
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("pause").innerText = 'resume'
    } else {
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("pause").innerText = 'pause'
    };
};

const minusBtn = document.querySelector("#minus")
minusBtn.addEventListener("click", function() {
    i--;
    h1Counter.textContent = i
})

const plusBtn = document.querySelector("#plus")
plusBtn.addEventListener("click", function() {
    i++;
    h1Counter.textContent = i
})

const likeBtn = document.querySelector("#heart")
likeBtn.addEventListener("click", function() {
    heart++;
    let heartLi = document.createElement("li")
    heartLi.textContent = `${i} has been liked ${heart} times`
    //console.log(heartLi)
    const likesUl = document.querySelector(".likes")
    likesUl.append(heartLi)
})

const pauseBtn = document.querySelector("#pause")
pauseBtn.addEventListener("click", function(){
    pause()
})

const commentBtn = document.querySelector("#submit")
let commentInput = document.querySelector("#comment-input")
let commentList = document.querySelector("#list")

commentBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let commentLi = document.createElement("li")
    commentLi.textContent = commentInput.value;
    
    console.log(commentLi)
    commentList.append(commentLi)
})
