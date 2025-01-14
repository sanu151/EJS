![image](https://github.com/user-attachments/assets/07ecd172-2591-4819-a202-d89f8b56c30b)


# EJS

**_Embedded JavaScript_**

**EJS (Embedded JavaScript Templates)** is a simple templating language that allows you to generate HTML dynamically using JavaScript code within your templates. It's particularly well-suited for web development with Node.js and frameworks like Express.js.

**Core Concept:**

- EJS files have the `.ejs` extension.
- You can embed JavaScript code within special tags (usually <% %>) within your HTML.
- This JavaScript code can be used to:
  > > Generate HTML dynamically based on data.  
  > > Loop through arrays of data.  
  > > Make conditional checks.  
  > > Include other EJS files.

**Basic Syntax:**

- <% %>: Used for executing JavaScript code without outputting any result to the HTML.

**Example:**

- Code snippet

```ejs
<% for(var i=0; i<users.length; i++) { %>
<% } %>
```

- <%= %>: Used for executing JavaScript code and outputting the result to the HTML.


**Templating in EJS**

Templating is a technique used in web development to separate the presentation (HTML) from the data and logic. This separation makes your code more organized, reusable, and easier to maintain. EJS (Embedded JavaScript Templates) is a popular templating engine that allows you to embed JavaScript code within your HTML files to generate dynamic content.

**Uses of Templating in EJS:**

1. **Dynamic Content:**
   - **Data Insertion:** You can easily insert data into your HTML. For example, you can display user names, product details, or any other dynamic information.
   - **Conditional Rendering:** Show or hide parts of your HTML based on certain conditions. This allows for creating different views depending on user roles, data availability, or other factors.
   - **Loops:** Iterate over arrays of data to generate lists, tables, or other repetitive HTML structures.

2. **Code Reusability:**
   - **Partials:** Create reusable chunks of HTML (e.g., headers, footers, navigation bars) and include them in multiple templates.
   - **Layout Files:** Define a common layout for all pages (e.g., a header, footer, and a content area) and then include specific content for each page within that layout.

3. **Improved Maintainability:**
   - **Separation of Concerns:** By separating HTML from JavaScript logic, you can make changes to your presentation without affecting the underlying data or logic.
   - **Easier Debugging:** Issues related to presentation can be more easily isolated and fixed.

**Example:**

**index.ejs:**

```ejs
<!DOCTYPE html>
<html>
<head>
    <title>My Blog</title>
</head>
<body>
    <h1>Blog Posts</h1>
    <ul>
        <% for(var i=0; i<posts.length; i++) { %>
            <li><a href="/posts/<%= posts[i].id %>"><%= posts[i].title %></a></li>
        <% } %>
    </ul>
</body>
</html>
```

In this example:

- The `<% for ... %>` loop iterates over an array of `posts`.
- Inside the loop, the `<%= posts[i].id %>` and `<%= posts[i].title %>` expressions are used to dynamically insert the ID and title of each post into the HTML.

**Key Benefits of Templating in EJS:**

- **Increased flexibility and maintainability**
- **Improved code organization**
- **Easier to create dynamic and interactive web pages**
- **Enhanced developer productivity**



### **EJS project:**

**1. Project Setup:**

- **Create a Project Directory:**

  - Use your terminal or file explorer to create a new folder for your project (e.g., `my-ejs-app`).

- **Initialize Node.js Project:**

  - Navigate to the project directory in your terminal.
  - Run `npm init -y` to create a `package.json` file with default settings.

- **Install Dependencies:**
  - Install the necessary packages using npm:
    - `npm install express ejs`

**2. Create Server File (e.g., `server.js`):**

```javascript
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  const data = {
    title: "Welcome to EJS",
    message: "This is a simple EJS example.",
  };
  res.render("index", data); // Render the 'index.ejs' file
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

**3. Create EJS Template File (e.g., `views/index.ejs`):**

- Create a `views` directory within your project.
- Create a file named `index.ejs` inside the `views` directory.

```ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p><%= message %></p>
</body>
</html>
```

**4. Run the Server:**

- In your terminal, run `node server.js` to start the server.

**5. Access the Application:**

- Open your web browser and navigate to `http://localhost:3000`. You should see the rendered HTML with the dynamic content.

**Key Points:**

- **`app.set('view engine', 'ejs');`:** This line tells Express to use the EJS templating engine.
- **`res.render('index', data);`:** This line renders the `index.ejs` template and passes the `data` object to it.
- **`<%= ... %>`:** This syntax is used within EJS templates to embed JavaScript code and output the result to the HTML.

This is a basic example. You can use EJS to create more complex templates with loops, conditionals, and more advanced logic to dynamically generate HTML for your web applications.

I hope this comprehensive guide helps you get started with EJS!
