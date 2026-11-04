
const btnStart = document.querySelector("#start")

const sortearBuraco = numBuracos => Math.floor(Math.random()*numBuracos)

btnStart.addEventListener("click", () => {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');

    let score = 0

    setInterval(()=> {
        const n = sortearBuraco(holes.length)
        holes[n].classList.add("up")
        
        setTimeout(()=> {
            holes[n].classList.remove("up")
        }, 1000)

    },1000)
    

    //clicando na marmota
    document.querySelector(".game").addEventListener("click", (e)=> {
        console.log(e)
        //acertei a div da marmota?
        if(e.target.tagName == "DIV") {
            if(e.target.classList.contains("mole")) {
                console.log("Acertei a marmota!")
                score++
                scoreBoard.textContent = score
            }
        }
    })

})