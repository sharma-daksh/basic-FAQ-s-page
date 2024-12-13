const allbuttons=document.querySelectorAll('.faq-icon');





document.querySelectorAll('.faq-icon').forEach(button => {
    button.addEventListener('click', function() {
        const faqDropdown = this.closest('.faq-dropdown');
        const faqDropdownBody = faqDropdown.querySelector('.faq-dropdown-body');

        // Check if the clicked dropdown is currently open
        const isOpen = faqDropdownBody.classList.contains('open');

        // Close all dropdown bodies
        document.querySelectorAll('.faq-dropdown-body').forEach(body => {
            body.classList.remove('open'); // Close all
        });

        // Remove 'open' class from all buttons
        document.querySelectorAll('.faq-icon').forEach(btn => {
            btn.classList.remove('open');
        });

        // If the clicked dropdown was not open, open it
        if (!isOpen) {
            faqDropdownBody.classList.add('open'); // Open the clicked dropdown
            this.classList.add('open'); // Change button icon to minus
        }
    });
});