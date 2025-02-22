# React Blog App

This is a simple blog application built with React and React Router. The app allows users to navigate between different pages, view blog posts, and read individual posts.

## Features
- React Router for navigation
- Dynamic routing for individual blog posts
- Component-based structure
- State management using `useState`

## Technologies Used
- React
- React Router
- JavaScript (ES6+)
- CSS for styling

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Therajat14/React-Projects.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blog-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
blog-app/
│── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Blog.js
│   │   ├── PostPage.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── index.css
│── public/
│── package.json
│── README.md
```

## Routes
| Route      | Component  | Description |
|------------|------------|------------|
| `/`       | Home       | Displays home page with latest posts |
| `/about`  | About      | Information about the blog |
| `/contact`| Contact    | Contact form |
| `/blog`   | Blog       | Lists all blog posts |
| `/post/:id` | PostPage  | Displays full post details |
| `*`       | NotFound   | Handles undefined routes |

## License
This project is open-source and available under the [MIT License](LICENSE).

