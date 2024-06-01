const selectTag = document.querySelector('.tabs')
const gallery = document.querySelectorAll('.images')

function filterSearch(category) {
    gallery.forEach((curElem) => {
        if (curElem.dataset.category === category) {
            curElem.style.display = 'block'
        }else if(category === 'all') {
            curElem.style.display = 'block'
        }else{
            curElem.style.display = 'none'
        }
    })
}

selectTag.addEventListener('click', (event) => {
    if (event.target.dataset.category) {
        filterSearch(event.target.dataset.category)
    }
})