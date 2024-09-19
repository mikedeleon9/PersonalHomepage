
import Website from "../components/Website";
import { connectionsImage, wordleImage, immaculateImage, sudokuImage } from "../assets/images";

const gameLinks = [

    new Website ("Wordle", "https://www.nytimes.com/games/wordle/index.html", wordleImage),
    new Website ("Connections", "https://www.nytimes.com/games/connections", connectionsImage),
    new Website ("Killer Sudoku", "https://www.dailykillersudoku.com/", sudokuImage),
    new Website ("Immaculate Grid", "https://www.immaculategrid.com/", immaculateImage)
] 
export default gameLinks;