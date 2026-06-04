let currentPrice = 550;
let qty = 1;

function updatePrice(price, btn) {
    currentPrice = price;
    
    // Update UI active state
    document.querySelectorAll('.amount-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    
    calculateTotal();
}

function adjustQty(val) {
    qty = Math.max(1, qty + val);
    document.getElementById('qty').value = qty;
    calculateTotal();
}

function calculateTotal() {
    const total = currentPrice * qty;
    document.getElementById('total-price').innerText = `${total} BDT`;
}