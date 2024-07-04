export function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const options: {} = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}