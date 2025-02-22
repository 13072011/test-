document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 20 },
        // Ajoutez plus de produits ici
    ];

    const cart = [];

    const productElements = document.querySelectorAll('.product');
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    productElements.forEach(productElement => {
        productElement.querySelector('.add-to-cart').addEventListener('click', () => {
            const productId = parseInt(productElement.getAttribute('data-id'));
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.product.id === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(cartItem => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <p>${cartItem.product.name} - ${cartItem.product.price}€ x ${cartItem.quantity}</p>
            `;

            cartItemsElement.appendChild(cartItemElement);
            totalPrice += cartItem.product.price * cartItem.quantity;
        });

        totalPriceElement.textContent = totalPrice;
    }
});