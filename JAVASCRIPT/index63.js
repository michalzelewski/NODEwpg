const year = 2007;
let champion/* = 2007*/;

if (year < 2006 || year > 2017 /*|| champion < 2006 || champion > 2017*/) {
    console.log(`Sorry, please try a different year`);
} else {
    switch (year) {
        case 2006:
            champion = `Carolina Hurricanes`;
            break;        
        case 2007:
            champion = `Anaheim Ducks`;
            break;
        case 2008:
            champion = `Detroit Red Wings`;
            break;
        case 2009:
            champion = `Pittsburgh Penguinas`;
            break;
        case 2010:
            champion = `Chicago Blackhawks`;
            break;
        case 2011:
            champion = `Boston Bruins`;
            break;
        case 2012:
            champion = `Los Angeles Kings`;
            break;
        case 2013:
            champion = `Chicago Blackhawks`;
            break;
        case 2014:
            champion = `Los Angeles Kings`;
            break;
        case 2015:
            champion = `Chicago Blackhawks`;
            break;
        case 2016:
            champion = `Pittsburgh Penguinas`;
            break;
        case 2017:
            champion = `Pittsburgh Penguinas`;
            break;
        default: 
        }
    console.log(`${champion} was the ${year} NHL Champion`);
}