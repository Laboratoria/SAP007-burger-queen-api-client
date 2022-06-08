import { differenceInMinutes, minutesToHours } from "date-fns";

export const preparationTime = (arrivalTime, exitTime) =>{
    const createdAt = new Date(arrivalTime);
    const processedAt = new Date(exitTime);
    const preparation = differenceInMinutes(processedAt, createdAt)
    if (preparation < 60){
        return `${preparation} min(s)`
    } else {
        return`${minutesToHours(preparation)} hora(s)`
    }
}