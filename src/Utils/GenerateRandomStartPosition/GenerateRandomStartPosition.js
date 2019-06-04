
const GenerateRandomStartPosition = (rows, columns) => {
 return [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)];
}

export default GenerateRandomStartPosition;
