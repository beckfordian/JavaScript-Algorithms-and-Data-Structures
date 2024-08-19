document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    checkBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        
        if (text === '') {
            alert('Please input a value');
            return;
        }

        const isPalindrome = checkPalindrome(text);
        result.textContent = `${text} ${isPalindrome ? 'is' : 'is not'} a palindrome`;
    });

    function checkPalindrome(str) {
        
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        
        return cleanStr === cleanStr.split('').reverse().join('');
    }
});