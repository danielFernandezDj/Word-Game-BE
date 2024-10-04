# Word world

## Description
Word World is a web-based application that mimics popular word-guessing games, Wordle Sudoku and a Spelling Bee. For Wordle, players have six attempts to guess a randomly selected five-letter word. The application provides immediate feedback on each guess, indicating which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are not in the word at all.
Sudoku is a logic-based number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid contain all the digits from 1 to 9.
Spelling Bee is a word game that involves listening to a word being said and then trying to guess the word. Guessing the word correctly earns the player points and adds them to their total score.

## Demo
You can view a live demo of the application at [Demo Link](https://word-world-be.onrender.com/) 

## Technologies
- **Frontend**: 
  - React
  - Axios
  - React Router
  - Tailwind CSS (for styling)
  
- **Backend**: 
  - Node.js
  - Express
  - PostgreSQL (for the dictionary database)
  - dotenv (for environment variable management)
  
- **Development Tools**:
  - npm
  - nodemon (for development)
  - cors (for handling cross-origin requests)

## Technical Information
### Project Structure


### Relevant Endpoints
- **GET /wordle/random-word**: Fetches a random five-letter word from the dictionary.
- **POST /wordle/validate-word**: Validates if a given word exists in the dictionary.
- **GET /**: Serves the React frontend application.
- **GET /users**: User-related endpoints (if applicable).

### Running the Application
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Word-Game-BE.git
   cd Word-Game-BE
   ```
   ```bash
   git clone https://github.com/yourusername/Word-Game-FE.git
   cd Word-Game-FE
   ```

2. **Set up the backend**:
   - Navigate to the `Word-Game-BE` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Word-Game-BE` directory and configure your environment variables.
   - Start the backend server:
     ```bash
     NODE_ENV=production PORT=8000 node ./bin/www
     ```

3. **Set up the frontend**:
   - Navigate to the `Word-Game-FE` directory.
   - Install dependencies:
     ```bash
     git clone https://github.com/yourusername/Word-Game-FE.git
     cd Word-Game-FE
     npm install
     ```
   - Build the React app for production:
     ```bash
     npm run build
     ```

4. **Access the application**:
   - Open your browser and go to `http://localhost:8000`.

## Issues
- **Routing Issues**: Ensure that the catch-all route in the Express server is correctly set up to serve the `index.html` file for client-side routing.
- **Environment Variables**: Make sure that the environment variables are correctly configured in both the frontend and backend.
- **Database Connection**: Ensure that the PostgreSQL database is running and accessible, and that the dictionary table is populated with valid words.

## Future Improvements
- Implement methods to track player scores and statistics.
- Add a timer for each round to increase the challenge.
- Enhance the UI/UX with animations and better styling.
- Implement a leaderboard to display top scores.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
