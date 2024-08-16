Deployed:

https://test-task-pi-amber.vercel.app
-------------------------------------

Technologies Used:
Frontend: React, Typescript, Axios, CSS Modules, React Router, Firebase, Swiper

State Management:
Manages component state and logic using custom hooks and React Query

User Authentication:
Firebase

Testing: Jest, React Testing Library

Setup and Running the Project:

1. Clone the Repository

2. Install Dependencies:
   npm install

3. Run the Development Server:
   npm start

Run Tests:
npm test

CI/CD Integration:
Continuous Integration (CI):
Uses GitHub Actions to automatically run tests and ensure code quality on every pull request.

The CI pipeline includes steps for installing dependencies, running tests, and checking code coverage.

Continuous Deployment (CD):
Automatically deploys the application to a staging environment after successful CI checks.
On merging to the main branch, the application is deployed to the production environment.
Deployment is managed through services like Vercel, with configuration files and scripts set up to handle automated deployments.
