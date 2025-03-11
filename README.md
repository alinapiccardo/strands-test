# Strands Test

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Components](#components)
- [How the App Works](#how-the-app-works)

## Introduction
Strands Test is a React application that displays a pie chart of dog breeds and their image counts. The app fetches data from the Dog CEO API and visualizes it using the Recharts library. The app also includes a navigation bar for easy access to different sections of the app.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- npm or yarn

## Installation
To install the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/strands-test.git
    ```

2. Navigate to the project directory:
    ```sh
    cd strands-test/strands-test
    ```

3. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Running the Project
To run the project, use the following command:
```sh
npm start
# or
yarn start
```

This will start the development server and open the app in your default web browser.

## Project Structure
The project structure is as follows:
```sh
strands-test/
├── strands-app/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── NavBar.tsx
│   │   │   │   └── PieChart.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── providers.tsx
│   │   └── ...
│   │   ├── store/
│   │   │   ├── actions.ts
│   │   │   ├── dogsApi.ts
│   │   │   ├── dogSlice.ts
│   │   │   └── hooks.ts
│   │   │   └── store.ts
│   │   │   └── types.ts
│   │   └── ...
│   ├── package.json
│   └── ...
├── [README.md](http://_vscodecontentref_/1)
└── ...
```

## Components
The app consists of the following components:
- **NavBar**: Displays the navigation bar at the top of the page.
- **PieChart**: Displays the pie chart of dog breeds and their image counts.
- **Page**: The main page component that renders the pie chart and navigation bar.
- **Layout**: The layout component that wraps the page component.

## How the App Works
1. When the app is loaded, it fetches data from the Dog CEO API to get a list of dog breeds and their image counts.
2. The data is then processed to create a pie chart using the Recharts library.
3. The pie chart is displayed on the main page along with a navigation bar at the top.

# Thank you for reading!

