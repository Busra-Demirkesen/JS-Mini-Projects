const userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];

const result = document.getElementById('result');

function calculateAge() {
    const birthDate = new Date(userInput.value);

    if (isNaN(birthDate)) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    const d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    const y1 = birthDate.getFullYear();

    const today = new Date();
    const d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    // Eğer doğum günü bu yıl henüz gelmediyse yılı düşür!
    if (m2 < m1 || (m2 === m1 && d2 < d1)) {
        y3--;
    }

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.textContent = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

const button = document.getElementById('button');
button.addEventListener('click', calculateAge);
