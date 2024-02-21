# Project Title
Responsive Random Images Galley

## Introduction
This project is a React-based web application that showcases a responsive image gallery featuring a modern card layout. The core functionality includes a navigation bar that adapts to screen size with a hamburger menu on smaller screens, and a gallery of image cards. Each card contains a placeholder image, a randomly generated title, and a price. The purpose of this project is to demonstrate the ability to create a responsive, visually appealing web application using React, CSS Grid, and Font Awesome for icons.

## Project Type
Frontend

## Deployed App
 Frontend: [image-gallery](https://image-gallery-olive-ten.vercel.app/).
 
 ## Directory Structure
```bash
 image-gallery/
├─ src/
│  ├─ allroutes/
│  │  ├─ MainRoutes.jsx 
│  ├─ components/
│  │  ├─ DrawerTop.jsx
│  │  ├─ ImageCard.jsx
│  │  ├─ Navbar.jsx
│  ├─ pages/
│  │  ├─ Gallery.jsx
│  ├─ styles/
│  │  ├─ DrawerTop.module.css
│  │  ├─ Gallery.module.css
│  │  ├─ ImageCard.module.css
│  │  ├─ Navbar.module.css
│  ├─ App.js
│  ├─ index.js
├─ public/
│  ├─ index.html
├─ README.md
├─ package-lock.json
├─ package.json
```

## Features
* Responsive navigation bar with hamburger menu for mobile devices.
* Grid-based gallery layout that adjusts to screen size.
* Cards featuring placeholder images, random titles, and prices.
* Hover effect on cards for interactive user experience.
## Design Decisions or Assumptions
* The navigation bar collapses into a hamburger menu on smaller screens to maximize space and maintain usability.
* Placeholder images are used in the gallery to focus on the layout and responsiveness rather than the content.
* Random titles and prices simulate dynamic content, showcasing how the application could be adapted for real-world use.
## Installation & Getting started
To set up the project on your local system, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   
2. **Change into the project directory:**
   ```bash
   cd <project-directory>
   
3. **Install dependencies:**
   ```bash
   npm install
   
4. **Start the development server:**
   ```bash
   npm run start

The app will be running on `http://localhost:3000/`.

## Usage
After starting the project, you can go through the application using the navigation bar for different screen sizes. Interact with the gallery by hovering over the cards to see the hover effect.
### Larger Screen

<p align="center">
  <img src="https://github.com/jurikalita011/image-gallery/assets/68116821/c326df71-26a9-49a0-a72a-6bdc701fd524" alt="Larger Screen">
</p>

### Medium Screen

<p align="center">
  <img src="https://github.com/jurikalita011/image-gallery/assets/68116821/898fcc5b-0717-44b4-814b-89661a1ac9f5" alt="Medium Screen">
</p>

### Small Screen

<p align="center">
  <img src="https://github.com/jurikalita011/image-gallery/assets/68116821/dae8e9a1-d8ce-4597-b730-9ef1ce7e5571" alt="Small Screen">
</p>

### Dropdown menu on small screen

<p align="center">
  <img src="https://github.com/jurikalita011/image-gallery/assets/68116821/a6474f70-76ed-44a9-94bd-34497ec2714a" alt="Dropdown Menu on Small Screen">
</p>



## Credentials
No authentication is required to access the project.

## Technology Stack
* React.js: A JavaScript library for building user interfaces, providing a component-based approach to developing web apps.
* Font Awesome: A font and icon toolkit based on CSS and Less, offering a wide range of icons for web development.
* Chakra UI: A simple, modular, and accessible component library that gives you the building blocks to build React applications with speed. Chakra UI is designed to be practical, functional, and visually appealing, focusing on simplicity and ease of use.
