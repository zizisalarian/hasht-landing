let advantageCards = document.querySelector('.advantages-cards')
let advantageCard = document.querySelector('.advantages-card')
let advantageNext = document.querySelector('.advantages-nav.next')
let advantagePrev = document.querySelector('.advantages-nav.prev')
if(advantageCard){

    let cardWidth = advantageCard.getBoundingClientRect().width
    
    advantageNext.addEventListener('click' , ()=>{
    let scrollLeftA = advantageCards.scrollLeft
    console.log('scrollLeftA' , scrollLeftA , scrollLeftA+cardWidth )
    advantageCards.scrollTo(scrollLeftA+cardWidth  , 0 )
})
advantagePrev.addEventListener('click' , ()=>{
    let scrollLeftA = advantageCards.scrollLeft
    console.log('scrollLeftA' , scrollLeftA , scrollLeftA-cardWidth )
    advantageCards.scrollTo(scrollLeftA - cardWidth  , 0 )
    
})
}



let usercommentCards = document.querySelector('.user-comment-container')
let usercommentCard = document.querySelector('.user-comment')
let usercommentNext = document.querySelector('.user-comments .next')
let usercommentPrev = document.querySelector('.user-comments .prev')
if(usercommentCard){

    let cardWidthComment = usercommentCard.getBoundingClientRect().width
    usercommentNext.addEventListener('click' , ()=>{
        let scrollLeftA = usercommentCards.scrollLeft
        console.log('scrollLeftA' , scrollLeftA , scrollLeftA+cardWidthComment )
        usercommentCards.scrollTo(scrollLeftA+cardWidthComment  , 0 )
    })
usercommentPrev.addEventListener('click' , ()=>{
    let scrollLeftA = usercommentCards.scrollLeft
    console.log('scrollLeftA' , scrollLeftA , scrollLeftA-cardWidthComment )
    usercommentCards.scrollTo(scrollLeftA - cardWidthComment  , 0 )
    
})
}

let newsCards = document.querySelector('.news-cards')
let newsCard = document.querySelector('.news-card')
let newsNext = document.querySelector('.last-news .next')
let newsPrev = document.querySelector('.last-news .prev')
if(newsCard){
    let cardWidthNews = newsCard.getBoundingClientRect().width
    console.log(cardWidthNews)
    newsNext.addEventListener('click' , ()=>{
        let scrollLeftA = newsCards.scrollLeft
        console.log('scrollLeftA' , scrollLeftA , scrollLeftA+cardWidthNews )
        newsCards.scrollTo(scrollLeftA+cardWidthNews  , 0 )
    })
newsPrev.addEventListener('click' , ()=>{
    let scrollLeftA = newsCards.scrollLeft
    console.log('scrollLeftA' , scrollLeftA , scrollLeftA-cardWidthNews )
    newsCards.scrollTo(scrollLeftA-cardWidthNews , 0 )
    
})
}