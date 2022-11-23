#Code Challenge - News Page (with editing)

Create a SPA with React + Redux. Use JS/JSX
At the top there should be a menu bar: Logo from the task (when you click on it, you go to the main one), News, Login / Logout

`Main`

It should contain the text: "Hello Guest" if the user is not logged in and the text "Hi {LOGIN}" if the user is logged in.

`Login`

Produced on a pop-up, login and password are entered. If the input is incorrect, there should be an error indication. After a successful login, the popup closes.

`News`

The news list and news search is displayed. News filtering should be performed immediately when entering the search text. Each news has: title, text and creation date.

The user should be able to add news. The admin should be able to approve the news or delete it. By default, user-created news is not approved.
The guest should only see news approved by the admin. Guest cannot create or approve news.

To simplify the work, the work is performed without the server part, the initial initialization of the news is set in a constant, the correct login and password of users are also set in a constant.
All layout must be done using BEM and SASS/SCSS. In the list of news, you need to make sure that for the desktop version, 2 news per line are displayed, and for the mobile version, one at a time.

## Technology stack

### `React + React Router`
### `Redux`
### `BEM + SCSS`


## Launch:

`npm start` - launch client on [http://localhost:3000](http://localhost:3000).

## Users to check:

### Administrator: `admin` / `admin123`

### User: `user` / `user123`

### Guest: does not require authorization
