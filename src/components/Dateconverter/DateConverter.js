export const DateFormtatter = (dateItem) => {
    const date = new Date(dateItem);
    const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    });
    return formattedDate
}