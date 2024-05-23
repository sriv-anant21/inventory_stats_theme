# Inventory Management | Theme Selection

A simple inventory management web app where you can check list of all product.
Also a option to choose themes from the menu and save it to apply.

## Pages
- SignUp page => Create a user with first name, last name and email and password.
- Login Page => Enter you email and password to login into the app.
- Dashboard => It further have few modules =>
              1. Header => Have a option to choose you own theme from a provided list, once choosed the theme will be previewed, but to make the change permanent have to click on the save button. Once saved the preference will be saved in the database through an API call.

              2. Table and Stats => To view data based on selected themes. => Data for table and stats is coming from a public API. (might not return data sometimes).

## Approach

Considering  Modularity and Encapsulation, project has been modularized into three layers -
1. View -> The main layouts.
2. Modules -> The individual modules needed to build a layout.
3. Components -> The individual units/components needed to build a module.

Considering  Extensibility, project has been implemented using Redux to make flexible use of states and reducer throughout the project withour prop drilling.

Considering Readability, project code has been formatted with appropriate naming conventions and indentations.
The data and configurations has been seperated out for more clear and readable code.

API services has been seperated out in a Service folder.

Since it's a standalone app, One view has been created and it's modules has been rendered based on Admin/User.

### JWT Token
- API sending a jwt token on login and signup, here it is being stored in cookies, so that the user remains logged in until unless not log out/ jwt expires(1 day).
- Even if user open the app in different tab and user is logged in, it remains the same.
- On log out, token is being removed from the cookies.


## Getting Started

## Local Setup

### Pre-Requisites

1. Install VS Code Edition .

    For Windows - (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&passive=false&cid=2030).

    For Mac - (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio-mac/?sku=communitymac&rel=17).

2. Install Node & Install a Package Manager - npm/yarn. (https://nodejs.org/de/blog/release/v14.17.1/).


#### Running The APP

## Open a new terminal.
- cd api
- npm install
- npm start

## Open another new terminal.
- cd ui
- npm install
- npm start


#### Generating The Build

    npm run build

## Folder Structure

App -> View -> Modules -> Components

## Built With

- React JS.
- Typescript.
- Redux.
- Material UI.
- Styled-components.

