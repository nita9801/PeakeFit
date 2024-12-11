// results.js
//display exercise output result in a popup window on results.html page
function displayResult(message) {
    // Check if the popup already exists
    if (!document.getElementById('resultPopup')) {
        // Create the popup container
        const popup = document.createElement('div');
        popup.id = 'resultPopup';
        popup.style.position = 'fixed';
        popup.style.top = '20%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -20%)';
        popup.style.width = '300px';
        popup.style.backgroundColor = 'white';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        popup.style.borderRadius = '10px';
        popup.style.padding = '20px';
        popup.style.zIndex = '1000';
        popup.style.textAlign = 'center';

        // Add the result message
        const resultMessage = document.createElement('p');
        resultMessage.id = 'resultMessage';
        popup.appendChild(resultMessage);

        // Add the close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '10px';
        closeButton.onclick = () => {
            document.body.removeChild(popup);
        };
        popup.appendChild(closeButton);

        // Add the popup to the document body
        document.body.appendChild(popup);
    }

    // Update the message in the popup
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    document.getElementById('resultPopup').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const intensity = localStorage.getItem('intensity');
    const target = localStorage.getItem('target');

    function checkAndDisplayResult(intensity, target) {
        if (intensity === 'easy' && target === 'arms') {
            displayResult('10 pushups');
        } else if (intensity === 'medium' && target === 'arms') {
            displayResult('25 pushups');
        } else if (intensity === 'hard' && target === 'arms') {
            displayResult('50 pushups');
        } else if (intensity === 'easy' && target === 'core') {
            displayResult('10 situps');
        } else if (intensity === 'medium' && target === 'core') {
            displayResult('25 situps');
        } else if (intensity === 'hard' && target === 'core') {
            displayResult('50 situps');
        } else if (intensity === 'easy' && target === 'legs') {
            displayResult('10 squats');
        } else if (intensity === 'medium' && target === 'legs') {
            displayResult('25 squats');
        } else if (intensity === 'hard' && target === 'legs') {
            displayResult('50 squats');
        }
    }

    checkAndDisplayResult(intensity, target);

    document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
        item.addEventListener('click', function () {
            const newIntensity = localStorage.getItem('intensity');
            const newTarget = localStorage.getItem('target');
            checkAndDisplayResult(newIntensity, newTarget);
        });
    });
});

