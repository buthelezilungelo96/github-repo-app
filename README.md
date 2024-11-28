# Meyk Notion App

This React application, built with TypeScript and Vite, provides a user-friendly interface for exploring GitHub repositories. It utilizes Ant Design components, such as Table and Modal, to display information effectively. The app also integrates various packages like React Query, Axios, and React Charts to enhance functionality and user experience.

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd meyk-app


2. **Configure Environment Variables**

Update the .env file in the root directory and add your GitHub app token:

VITE_APP_TOKEN=your_github_app_token_here

Replace your_github_app_token_here with your actual GitHub personal access token.

3. **Install Dependencies** 

npm install

4. **Install Dependencies** 

npm start

This will launch the application and you can access it in your browser at http://localhost:5173.

## Features

- **Search GitHub Repositories**: On the home page click 'Search Repositories card', Using the search Input field search for repositories using a keyword.
- **View Repository Details**: Click 'View Deatils' to display detailed information about a selected repository, including URL, description, forks count, stargazers count, and open issues count.
- **Link to GitHub**: Click 'Visit Github Page' to Nnavigate directly to the repository’s GitHub page.
- **Issue Tracking**: Click 'View Repo Issues' to view and filter issues for a repository by state (Open or Closed).
- **Visual Insights**: Click 'View Visual Insights' button to view a pie chart showing the breakdown of issues (open vs closed).

