# Movie App Documentation

## Overview
This project is a movie application developed using vanilla JavaScript. It provides users with various features, including navigation between different pages, searching for movies, viewing detailed movie information, and organizing favorite or planned movie lists. The interface includes a light/dark mode switch and supports localization in three languages: English, Ukrainian, and Russian.

## Features

### 1. Navigation
- **Home Page**: Displays a list of movies with options to filter by category. Users can navigate between the "Home" and "My Library" pages.
- **My Library Page**: Contains two sub-pages - "Watched" and "Planned" - where users can see the movies they have saved.

### 2. Movie Search
- A text input field is available for users to search for movies by entering a keyword. The results are dynamically fetched and displayed on the page.

### 3. Home Page Movie List
- The home page displays a list of movies that users can filter based on the following categories:
  - **Weekly Trends**
  - **Premieres**
  - **Popular**
  - **Top Rated**
  - **Upcoming**
- **Pagination**: Pagination is implemented at the bottom of the list to easily navigate through multiple pages of movie results.

### 4. Movie Details Modal
- When clicking on a movie, a modal window opens, displaying detailed information about the selected movie.
- **Carousel Feature**: The modal includes a carousel, with the previous and next movies accessible by clicking on the respective arrows.
- **Movie Information**: The modal shows key details about the movie, allows users to add it to the "Watched" or "Planned" list, and provides an option to watch the movie trailer.

### 5. My Library
- The **My Library** page has two sections:
  - **Watched Movies**: Displays a list of movies that have been marked as watched.
  - **Planned Movies**: Shows a list of movies that the user intends to watch in the future.

### 6. Dark/Light Theme Toggle
- The application includes a theme toggle button, allowing users to switch between **dark mode** and **light mode** as per their preference.

### 7. API Integration
- The app is connected to an external movie database API, which provides information for the movie list, search results, and movie details.

### 8. Localization
- The app supports **three languages**: English, Ukrainian, and Russian, providing a localized experience based on user preference.

## Technologies Used
- **JavaScript**: The core logic is implemented using vanilla JavaScript without additional frameworks or libraries.
- **HTML/CSS**: Basic structure and styling of the application.
- **Sass**: Used for more efficient and organized styling, providing variables, nesting, and other features to simplify CSS.
- **Parcel**: A bundler used to compile and bundle the application's JavaScript and Sass files for production.
- **API Integration**: Data for movies is fetched from an external API.
- **LocalStorage**: To save and manage lists like "Watched" and "Planned" movies.

## How to Run
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Use `npm start` to run the development server.
4. Open the `index.html` file in your browser to start the application.
5. Use the navigation menu to explore different pages and features.

## Future Improvements
- Implement user authentication to save individual watchlists.
- Add more filtering options for movies (e.g., by genre or release year).
- Improve the responsiveness of the modal and movie list for better user experience on mobile devices.

