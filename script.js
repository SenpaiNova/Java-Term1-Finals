import {Tcoffees} from "./data.js"
import {REVIEWS} from "./data.js"

window.addEventListener('DOMContentLoaded', main)

function main() {
    console.log('ok')

    handleSidenav()

    generateCoffee()

    generateReview()

}

function Ratings(stars) {
    const filled = `<ion-icon name="star"></ion-icon>`
    const nofill = `<ion-icon name="star-outline"></ion-icon>` 

    let ratingTextcontent = ''
    for (let x = 0; x < stars; x++) {
        ratingTextcontent += filled
    }
    for (let x = 0; x < 5 - stars; x++) {
        ratingTextcontent += nofill
    }

    return ratingTextcontent
}

function generateReview() {
    const reviewss = REVIEWS.map((reviews) => {
        return `
        <div class="reviews">

            <article class="review1">
                <h4>${reviews.name}</h4>
                <p>
                    ${reviews.comment}
                </p>
                <div class="rating">
                    ${Ratings(reviews.rating)}
                </div>
                <h5>${reviews.quality}</h5>

            </article>
            </div>
        `
    })

    const reviewssTextContent = reviewss.join('')
    const reviewssWrapper = document.querySelector('.review-wrapper')
    reviewssWrapper.innerHTML = reviewssTextContent
}

function generateCoffee() {
    const coffees = Tcoffees.map((coffee) => {
        return `
        <div class="coffee-serve">
            <article class="coffee-serve-price">
                <h4>${coffee.title}</h4>
                <h5>${coffee.price}</h5>
                <p>
                    ${coffee.desc}
                </p>
            </article>
            </div>
        `
    })

    const coffeesTextContent = coffees.join('')
    const coffeesWrapper = document.querySelector('.coffees-wrapper')
    coffeesWrapper.innerHTML = coffeesTextContent
}

function handleSidenav() {
    const menuBtn = document.querySelector('#menuBtn')
    menuBtn.addEventListener('click', () => {
        // console.log('p')

        document.querySelector('#sidenav').classList.toggle('showSidenav')
    })

}

