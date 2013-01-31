// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

function toInt(x)
{
    var result = +x;
    if(isNaN(result))
    {
        return 0;
    }
    else
    {
        return result;
    }
}

function xINy(x,y)
{
    for(var i = 0; i < x.length; i++)
    {
        if(y == x[i].month)
        {
            return true;
        }
    }
    return false;
}

function xLESSy(x,y)
{
    var x_year = x.substr(0,4);
    var x_month = x.substr(5,2);
    
    var y_year = y.substr(0,4);
    var y_month = y.substr(5,2);
    
    if(x_year < y_year || (x_month < y_month && x_year <= y_year))
    {
        return true;
    }
    
    return false;
}

/*
 * Currently finds the difference (in months) between two dates (x,y). The difference will be negative if x precedes y.
 * Works for any two dates in the format yyyy[./,-]mm*
 * Example: 2008-09-19 16:48:26
 */
function date_diff(x,y)
{
    var x_year = x.substr(0,4);
    var x_month = x.substr(5,2);
    
    var y_year = y.substr(0,4);
    var y_month = y.substr(5,2);
    
    var year_diff = (+x_year - +y_year) * 12;
    var month_diff = +x_month - +y_month;
    
    return (year_diff + month_diff);
}

function addMonth(date)
{
    var year = date.substr(0,4);
    year = +year;
    
    var month = date.substr(5,2);
    month = +month;
    
    if(month == 12)
    {
        year++;
        month = '01';
    }
    else
    {
        month++;
        if(month < 10)
        {
            month = String(month);
            month = '0' + month;
        }
    }
    
    return (String(year) + '-' + String(month));
}

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

function date_range(date1,date2)
{
    if(date_diff(date1,date2) < 0)
    {
        
    }
    else if(date_diff(date1,date2) > 0)
    {
        
    }
    else
    {
        return date1; // The dates are the same
    }
}