import { createContext } from "react";


/** Context API = it is like global
 *  access of any file  content without passing prop
*/
// it is convention to write it in pascal case
//agar kuch nahi denge to white ho jaayega background color
const ThemeContext = createContext('lightMode');

export  default ThemeContext;