// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)

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