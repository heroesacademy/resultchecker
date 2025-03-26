function initializeFlutterwavePayment(amount, email, tx_ref) {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_YOUR_PUBLIC_KEY",
    tx_ref: tx_ref,
    amount: amount,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: email,
    },
    callback: function(response) {
      verifyPayment(response.transaction_id);
    },
    onclose: function() {
      // Handle payment modal close
    }
  });
}

function verifyPayment(transactionId) {
  fetch('/server/api/payments/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transactionId })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showPaymentSuccess();
    } else {
      showPaymentError();
    }
  });
}