document.getElementById('valid-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var errorMessage = document.querySelector('.error-message');
    var successMessage = document.querySelector('.success-message');

    if (n2 <= n1) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
});