//Constants Import
import { NORTH, SOUTH, EAST, WEST } from '../../constants.js';

const GenerateRandomStartDirection = () => {
 return [NORTH, SOUTH, WEST, EAST][Math.floor(Math.random() * 4)];
}

export default GenerateRandomStartDirection;
