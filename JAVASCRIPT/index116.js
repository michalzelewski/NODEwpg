let colour = 'yellow';

function getHexaColor(color) {

    switch (color) {
        case ('white'):
            return '#FFFFFF'
            break;
        case ('black'):
            return '#000000'
            break;
        case ('blue'):
            return '#0b24fb'
            break;
        case ('green'):
            return '#0e7e12'
            break;
        case ('yellow'):
            return '#fffd38'
            break;
        case ('pink'):
            return '#fec1cc'
            break;    
        default:
      }
}

console.log(getHexaColor(colour));