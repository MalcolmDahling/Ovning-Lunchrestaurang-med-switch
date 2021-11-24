meny = ['', 'Soppa', 'Pasta', 'Köttbullar', 'Pannkaka', 'Tacos', 'Grillat']; //Söndag = 0


let day = new Date().getDay();

switch (day){
    case 0:
        document.body.append( 'Stäng på söndagar.' );
        break;

    case 1:
        document.body.append( 'Måndag, ' + 'dagens rätt: ' + meny[day] );
        break;

    case 2:
        document.body.append( 'Tisdag, ' + 'dagens rätt: ' + meny[day] );
        break;

    case 3:
        document.body.append( 'Onsdag, ' + 'dagens rätt: ' + meny[day] );
        break;

    case 4:
        document.body.append( 'Torsdag, ' + 'dagens rätt: ' + meny[day] );
        break;

    case 5:
        document.body.append( 'Fredag, ' + 'dagens rätt: ' + meny[day] );
        break;

    case 6:
        document.body.append( 'Lördag, ' + 'dagens rätt: ' + meny[day] );
        break;
}