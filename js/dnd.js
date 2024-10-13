import { checkCartCollision, distanceToCartSurface, toggleTransition } from "./utils.js"

export class DragNDrop {

    constructor(cart) {

        this.cart = cart;
        this.addedCount = 0

        this.isDrag = false;
        this.draggedTarget = null;

        this.shifts = {
            x: 0,
            y: 0,
        }

    }

    setShifts(element, clientX, clientY) {

        this.shifts.x = clientX - element.getBoundingClientRect().x;
        this.shifts.y = clientY - element.getBoundingClientRect().y;

    }

    handleDragStart(event) {

        const target = event.target.closest('.container__showcase__grid__item__product');

        if (!target) return;

        this.isDrag = true;
        this.draggedTarget = target;

        this.setShifts(target, event.clientX, event.clientY);

    }

    handleDrag(event) {

        if (this.isDrag && this.draggedTarget) {

            const parent = this.draggedTarget.parentNode;

            this.draggedTarget.style.left = event.clientX - parent.getBoundingClientRect().x - this.shifts.x + "px";
            this.draggedTarget.style.top = event.clientY - parent.getBoundingClientRect().y - this.shifts.y + "px";
    
        }

    }

    handleDragEnd() {

        if (this.isDrag && this.draggedTarget) {

            if (!checkCartCollision(this.draggedTarget, this.cart)) {
    
                this.draggedTarget.style.left = 0 + "px"
                this.draggedTarget.style.top = 0 + "px"
                
                toggleTransition(this.draggedTarget)
                
            } else {

                this.handleMoveToCart(this.draggedTarget)
                this.addedCount += 1
            }
        }
    
        this.isDrag = false;
        this.draggedTarget = null;

    }

    handleMoveToCart() {

        toggleTransition(this.draggedTarget);

        this.draggedTarget.style.top = distanceToCartSurface(this.draggedTarget, this.cart) + 'px';

    }

}
