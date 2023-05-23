const test = document.querySelector('.open')
const test2 = document.querySelectorAll('.question-cards-card__question')
const test3 = document.querySelector('.questions-cards-card-question__img')

// test2.onclick = function() {
//     test.classList.toggle('active')
//     test3.classList.toggle('active2')
//   };

test2.forEach(el => {
  el.addEventListener('click', event => {
    console.log(event.currentTarget)
    const node = event.currentTarget
    const parent = node.parentNode.parentNode
    const img = parent.querySelector('img')
    const text = parent.querySelector('.open')
    let height = text.getBoundingClientRect().height

    img.classList.toggle('active2')
    text.classList.toggle('active')
  })
})