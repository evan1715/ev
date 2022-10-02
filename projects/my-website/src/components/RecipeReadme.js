const RecipeReadme = () => (
    <article className="mt-5" aria-details="Recipe Project Readme">
        
        <h3 className="text-theme-cyan">Recipe Project</h3>
        <p>This full-stack project based on the MERN stack, which consists of MongoDB, Express, React, and Node. It also utilizes Mongoose, Redux, Webpack, and SCSS. This website was designed to be a user-based recipe app. It can be used to create accounts, profiles, submit recipes, view others&apos; recipes &amp; profiles, or view recipes using spoonacular&apos;s API by searching. The website is also formatted to be able to use on both mobile and desktop screen sizes.</p>
        <p>Most of the features will be with a user account. Make an account and try it out!</p>

        <h4 className="text-theme-orange">Client-side</h4>
        <ul>
            <li>Created with React, ReactDOM, React Router, Redux, and React-Redux.</li>
            <li>The index checks for a locally stored token, checks it with the server, then renders the app.</li>
            <li>The AppRouter includes React lazy loading pages, public routes, private routes for only users who are logged in. If they are not logged in, it will redirect them to the homepage if they attempt to load a user page.</li>
            <li>The components use React hooks such as useState and useEffect, Redux hooks such as useDispatch to dispatch actions to the store, useSelector for access to reducers, react-router-dom hooks such as useLocation to get information off the URL, and useHistory to push to other pages.</li>
            <li>Reused components are ones such as PopulateRecipes, RecipeForm, LeftColumn, and RightColumn.</li>
            <li>React-redux-loading-bar is used throughout to display a loading of information. There is also a loading message while going between routes that are being downloaded.</li>
        </ul>

        <h5 className="text-theme-green">Navigation Components</h5>
        <ul>
            <li>The navigation features two nav rows on desktop with logo, links, search, log in, log out, create account, buttons that are disabled unless the user is logged in by checking the reducer.</li>
            <li>On a smaller screen, the nav is shrunk down to one nav row to include the logo, search, and a popout menu. The popout menu will change the Account side buttons based on whether a user is logged in or not.</li>
            <li>Pop up modals are used for when a user creates an account or signs in.</li>
            <li>Error handling is used and displayed to the user if the email, username, etc is already taken, if it has profanity, or if the login information is incorrect or does not fit the format.</li>
            <li>Users are pushed to the home page after they log out.</li>
            <li>Search uses spoonacular API then uses PopulateRecipe component to fill in the results to the user.</li>
        </ul>

        <h5 className="text-theme-green">Home/Public Components</h5>
        <ul>
            <li>AllRecipesPage gets all user created recipes and fills it in with the PopulateRecipes component to display to the user. It also uses the processUsernames utility to get all usernames for the recipes then passes it to PopulateRecipes.</li>
            <li>ConversionPage is designed to be a very simple page displaying essential recipe measurements.</li>
            <li>PopulateRecipe component takes in props of a list of recipes and their information. Depending on what the information is, the component will display the recipes passed to it in a grid form.</li>
            <li>RecipeRoulette features randomized recipes from spoonacular API with transition effects.</li>
            <li>SearchResultsPage takes in the parameter based on the URL, sets the key for the API, and then searches spoonacular. The recipe results are then passed to PopulateRecipes.</li>
            <li>UserProfilePage includes LeftColumn and RightColumn components to display userinfo. It uses location to grab the id of the user, retrieves it from the server, then displays it on the page.</li>
            <li>The LeftColumn and RightColumn are passed isPublic={ true } to show that the user profile is a public one in order to hide certain information or other things.</li>
            <li>ViewRecipePage will take in either a user-submitted recipe or a spoonacular recipe, then decide which information to display. If it is a spoonacular recipe, the URL will contain ?type=spoon. Both will have the recipe id in the URL and then the id will be taken off of it and used to display which recipe. The page features a gallery slideshow to display images, clickable link to the user profile on their username, and a source link if it is a spoonacular recipe.</li>
        </ul>

        <h5 className="text-theme-green">User Components</h5>
        <ul>
            <li>The EditRecipePage and SubmitRecipePage both use the same RecipeForm component. If it is a new recipe, information will be cleared and a user can fill in the information. If a user is editing a recipe, the recipe information will be filled in so they can see the current information and modify it.</li>
            <li>RecipeForm includes error handling in case something is not filled out or profanity is detected. A user can add and delete ingredients with ease using state changing.</li>
            <li>The LeftColumn and RightColumn components are reused on a public profile and on MyAccount and MyRecipes page to display icon, recent links, user information, and a link to view their profile. Depending on the size of the screen, the sides will adapt or become hidden. Email information and view profile link is not on public page, only in a user&apos;s pages.</li>
            <li>MyRecipesPage includes a list of a user&apos;s recipes that they have submitted with the options to view them, edit, delete, and modify the pictures per recipe. A pop up modal is used for confirming deletion of a recipe and for modifying the recipe pictures by deleting or uploading them. A user can upload up to five images at a time.</li>
            <li>MyAccountPage includes the left and right columns, links to /myrecipes and /submitrecipe as well as the usual account settings</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>The buttons in My Account include Upload or modify user icon, Change my username, Change my email, Set a new password, Modify my name, Log out of all locations, and Delete my account.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>For each button, a modal opens displaying the current data and then a user can change their info for each. It also handles errors per modal as well.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>If they log out of all locations, then all tokens will be wiped, and the user will be redirected to the homepage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>If they wish to delete their account, they must confirm by typing in their current username then hitting delete.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>Setting a new password requires the user to put in the old password, the new password, and to verify the new password. The checkboxes on the side will reveal what a user has typed in them if they need to view the field since passwords are hidden when typed.</li>
                </ul>
            </li>
        </ul>

        <h5 className="text-theme-green">Store &amp; Redux</h5>
        <ul>
            <li>The Redux store includes all reducers, logger and thunk middleware, and ability to use a browser extension to view the store.</li>
            <li>There are seven sets of action &amp; reducers.</li>
            <li>The account handles login, logout, getting the user, updating, getting the icon, and deleting the icon.</li>
            <li>All Recipes will handle all user recipes, recipe usernames, and search results.</li>
            <li>Recipe roulette handles the randomized set of recipe cards on the homepage using the API.</li>
            <li>Selected recipe is for individual recipes. It used for viewing a recipe on a page and edit a recipe.</li>
            <li>Server error is where the server errors are stored in order to display them to the user as they come about.</li>
            <li>User profile holds all the profile stuff. It holds the profile recipes and the user info that one is viewing.</li>
            <li>User recipes is used to submit a new recipe, hold the current user&apos;s recipes, and delete a recipe.</li>
        </ul>

        <h5 className="text-theme-green">Utils folder</h5>
        <ul>
            <li>In the utils folder, there are two files which are processData and processUsernames.</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>Process data is used as a pre-processor that is called in actions to convert recipe data. It uses moment to convert the createdAt and updatedAt into a more presentable display of a date format. It also converts all image data from buffer data to binary data to be displayed with data:image/jpeg;base64,$img. This is so that all information is immediately transformed for a simpler way to display recipe data right off the reducer data stored instead of manually changing each time for the dates and images.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>Process usernames retrieves usernames per recipe and stores them in the store. To save network traffic, it will not re-fetch if we already have a match between a username and a recipe owner&apos;s id. It will simply reuse the same username if the id matches what we have already fetched. If the account no longer exists, it will store Account Not Found as the username.</li>
                </ul>
            </li>
        </ul>

        <h5 className="text-theme-green">Database folder</h5>
        <ul>
            <li>In the database folder, there are two files which are userServerAPI and recipeServerAPI. These two files are the middle between the frontend and the backend to get information from the server and database.</li>
            <li>These were created so that the action files and components are not overloaded with fetch requests or error handling. It was also to simplify the exchange of data by calling a simple function in a component that will handle all the rest of the work for you and not repeating code in many places.</li>
            <li>They include actions for the redux store that will be dispatched based on which one is called. The files send all data from the server to the appropriate actions and reducers, including errors.</li>
            <li>At the top of both files is a switch statement of cases that will determine which function will be used and then passed along the information that is required to complete the requests.</li>
            <li>I quite like this method of organization to put these as a side handler of the middle between server and client.</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>The userServerAPI solely deals with user related fetch requests to the server. It handles errors, translates errors to something a user can more understand, handles various situations, and dispatches appropriately.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The recipeServerAPI solely deals with the recipe related fetch requests to the server. As with the userServerAPI, it also handles errors, translates them, handles various scenarios, and dispatches actions appropriately based on information being received back from the server.</li>
                </ul>
            </li>
        </ul>

        <h5 className="text-theme-green">Styling/CSS/SCSS</h5>
        <ul>
            <li>The styling is organized with three folders and a main styles.scss to import all styles into one. The three folders are base, components, and nav.</li>
            <li>A majority of the styling takes advantage of CSS Flex.</li>
            <li>In the base folder, there is _base.scss that includes overall base settings and universally used styling. There is _mixins.scss that is used for pre-defined styles that tend to be repeats. There is also _settings.scss which includes SCSS variables to use throughout the other files.</li>
            <li>In the components folder, it includes all styles of the components.</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>The _columns.scss file includes the styling for all three columns, the left, center, and right. It also adapts based on screen size to fit things better. Columns styling is used by LeftColumn, RightColumn, MyAccountPage, MyRecipesPage, and UserProfilePage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The _modal.scss is used on all modals.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>Files _about.scss, _conversions.scss, &amp; _search-results.scss are simpler files used for their corresponding pages.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The _my_recipes.scss file is used for the styling of each recipe listed in MyRecipesPage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The file _populate-recipes.scss utilizes CSS Grid to display recipes. It will adjust how many columns of recipes will display based on screen size. It is used only used in the PopulateRecipe component, which is used by SearchResultsPage and AllRecipesPage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>For the RecipeForm component, _recipe-form.scss tweaks all the styling while still keeping the form simple. It will resize and reorganize based on screen size. For example, the ingredients list will be row unless it is a smaller screen, then it will be column. The RecipeForm component is used by EditRecipePage and SubmitRecipePage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The _recipe-roulette.scss styles the randomized cards on the front page using CSS Grid and will adjust based on screen size.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>The _user-profile-page.scss is for the center column of the profile and uses CSS Grid to display recipes. It will adjust based on the resizing of the screen or browser.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>For _view-recipe.scss, this is solely for the ViewRecipePage component. A large part of this styling was based off of w3schools examples of how to make a slideshow and how to make a slideshow with a gallery.</li>
                </ul>
            </li>
            </ul>
                <ul>
                    <li>In the nav folder, it includes all styles for everything in the navigation and footer.</li>
                </ul>
            <ul>
            <li>
                <ul>
                    <li>When the screen is large enough, it will use the regular desktop view of the two nav rows which are based on the _nav-bottom.scss, _nav-top.scss, and _nav.scss. When the screen is smaller, the app will use _nav-popout.scss and _nav.scss.</li>
                </ul>
            </li>
        </ul>

        <h5 className="text-theme-green">Efficiency</h5>
        <ul>
            <li>AllRecipes, a user&apos;s MyRecipes, UserProfilePage, and RecipeRoulette are all stored after the initial request so that if the components reload, it will use the local information instead of retrieving the data from the server again. This will save network traffic.</li>
            <li>If a user edits or submits a new recipe, then MyRecipes will be reloaded.</li>
            <li>If a user hits the &quot;spin&quot; button on RecipeRoulette, then a new set of random recipes will load.</li>
            <li>The processData file in utils converts all images from buffer data to binary data to be easily used in components wherever without having to worry about the format of dates or displaying images. It is like a pre-processor of converting data for a far easier experience in the components. This method uses less code, less hassle, and does not include the moment package everywhere a date is displayed.</li>
            <li>The two files in the database folder, userServerAPI and recipeServerAPI, are both designed to minimize code, handle all fetches, distribute data, actions, errors, etc., with ease by simply calling the file and passing it what you want to dispatch. This helps efficiency by not having to remake fetch requests in components or actions repeatedly since this file handles all that is listed and more.</li>
            <li>Components are reused to have less data and less code overall.</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>The LeftColumn and RightColumn components are used in MyAccountPage, MyRecipesPage, and UserProfilePage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>RecipeForm component is used in SubmitRecipePage and EditRecipePage.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>PopulateRecipe component is used in SearchResultsPage and AllRecipesPage.</li>
                </ul>
            </li>
        </ul>

        <h4 className="text-theme-orange">Server-side features</h4>
        <ul>
            <li>Created with Nodejs, Express, MongoDB, Mongoose.</li>
            <li>Authentication middleware for users, their accounts, and their recipes.</li>
            <li>Passwords are hashed with bcrypt and all data is stored in a MongoDB cluster.</li>
            <li>The two mongoose models, userModel and recipeModel, are linked together. Both check for profanity in users and recipes.</li>
            <li>Validation checker for proper email, password, username, etc.</li>
            <li>Login tokens to be created, deleted, and used for storing login sessions.</li>
            <li>Both routers have CRUD for creating, reading, updating, and deleting numerous things in the user account or their recipes.</li>
            <li>User icons and up to five pictures per recipe.</li>
            <li>Modules used are bad-words, bcryptjs, express, jsonwebtoken, mongodb, mongoose, multer, sharp, and validator.</li>
        </ul>

        <h4 className="text-theme-orange">Webpack</h4>
        <ul>
            <li>Packages for webpack in this project include @babel/core, @babel/plugin-transform-runtime, @babel/preset-env, @babel/preset-react, @babel/runtime, babel-loader, css-loader, file-loader, html-webpack-plugin, mini-css-extract-plugin, moment-locales-webpack-plugin, sass-loader, webpack, and webpack-cli.</li>
            <li>The config checks for settings to decide if we are in development and production and will use different methods, depending on what it is.</li>
            <li>For plugins:</li>
        </ul>
        <ul>
            <li>
                <ul>
                    <li>@babel/core, @babel/preset-react, and babel-loader are required for webpack to compile React.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>@babel/plugin-transform-runtime will decrease the code size, especially when @babel/preset-env is used. @babel/runtime is required for it.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>@babel/preset-env is a smart plugin that will compile the the bundle to transform the JS to as early as ES5 to be more compatible with certain environments.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>css-loader, sass, and sass-loader are required to compile the SCSS stylings used.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>file-loader is used so that the logo for the page can be included into the bundle.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>html-webpack-plugin will create a new html file per compile.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>mini-css-extract-plugin will create a separate CSS file when compiled.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>moment-locales-webpack-plugin excludes unnecessary locales from being compiled with the bundle to decrease overall size by almost half.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>webpack and webpack-cli are needed to compile webpack and use for dev purposes.</li>
                </ul>
            </li>
        </ul>

        <h4 className="text-theme-orange">MongoDB</h4>
        <p>The website uses an official cluster database hosted by MongoDB. All passwords are hashed with bcrypt. Recipes and user information are all located within this database.</p>
    </article>
);

export { RecipeReadme as default }