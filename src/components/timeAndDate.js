import { format } from "date-fns";
import differenceInMinutes from "date-fns/differenceInMinutes";
import minutesToHours from "date-fns/minutesToHours";

export const timeAndDate = (dateContent) => {
    const date = new Date(dateContent);
    const formattedDate = format(date, "dd/MM/yyyy HH:mm");
    return formattedDate;
};

export const getPrepTime = (endDateContent, startDateContent) => {
    const created = new Date(startDateContent);
    const finalization = new Date(endDateContent);
    const duration = differenceInMinutes(finalization, created)
    if (duration < 60) {
        return `${duration} min(s)`
    } else {
        return `${minutesToHours(duration)} hora(s)`
    }
}