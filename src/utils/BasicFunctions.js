export function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);

    const options = { day: "numeric", month: "long", year: "numeric" };

    // Format the date using 'en-GB' locale to get the day before the month
    return date.toLocaleDateString("en-GB", options);
}

export function formatPrice(number) {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
}
export function formatNumber(number) {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    });
    return formatter.format(number);
}