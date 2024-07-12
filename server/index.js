// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const authRoutes = require("./routes/authRoutes"); // Assuming you have auth routes defined in ./routes/authRoutes
// const jobRoutes = require("./routes/jobRoutes"); // Assuming you have job routes defined in ./routes/jobRoutes
// const userRoutes = require("./routes/userRoutes"); // Assuming you have user routes defined in ./routes/userRoutes

// dotenv.config(); // Load environment variables from .env file
// const app = express();

// const localIp = internalIp.v4.sync(); // Get local IP address
// // Database connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.error("Database connection error:", err));
// // Middleware
// app.use(
//   cors({
//     origin: [`http://localhost:5173`, `http://${localIp}:5173`], // Allow only these origins to send requests
//     credentials: true, // Allow sending cookies and credentials to the server
//   })
// ); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse incoming JSON payloads
// app.use(cookieParser()); // Parse cookies
// app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// // Routes
// app.use("/auth", authRoutes); // Mount authentication routes at '/auth'
// app.use("/jobs", jobRoutes); // Mount job routes at '/jobs'
// app.use("/users", userRoutes); // Mount user routes at '/users'

// const port = process.env.PORT || 8000; // Use defined port or default to 8000
// // Start the server, 0.0.0.0 is used to listen on all network interfaces
// app.listen(port, "0.0.0.0", () =>
//   console.log(`Server is running on port ${port}`)
// );

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");
const os = require("os");

dotenv.config();
const app = express();

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  console.log("Available Network Interfaces:", interfaces);

  // Replace 'en0' with the correct interface name as needed
  const interfaceName = "en0";

  if (interfaces[interfaceName]) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        console.log(
          `Using interface ${interfaceName} with IP address ${iface.address}`
        );
        return iface.address;
      }
    }
  }

  return "127.0.0.1";
}

const localIp = getLocalIp();
console.log("Local IP address:", localIp);

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Middleware
app.use(
  cors({
    origin: [`http://localhost:5173`, `http://${localIp}:5173`],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on http://0.0.0.0:${port}`)
);
