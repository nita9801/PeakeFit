// results.js

//creates function which displays exercise output in an alert based on selections from dropdown menu which were stored in local storage
function displayResult(message) {
    const resultContainer = localStorage.getItem('intensity', 'target');
    resultContainer.textContent = message;
}

document.addEventListener('DOMContentLoaded', function() {
    const intensity = localStorage.getItem('intensity');
    const target = localStorage.getItem('target');

    function checkAndDisplayResult(intensity, target) {
        if (intensity === 'easy' && target === 'arms') {
            alert('10 pushups');
        } else if (intensity === 'medium' && target === 'arms') {
            alert('25 pushups');
        } else if (intensity === 'hard' && target === 'arms') {
            alert('50 pushups');
        } else if (intensity === 'easy' && target === 'core') {
            alert('10 situps');
        } else if (intensity === 'medium' && target === 'core') {
            alert('25 situps');
        } else if (intensity === 'hard' && target === 'core') {
            alert('50 situps');
        } else if (intensity === 'easy' && target === 'legs') {
            alert('10 squats');
        } else if (intensity === 'medium' && target === 'legs') {
            alert('25 squats');
        } else if (intensity === 'hard' && target === 'legs') {
            alert('50 squats');
        }
    }

    checkAndDisplayResult(intensity, target);

    document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
        item.addEventListener('click', function() {
            const newIntensity = localStorage.getItem('intensity');
            const newTarget = localStorage.getItem('target');
            checkAndDisplayResult(newIntensity, newTarget);
        });
    });
});
