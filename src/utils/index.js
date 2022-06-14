import { differenceInMinutes, minutesToHours, format } from "date-fns";

export const formatDateHour = (standardTime) => {
    const date = new Date(standardTime);
    const hour = format(date, "dd/MM/yyyy HH:mm");
    return hour;
}

export const preparationTime = (arrivalTime, exitTime) => {
    const createdAt = new Date(arrivalTime);
    const processedAt = new Date(exitTime);
    const preparation = differenceInMinutes(processedAt, createdAt)
    if (preparation < 60) {
        return `${preparation} min(s)`
    } else {
        return `${minutesToHours(preparation)} hora(s)`
    }
}