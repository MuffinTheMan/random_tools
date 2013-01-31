// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

/*
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