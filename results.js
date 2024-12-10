results.js

//draft code
//functions for different exercise outputs based on input selections

document.addEventListener('DOMContentLoaded', function() {
    const intensity = localStorage.getItem('intensity');
    const target = localStorage.getItem('target');
//input: easy and arms-- output alert: '10 pushups'
    if (intensity === 'easy' && target === 'arms') {
        alert('10 pushups');
    }

    document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
        item.addEventListener('click', function() {
            const newIntensity = localStorage.getItem('intensity');
            const newTarget = localStorage.getItem('target');

            if (newIntensity === 'easy' && newTarget === 'arms') {
                alert('10 pushups');
            }
        });
    });
//input: medium and arms-- output alert: '25 pushups'
    if (intensity === 'medium' && target === 'arms') {
        alert('25 pushups');
    }

    document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
        item.addEventListener('click', function() {
            const newIntensity = localStorage.getItem('intensity');
            const newTarget = localStorage.getItem('target');

            if (newIntensity === 'medium' && newTarget === 'arms') {
                alert('25 pushups');
            }
        });
    });
//input: hard and arms-- output alert: '50 pushups'
if (intensity === 'hard' && target === 'arms') {
    alert('50 pushups');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
    item.addEventListener('click', function() {
        const newIntensity = localStorage.getItem('intensity');
        const newTarget = localStorage.getItem('target');

        if (newIntensity === 'hard' && newTarget === 'arms') {
            alert('50 pushups');
        }
    });
});
//input: easy and core-- output alert: '10 situps'
if (intensity === 'easy' && target === 'core') {
alert('10 situps');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
    const newIntensity = localStorage.getItem('intensity');
    const newTarget = localStorage.getItem('target');

    if (newIntensity === 'easy' && newTarget === 'core') {
        alert('10 situps');
    }
});
});
//input: medium and core-- output alert: '25 situps'
if (intensity === 'medium' && target === 'core') {
alert('25 situps');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
    const newIntensity = localStorage.getItem('intensity');
    const newTarget = localStorage.getItem('target');

    if (newIntensity === 'medium' && newTarget === 'core') {
        alert('25 situps');
    }
});
});
//input: hard and core-- output alert: '50 situps'
if (intensity === 'hard' && target === 'core') {
alert('50 situps');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
const newIntensity = localStorage.getItem('intensity');
const newTarget = localStorage.getItem('target');

if (newIntensity === 'hard' && newTarget === 'core') {
    alert('50 situps');
}
});
});
//input: easy and legs-- output alert: '10 squats'
if (intensity === 'easy' && target === 'legs') {
alert('10 squats');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
    const newIntensity = localStorage.getItem('intensity');
    const newTarget = localStorage.getItem('target');

    if (newIntensity === 'easy' && newTarget === 'legs') {
        alert('10 squata');
    }
});
});
//input: medium and legs-- output alert: '25 squats'
if (intensity === 'medium' && target === 'legs') {
alert('25 squats');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
    const newIntensity = localStorage.getItem('intensity');
    const newTarget = localStorage.getItem('target');

    if (newIntensity === 'medium' && newTarget === 'legs') {
        alert('25 squats');
    }
});
});
//input: hard and legs-- output alert: '50 squats'
if (intensity === 'hard' && target === 'legs') {
alert('50 squats');
}

document.querySelectorAll('.dropdown-item-intensity, .dropdown-item-target').forEach(item => {
item.addEventListener('click', function() {
const newIntensity = localStorage.getItem('intensity');
const newTarget = localStorage.getItem('target');

if (newIntensity === 'hard' && newTarget === 'legs') {
    alert('50 squats');
}
});
});
});