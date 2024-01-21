# Rock-Paper-Scissors-Game
Developing the popular "ROCK-PAPER-SCISSORS-GAME" making use of frontend technologies such as HTML, CSS and  JavaScript.

HTML (index.html)
The HTML file sets up the structure of the Rock Paper Scissors game. It includes the necessary metadata, such as the character set and viewport settings. The main content consists of an <h1> heading, three game choices represented by <div> elements with associated images, a score board with two sections for the player and computer scores, and a message container displaying game-related messages. Additionally, external styles are linked through a <link> tag, and the JavaScript logic is linked through a <script> tag at the end of the body.

CSS (style.css)
The CSS file defines the styling for the Rock Paper Scissors game. It starts with a global reset, setting margins and padding to zero and ensuring text alignment at the center. The heading (<h1>) has a distinctive styling with a background color of #081b31, white text, and a fixed height. The game choices (<div> with class .choice) are styled as circular elements with specific dimensions, and their associated images are formatted with rounded borders. The choices are aligned in the center with a gap of 3rem. When hovered over, the choices change their background color to black, providing a visual indication of interactivity. The score board and message container are centered and styled for readability, using specific font sizes and background colors.

JavaScript (app.js)
The JavaScript file contains the logic for the Rock Paper Scissors game. It initializes variables for user and computer scores, selects relevant HTML elements using querySelector, and defines functions for generating the computer's choice, handling a draw game, showing the winner, and playing the overall game. Event listeners are added to each game choice element, triggering the game logic when a user clicks on a choice. The game then compares the user's choice with the computer's choice, determines the winner, updates scores, and displays messages accordingly.












