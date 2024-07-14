# MariKerja

MariKerja is a simple job listing web-based application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run MariKerja locally, follow these steps:

1. Clone the repository: `git clone https://github.com/wahbakamaluddin/MariKerja-post-develop.git`
2. Navigate to the project directory: `cd MariKerja`
3. Install the dependencies for both the server and client:
    - Server: `cd server && npm install`
    - Client: `cd client && npm install`
4. Create a `.env` file in the `server` directory and add the following environment variables:
    - MONGO_URL: Your MongoDB connection URL
    - JWT_SECRET: A secret key for JSON Web Token (JWT) encryption
5. Start the server: `cd server && npm start`
6. Start the client: `cd client && npm start`
7. Open your browser and visit `http://localhost:5173` to access MariKerja.

## Usage

Before running MariKerja, make sure to set up the required environment variables in the `.env` file as mentioned in the installation steps.

## Contributing

Contributions are welcome! If you'd like to contribute to MariKerja, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature or bug fix: `git checkout -b feature-name`
- Commit your changes: `git commit -m "Add feature/fix"`
- Push to the branch: `git push origin feature-name`
- Submit a pull request

## License

MariKerja is licensed under the [MIT License](https://opensource.org/licenses/MIT).
