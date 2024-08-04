# Frontend

This repository contains the frontend for a restaurant management system. It uses Vue.js and Element UI and Axios.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
### Project Structure
The project structure is as follows:
```bash
node_modules/
public/
src/
  ├── components/
  │   ├── LoginPage.vue
  │   └── TablesPage.vue
  ├── App.vue
  ├── main.js
  ├── router.js
  └── store.js
.gitattributes
.gitignore
babel.config.js
jsconfig.json
package-lock.json
package.json
readme.md
```
### Installation

To set up the project locally, follow these steps:
#### 1. Clone the repository:
```bash
git clone https://github.com/ChouTed/CF5Front.git
cd CF5Front
```
#### 2. Install the dependencies:
```bash
npm install
```
#### 3. Start the server:
```bash
npm run serve
```
#### 4. Open your browser and navigate to http://localhost:8080.

### Usage
#### loginPage.vue
The LoginPage component is responsible for handling user authentication. Users can input their credentials to log in to the system.
#### tablesPage.vue
The TablesPage component displays the layout of tables inside and outside the restaurant. It allows the selection of a table to place, edit and delete an order.
### API Endpoints
Ensure that the backend API is running on http://localhost:5000.
