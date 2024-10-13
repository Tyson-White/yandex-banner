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
    
    const screenH = window.screen.height;

    const multipler = screenH < 810 ? 3.4 : screenH < 1080 ? 3.2 : 0
    const cartOffset = screenH > 1080 ? 230 : 0

    return cartRect.y + cartOffset - targetParentRect.y - (targetRect.height - targetParentRect.height * multipler);

}

export const toggleTransition = (target, duration = '0.5s', delay = 600) => {

    target.style.transition = duration

    setTimeout(() => {

        target.style.transition = '0s'
    }, delay)

}

