// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

/*
 * Adds the number of months passed (months) from the date passed (date) and returns the resulting date in yyyy-mm format
 * If (months) is negative, that number of months will be subtracted from the date (date).
 */
function date_add(date, months)
{
    var year = date.substr(0,4);
    year = +year;
    
    var month = date.substr(5,2);
    month = +month;
    
    month += months;
    if(month < 1)
    {
        while(month < 1)
        {
            month += 12;
            year--;
        }
    }
    
    if(month > 12)
    {
        while(month > 12)
        {
            month -= 12;
            year++;
        }
    }

    if(month < 10)
    {
        month = String(month);
        month = '0' + month;
    }
    
    return (String(year) + '-' + String(month));
}