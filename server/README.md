# Inventory Management | Theme Selection

A simple inventory management web app where you can check list of all product.
Also a option to choose themes from the menu and save it to apply.


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

App -> Routes -> Controllers -> Services.

## Built With

- Node
- Express
- MongoDB
- JWT

## Approach

## Database Design
### Table 1 => User.
- id (default | unique).
- firstName.
- lastName.
- email. (unique).
- password. (encrypted via bcrypt library).
- role (default role is user, when we scale up it could be admin, superadmin).
- created at. (current time).
- preference. (Foreign key to Preference table referencing id | default theme).

### Table 2 => Preference.
- id ( default | unique).
- colorTheme. (unique | enum) !----E.g. [light,dark,default,red,green] ----!
Note: Could have more columns when secondary/ tertiary colors are taken in consideration.

## Backend Approach4
### Configuration file
- color themes.
- db connection.
- JWT provider.

### Controller
- auth. (Login and signup logics).
- user. (Fetching user profile).
- preference. ( updating user preference/ theme).

### Services.
- user. (login, signup, fetch profile, preference).
- preference. (update preference).

### JWT Token
- Unique token is generated once user successfully login or sign up.
- Expiry - 1 day.


## Endpoints
- Login => /auth/login.
- Signup => /auth/signup.
- userProfile => /user/profile.
- update user preference => /preference/updateUserPreference.