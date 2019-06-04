
const CheckForWinner = (r2d2Position, obiPosition) => {
 return JSON.stringify(r2d2Position) === JSON.stringify(obiPosition);
};

export default CheckForWinner;
