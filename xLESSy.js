// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

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