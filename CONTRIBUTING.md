# 🤝 Contributing to BMark-ECommerce

Welcome to BMark-ECommerce! We are thrilled that you're interested in contributing. This guide aims to make it easier for you to get involved and contribute effectively.

## 👀 Table of Contents
- [Setting Up Local Development Environment](#setting-up-local-development-environment)
- [Pull Requests Process](#pull-requests-process)
- [Code Guidelines](#code-guidelines)
- [How to Report Bugs](#how-to-report-bugs)
- [Your Help is Needed](#your-help-is-needed)

## Setting Up Local Development Environment

### Fork the Repository
- Click the "Fork" button at the top right corner of the repository to create a copy under your GitHub account.

### Clone the Repository
- Clone the forked repository to your local machine:
  ```bash
  git clone https://github.com/bhavy3103/BMark-ECommerce.git
  cd BMark-ECommerce
  ```

### Install Dependencies
- Navigate to each folder and install dependencies:
  ```bash
  # Frontend
  cd frontend
  npm install

  # Backend
  cd ../backend
  npm install

  # Socket
  cd ../socket
  npm install
  ```

### Start the Development Servers
- Start each service:
  ```bash
  # Frontend
  cd frontend
  npm start

  # Backend
  cd ../backend
  npm start

  # Socket
  cd ../socket
  npm start
  ```

### Set Up Environment Variables
- Set up `.env` files for backend and socket services according to `.env.example` provided in each folder.

## Pull Requests Process

### Fork and Clone the Repository
- Follow the instructions above to fork and clone the repository.

### Create a Branch for Your Feature or Fix
- Create a new branch:
  ```bash
  git checkout -b feature-or-fix-name
  ```

### Commit and Push Changes
- Commit your changes using a meaningful commit message:
  ```bash
  git add .
  git commit -m "feat: describe your changes"
  git push origin feature-or-fix-name
  ```

### Open a Pull Request
- Go to your fork on GitHub, and click "Compare & Pull Request".
- Provide a title and a clear description for your pull request, specifying which issue it addresses.

### Respond to Feedback
- A maintainer will review your pull request and may request changes. Update your branch as requested and push your changes. The pull request will automatically be updated.

## Code Guidelines

### Naming Conventions
- **camelCase** for variables and functions: `myVariable`, `fetchUserData()`.
- **PascalCase** for components: `UserProfile`, `ProductCard`.
- **UPPER_SNAKE_CASE** for constants: `MAX_RETRIES`.

### Code Style
- **JavaScript/TypeScript**: Use ES6 features, async/await, and consistent coding style.
- **React**: Use functional components with hooks whenever possible.
- **Environment Variables**: Store sensitive data in `.env.local` files to keep secrets safe.

### Testing
- Write unit tests for new features or modifications whenever possible.
- Use meaningful test descriptions to make it clear what each test does.

## How to Report Bugs

- If you encounter any bugs, please [open an issue](https://github.com/bhavy3103/BMark-ECommerce/issues) in the repository.
- Include details such as:
  - Steps to reproduce the bug.
  - Expected and actual behavior.
  - Screenshots or error logs if applicable.

## Your Help is Needed
- Check the [issues](https://github.com/bhavy3103/BMark-ECommerce/issues) tab for tasks you can help with.
- Comment on an issue you'd like to work on and wait for a maintainer to assign it to you.

**Thank you for contributing to BMark-ECommerce! Your help and effort are truly appreciated. Together, we can make this platform even better!**
