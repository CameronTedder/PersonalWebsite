document.addEventListener("DOMContentLoaded", function() {
    // Function to handle section navigation
    function handleNavigation(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            console.log(`Removing active from ${section.id}`); // Debug line
            section.classList.remove('active');
        });

        const activeSection = document.getElementById(sectionId);
        console.log(`Adding active to ${activeSection.id}`); // Debug line
        activeSection.classList.add('active');
    }

    // Attach event listeners to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Ensure only the home section is active by default
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
});