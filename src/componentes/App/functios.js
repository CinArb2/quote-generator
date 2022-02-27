
const getRandomColor = () => {
    let arregloHex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let colorHex = "#";

    function getRandoNumber() {
      return Math.floor(Math.random() * arregloHex.length);
    }
  
    for (let i = 1; i < 7; i++){
      colorHex += arregloHex[getRandoNumber()];
    }

    return colorHex;
}

export default getRandomColor;