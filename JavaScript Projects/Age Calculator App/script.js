function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();

    if (dob >= today) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const ageInMilliseconds = today - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    const result = `
        <p>Your current age is:</p>
        <p>${Math.floor(ageInYears)} years</p>
        <p>${Math.floor(ageInDays)} days</p>
        <p>${Math.floor(ageInMinutes)} minutes</p>
        <p>${Math.floor(ageInSeconds)} seconds</p>
        <p>There are ${daysUntilNextBirthday} days left until your next birthday.</p>
    `;

    document.getElementById("result").innerHTML = result;
}