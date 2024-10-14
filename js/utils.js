export const checkCartCollision = (item, cart) => {

    const CART_OFFSET_X = 40

    const itemRect = item.getBoundingClientRect()
    const cartRect = cart.getBoundingClientRect()

    const itemXCenter = itemRect.x + itemRect.width / 2
    const itemYCenter = itemRect.y + itemRect.height / 2

    if (cartRect.x + CART_OFFSET_X > itemXCenter) return false
    if (cartRect.y > itemYCenter) return false
    if (cartRect.x + cartRect.width - CART_OFFSET_X < itemXCenter) return false
    if (cartRect.y + cartRect.height < itemYCenter) return false

    return true

}

export const distanceToCartSurface = (target, cart) => {

    const cartRect = cart.getBoundingClientRect();
    const targetParentRect = target.parentNode.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    
    const cartOffset = (cartRect.y + cartRect.height / 2).toFixed(0)

    return cartOffset - (targetParentRect.y + (targetRect.height));

}

export const toggleClassName = (target, className, delay = 500) => {
    target.classList.add(className)

    setTimeout(() => {

        target.classList.toggle(className)
    }, delay)
}

export const toggleTransition = (target, duration = '0.5s', delay = 600) => {

    target.style.transition = duration

    setTimeout(() => {

        target.style.transition = '0s'
    }, delay)

}

export const removeAllFromCart = () => {
    const productsElems = document.querySelectorAll('.container__showcase__grid__item__product')

    productsElems.forEach(elem => { 
        toggleTransition(elem)
        elem.style.top = 0 + "px"
        elem.style.left = 0 + "px"
    })
}

