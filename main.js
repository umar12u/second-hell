
function switchTab(element, section) {

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));


    element.classList.add('active');


    const sectionTitle = document.getElementById('section-title');
    const sectionText = document.getElementById('section-text');
    switch (section) {
        case 'Home':
            sectionTitle.innerText = 'Home';
            sectionText.innerText = 'This is the Home section.';
            break;
        case 'Wallet':
            sectionTitle.innerText = 'Wallet';
            sectionText.innerText = 'This is the Wallet section.';
            break;
        case 'Settings':
            sectionTitle.innerText = 'Settings';
            sectionText.innerText = 'This is the Settings section.';
            break;
        case 'Profile':
            sectionTitle.innerText = 'Profile';
            sectionText.innerText = 'This is the Profile section.';
            break;
        default:
            sectionTitle.innerText = 'Home';
            sectionText.innerText = 'This is the Home section.';
    }
}
