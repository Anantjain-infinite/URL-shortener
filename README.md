# URL Shortener

A simple URL shortener web application built with Node.js, Express, MongoDB, and EJS. This project allows users to create short URLs for long links, track analytics for each short URL (number of clicks and visit history), and manage user authentication (signup, login).

## Features

- **User Authentication**: Signup and login functionality, using sessions (in-memory).
- **Short URL Generation**: Generate a unique, short URL for any provided link.
- **Analytics Dashboard**: View all your generated short URLs, along with click counts and visit history.
- **Click Tracking**: Each visit to a short URL is logged (timestamp).
- **Protected Routes**: Only logged-in users can generate short URLs and view analytics.
- **EJS Templating**: Dynamic HTML pages rendered using EJS templates.

## Project Structure

```
.
├── controllers/
│   ├── home.js
│   ├── url.js
│   └── user.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── url.js
│   └── user.js
├── routes/
│   ├── analytics.js
│   ├── home.js
│   ├── url.js
│   └── user.js
├── services/
│   └── auth.js
├── views/
│   ├── analytics.ejs
│   ├── generated.ejs
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── db.js
├── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) (or local MongoDB)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anantjain-infinite/URL-shortener.git
   cd URL-shortener
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - The connection string is currently hardcoded in `index.js`. You can update it with your own MongoDB URI if needed.

4. **Start the application:**
   ```bash
   node index.js
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

## Usage

- **Home Page:** Enter a URL to generate a short URL (login required).
- **Signup/Login:** Create a new account or login from the navigation links.
- **Analytics:** View all your generated URLs, their short IDs, redirect links, and how many times they've been visited.
- **Short URL Redirection:** Use the `/url/{shortId}` route to redirect to the original URL.

## Important Files

- **controllers/**: Route handler logic for URLs, users, and home.
- **middlewares/auth.js**: Authentication and session-checking middleware.
- **models/**: Mongoose schemas for User and URL.
- **services/auth.js**: Simple in-memory session management.
- **views/**: EJS templates for rendering HTML pages.
- **index.js**: Main server setup and route registration.

## Security Notice

- Passwords are stored in plaintext in the database for demo purposes. **Do not use this code in production without adding password hashing and other security improvements.**
- Session management uses an in-memory map; restart will log out all users.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

## Author

[Anant Jain](https://github.com/Anantjain-infinite)
