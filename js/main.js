import { DragNDrop } from "./dnd.js"
import { removeAllFromCart } from "./utils.js"

console.log('Yandex Drag and Drop. \nGITHUB: https://github.com/Tyson-White/yandex-banner')

const cart = document.querySelector('.container__cart')
const button = document.querySelector('.container__payment')

const dnd = new DragNDrop(cart)

document.addEventListener('mousedown ', (e) => dnd.handleDragStart(e))

document.addEventListener('mousemove', (e) => dnd.handleDrag(e))

document.addEventListener('mouseup', () => {

    dnd.handleDragEnd()

    if (dnd.addedCount >= 3) {
        button.classList.add('payment_show')
    }
    
})

document.addEventListener('pointerdown', (e) => dnd.handleDragStart(e))

document.addEventListener('pointermove', (e) => dnd.handleDrag(e))

document.addEventListener('pointerup', () => {

    dnd.handleDragEnd()

    if (dnd.addedCount >= 3) {
        button.classList.add('payment_show')
    }
    
})


if (cart) {
    cart.addEventListener('click', (e) => removeAllFromCart(e))
}
