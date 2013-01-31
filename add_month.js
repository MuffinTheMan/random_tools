// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

function add_month(date)
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