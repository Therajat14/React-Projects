export const postsDB = [
    {
        id: 1,
        title: "Getting Started with React",
        datetime: "2025-02-23T10:00:00Z",
        body: "React is a popular JavaScript library for building user interfaces, especially single-page applications. To get started, you'll need Node.js installed. First, create a new project using Create React App by running `npx create-react-app my-app`. Once set up, navigate into your project folder and run `npm start` to launch the development server. React components are the building blocks of your UI, allowing you to split your app into reusable pieces.\n\nReact follows a declarative approach, meaning you describe how your UI should look, and React takes care of updating the DOM efficiently. It uses a virtual DOM to enhance performance, making UI updates smoother. Components in React can be either functional or class-based, with functional components being the preferred choice in modern development.\n\nState management in React is handled using hooks like `useState` and `useEffect`. These hooks allow developers to store and manage component-specific data, trigger re-renders when data changes, and handle side effects such as API calls or event listeners."
    },
    {
        id: 2,
        title: "Understanding useState Hook",
        datetime: "2025-02-22T15:30:00Z",
        body: "The `useState` hook is a fundamental concept in React for managing state in functional components. It allows you to create and update variables that trigger re-renders when changed. To use it, import `useState` from React and define a state variable: `const [count, setCount] = useState(0);`. You can then modify this state using `setCount(newValue)`, which updates the UI automatically.\n\nState updates in React are asynchronous, meaning changes do not happen instantly. React batches multiple state updates to optimize performance. When dealing with complex state changes, it's better to use the function form of `setState`: `setCount(prevCount => prevCount + 1);` to ensure you get the latest state value.\n\nUsing state properly is essential for building interactive applications. It's also important to keep components modular and avoid unnecessary re-renders. In large applications, managing state can become complex, which is why tools like Redux or React Context API are used for global state management."
    },
    {
        id: 3,
        title: "React vs Vue: Which One to Choose?",
        datetime: "2025-02-20T12:45:00Z",
        body: "React and Vue.js are two of the most popular front-end JavaScript frameworks. React, backed by Facebook, focuses on a component-based architecture and is widely used in large-scale applications. Vue.js, on the other hand, is known for its simplicity and ease of integration. If you're working on a large, scalable project with a strong need for reusable components, React might be the better choice.\n\nVue.js provides a more beginner-friendly approach with an easy-to-understand template syntax. It allows for two-way data binding, making it easier to sync UI with state. React, however, uses a one-way data flow, ensuring better performance in larger applications. Both frameworks have strong communities, but React's ecosystem is larger, with extensive third-party libraries available.\n\nPerformance-wise, both frameworks are efficient, but React's virtual DOM optimizations provide slightly better rendering performance. Ultimately, the choice depends on the project requirements. Vue is great for small to medium-scale applications, while React excels in large enterprise-level applications."
    },
    {
        id: 4,
        title: "Building a To-Do App with React",
        datetime: "2025-02-18T08:20:00Z",
        body: "A to-do app is a great beginner project for learning React. Start by setting up a new React project and creating a `TodoList` component. Use the `useState` hook to manage the list of tasks. Each task should be represented as an object with properties like `id`, `text`, and `completed`. Render tasks dynamically using `map()`, and add features like marking tasks as done and deleting them.\n\nTo enhance the functionality, consider adding local storage support. By storing tasks in `localStorage`, users can retain their to-do list even after refreshing the page. Another useful feature is filtering tasks based on their completion status. You can implement tabs like 'All', 'Completed', and 'Pending' using conditional rendering.\n\nFor styling, use CSS modules or styled-components to create a visually appealing UI. If you're building a more advanced version, integrate a backend using Node.js and Express to save tasks in a database. This way, users can access their to-do lists from different devices."
    },
    {
        id: 5,
        title: "What is JSX in React?",
        datetime: "2025-02-16T10:00:00Z",
        body: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but works inside JavaScript files. It allows developers to write UI components using a syntax that closely resembles HTML, making it easier to visualize the UI structure. JSX is then compiled into regular JavaScript function calls by Babel before being rendered in the browser.\n\nOne of the main benefits of JSX is that it allows developers to mix HTML-like code with JavaScript logic, making UI development more intuitive. For example, you can dynamically insert values using curly braces: `<h1>{title}</h1>`. JSX also prevents cross-site scripting (XSS) attacks by escaping values automatically.\n\nWhile JSX is optional, most React developers prefer using it because it simplifies component creation. If you don't want to use JSX, you can write components using `React.createElement()`, but this can be more verbose and harder to read."
    },
    // Add more posts similarly
    {
        id: 6,
        title: "State Management in React: When to Use Context API",
        datetime: "2025-02-14T14:30:00Z",
        body: "State management is a crucial aspect of any React application. While `useState` works well for local component state, managing global state can be challenging in large applications. The Context API provides a built-in way to share state across multiple components without passing props manually at every level.\n\nUsing the Context API, you can create a global state object and wrap your application with a provider. Components can then consume this context using the `useContext` hook. This makes data flow more manageable and reduces prop drilling.\n\nFor more complex applications, tools like Redux or Zustand can be used alongside the Context API. These tools provide better state management solutions, especially when dealing with large datasets or asynchronous data fetching."
    },
    {
        id: 7,
        title: "How to Use React Router for Navigation",
        datetime: "2025-02-12T09:15:00Z",
        body: "React Router is a powerful library for managing navigation in React applications. It allows developers to create multi-page applications without requiring a full-page reload. The main component in React Router is `BrowserRouter`, which wraps the application and enables routing.\n\nRoutes are defined using the `Routes` and `Route` components. For example, `<Route path='/about' element={<About />} />` maps the '/about' URL to the `About` component. Navigation between pages is handled using the `Link` component instead of traditional anchor (`<a>`) tags to prevent full-page reloads.\n\nReact Router also supports dynamic routing, meaning you can pass parameters in URLs using `:id` syntax. This is useful for fetching data based on dynamic values, such as displaying a blog post based on its ID."
    },
    // More posts can be added as needed
];


