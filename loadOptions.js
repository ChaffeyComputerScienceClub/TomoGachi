const options = document.querySelectorAll('.sidebar-option');

options.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        options.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        document.body.style.backgroundColor = getComputedStyle(this).backgroundColor;
        if (this.id == 'option1'){
            loadProducts();
        }
        else if(this.id == 'option2') {
            
        }
        // else if(this.id == 'option3') {
            
        // }
        // else if(this.id == 'option4') {
            
        // }
});
});