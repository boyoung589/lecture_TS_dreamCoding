/**
 * Let's make a game 🕹
 */
//01)
// const position1 = { x: 0, y: 0};
// type Moving = 'up' | 'down' | 'left' | 'right';
// const move1 = (moving: Moving) => {
//     switch(moving) {
//         case 'up':
//             position1.y += 1;
//             break;
//         case 'down':
//             position1.y -= 1;
//             break;
//         case 'left':
//             position1.x -= 1;
//             break;
//         case 'right':
//             position1.x += 1;
//             break;
//         default:
//             throw new Error('wrong position1');
//     }    
// }

//02
let position1 = { x: 0, y: 0 }
type Command = 'up'| 'down'| 'left'| 'right';
const move1 = (command: Command) => {
    switch(command){
        case 'up':
            position1.y += 1;
            break;
        case 'down':
            position1.y -= 1;
            break;
        case 'left':
            position1.x -= 1;
            break;
        case 'right':
            position1.x += 1;
            break;
        default:
            throw new Error(`${command} Error`)
    }
}

console.log(position1); // { x: 0, y: 0}
move1('up');
console.log(position1); // { x: 0, y: 1}
move1('down');
console.log(position1); // { x: 0, y: 0}
move1('left');
console.log(position1); // { x: -1, y: 0}
move1('right');
console.log(position1); // { x: 0, y: 0}