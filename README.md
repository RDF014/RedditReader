# Reddit Reader

An application that streamlines looking at the top 25 posts from certain subreddits. Since there 1000+ subreddits, I didn't want to overload the user with a vast amount of choices, so I have picked 15 subreddits that I felt were among the most popular and most general.

For the client, I used the React framework and bootstrapped it with the 'Create React App' npm module.

Starting the application.

1) Within the root directory, run 'npm install'
  - This will install all the dependencies for the client

2) Within the root directory, run 'npm start'
  - This will start the app in development mode

To access the app, in your web browser go to localhost:3000


### Folder Structure
```
RedditReader/
  public/
    index.html
  src/
    actions/
    components/
    reducers/
    styles/
    index.js
    store.js
```
For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

All React components are located in the `src/components/` directory and their css properties are located in the `src/styles/` directory.
All Redux logic are located in `store.js` file, `src/actions/` directory, and `src/reducers/` directory.