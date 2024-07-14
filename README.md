# MariKerja

MariKerja is a user-friendly job listing web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application aims to simplify the job search and recruitment process by providing an intuitive platform for job seekers and employers alike. Watch the demo at [MariKerja Demo](https://youtu.be/X2_fgEMJjGk).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Job Listings**: Browse and search for job openings.
- **User Roles**: Different functionalities for job seekers and employers.
- **Profile Management**: Users can create and edit their profiles.
- **Job Application**: Job seekers can apply for jobs and track their application status.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Authentication**: Secure login and registration using JWT.

## Installation

To install and run MariKerja locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/wahbakamaluddin/MariKerja-post-develop.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MariKerja
    ```
3. Install the dependencies for both the server and client:
    - Server:
        ```bash
        cd server && npm install
        ```
    - Client:
        ```bash
        cd client && npm install
        ```
4. Create a `.env` file in the `server` directory and add the following environment variables:
    - `MONGO_URL`: Your MongoDB connection URL
    - `JWT_SECRET`: A secret key for JSON Web Token (JWT) encryption
5. Start the server:
    ```bash
    cd server && npm start
    ```
6. Start the client:
    ```bash
    cd client && npm start
    ```
7. Open your browser and visit `http://localhost:5173` to access MariKerja.

## Usage

Before running MariKerja, make sure to set up the required environment variables in the `.env` file as mentioned in the installation steps. Once the server and client are running, you can start using the application to post jobs, search for job listings, and manage user profiles.

## Contributing

Contributions are welcome! If you'd like to contribute to MariKerja, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
- Commit your changes:
    ```bash
    git commit -m "Add feature/fix"
    ```
- Push to the branch:
    ```bash
    git push origin feature-name
    ```
- Submit a pull request

## License

MariKerja is licensed under the [MIT License](https://opensource.org/licenses/MIT).
