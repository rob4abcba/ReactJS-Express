// Bring in Express
const express = require("express");

// Initialize Express
const app = express();

// RL This helps!!! 5star
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

// Add just one route to return an array of customers
// Use route = /api/customers
// req = request ;  res = response ;
// We create some dummy hard-coded customer data, but in real life this will pull from a database.
// res.json(customers) = respond with json and pass in customers
app.get("/api/customers", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Steve", lastName: "Smith" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];
  res.json(customers);
});

// Create a port variable to listen on, but do NOT choose 3000 since 3000 is the default used by ReactJS create-react-app.
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
