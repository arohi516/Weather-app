export function formatDate(isoDateString) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = new Date(isoDateString);
    const day = date.getDate();
    const month = months[date.getMonth()];

    const today = new Date();
    const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

    if (isToday) {
        return `Today ${day} ${month}`;
    } else {
        return `${day} ${month}`;
    }
}

export function timestampToTime(isoString) {
    const date = new Date(isoString);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

export function getDayOfWeek(timestamp) {
    const date = new Date(timestamp);
    const dayOfWeek = date.getDay();
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return daysOfWeek[dayOfWeek];
}
