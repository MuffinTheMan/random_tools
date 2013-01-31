// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

/*
 * Dependent on date_diff.js
 */
function date_range(date1,date2)
{
    result = new Array();
    
    if(date_diff(date1,date2) < 0) // date1 precedes date2
    {
        result[0] = date1;
        var tempDate = date_add(date1,1);
        while(date_diff(tempDate,date2) < 1)
        {
            result.push(tempDate);
            tempDate = date_add(tempDate,1);
        }
        return result;
    }
    else if(date_diff(date1,date2) > 0) // date2 precedes date1
    {
        result[0] = date2;
        var tempDate = date_add(date2,1);
        while(date_diff(tempDate,date1) < 1)
        {
            result.push(tempDate);
            tempDate = date_add(tempDate,1);
        }
        return result;
    }
    else // The dates are the same (unless the input format is incorrect...may add testing later)
    {
        return date1;
    }
}