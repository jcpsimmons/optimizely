let els = document.querySelectorAll('body *')

let curIdx;
setInterval(() => {
    curIdx = Math.floor(Math.random() * els.length)
    els[curIdx].style.transition = `${Math.floor(Math.random() * 4000)}ms`
    els[curIdx].style.overflow = 'visible'
    els[curIdx].style.transform.includes('360') ? els[curIdx].style.transform = 'rotate(0deg)' : els[curIdx].style.transform = 'rotate(360deg)'
}, 1)



let els = document.querySelectorAll('body *')
const toggle = () => {
    curIdx = Math.floor(Math.random() * els.length)
    els[curIdx].style.visibility !== 'hidden' ? els[curIdx].style.visibility = 'hidden' : els[curIdx].style.visibility = 'visible'
}
let curIdx;
setInterval(() => {
    let shinterval = new Array(1000).fill(1)
    shinterval.forEach(() => {
        toggle()
    })
}, .01)
