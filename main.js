const themeToggle = document.getElementById('btn-check');
const toggleLabel = document.getElementById('toggle-label');

//////////////////////////////////////////////////////////////////////////////
//arrays of body parts
//////////////////////////////////////////////////////////////////////////////
const legBodyParts = [
    "Hip",
    "Thigh",
    "Knee",
    "Calf"
  ];

  const armBodyParts = [
    "Shoulder",
    "Upper arm",
    "Forearm",
    "Wrist",
    "Bicep",
    "Tricep"
  ];

  const coreBodyParts = [
    "Abdomen",
    "Pelvis",
    "Lower back",
    "Obliques"
  ];

  const exerciseMode = [
    "Easy",
    "Medium",
    "Hard"
  ]
  //////////////////////////////////////////////////////////////////////////////

// Check the user's saved theme preference (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleLabel.textContent = savedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// Toggle theme and update local storage
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleLabel.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

//confirms selection of intensity and target area from dropdown menu and saves selection to local storage
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item-intensity');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You selected: ${this.textContent}`);
        });
    });
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.setItem('intensity', this.textContent);
        });
    });
});   

document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item-target');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You selected: ${this.textContent}`);
        });
    });
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.setItem('target', this.textContent);
        });
    });
});   



