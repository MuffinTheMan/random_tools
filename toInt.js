// Originally written by Caleb Larsen
// Free to be used and/or modified for any legal purpose--please give credit to the author (Caleb Larsen)
/*
 * Very specific function to convert to an integer and return 0 when
 * we get a whacky NaN.
 */
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