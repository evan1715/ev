import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EditRecipePage from '../components/account/EditRecipePage.js';
import MyAccountPage from '../components/account/MyAccountPage.js';
import MyRecipesPage from '../components/account/MyRecipesPage.js';
import SubmitRecipePage from '../components/account/SubmitRecipePage.js';
import AboutPage from '../components/home/AboutPage.js';
import AllRecipesPage from '../components/home/AllRecipesPage.js';
import ConversionsPage from '../components/home/ConversionsPage.js';
import HomePage from '../components/home/HomePage.js';
import SearchResultsPage from '../components/home/SearchResultsPage.js';
import UserProfilePage from '../components/home/UserProfilePage.js';
import ViewRecipePage from '../components/home/ViewRecipePage.js';
import Footer from '../components/nav/Footer.js'; //footer
import Nav from '../components/nav/Nav.js'; //nav
import UserRoute from './UserRoute.js'; //private routes

//Lazy Load method -- going to disable it for now since the project is small and lazy loading doesn't benefit much. We'll keep it speedy by having it all in one.
// //Home components/non-authorized pages.
// const HomePage = React.lazy(() => import('../components/home/HomePage.js'));
// const AllRecipesPage = React.lazy(() => import('../components/home/AllRecipesPage.js'));
// const AboutPage = React.lazy(() => import('../components/home/AboutPage.js'));
// const ConversionsPage = React.lazy(() => import('../components/home/ConversionsPage.js'));
// const SearchResultsPage = React.lazy(() => import('../components/home/SearchResultsPage.js'));
// const UserProfilePage = React.lazy(() => import('../components/home/UserProfilePage.js'));
// const ViewRecipePage = React.lazy(() => import('../components/home/ViewRecipePage.js'));
// //Account components/authorized only pages.
// const EditRecipePage = React.lazy(() => import('../components/account/EditRecipePage.js'));
// const MyAccountPage = React.lazy(() => import('../components/account/MyAccountPage.js'));
// const MyRecipesPage = React.lazy(() => import('../components/account/MyRecipesPage.js'));
// const SubmitRecipePage = React.lazy(() => import('../components/account/SubmitRecipePage.js'));

const AppRouter = () => (
    <Router>
        <Nav />
        <Routes>
            <React.Suspense fallback={<p className="center">Loading...</p>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/allrecipes" element={<AllRecipesPage />} />
                <Route path="/conversions" element={<ConversionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/recipe" element={<ViewRecipePage />} />
                <Route path="/user" element={<UserProfilePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route
                    path="/editrecipe"
                    element={
                        <UserRoute>
                            <EditRecipePage />
                        </UserRoute>
                    }
                />
                <Route
                    path="/myaccount"
                    element={
                        <UserRoute>
                            <MyAccountPage />
                        </UserRoute>
                    }
                />
                <Route
                    path="/myrecipes"
                    element={
                        <UserRoute>
                            <MyRecipesPage />
                        </UserRoute>
                    }
                />
                <Route
                    path="/submitrecipe"
                    element={
                        <UserRoute>
                            <SubmitRecipePage />
                        </UserRoute>
                    }
                />
                <Route path="*" element={<h1 className="center">404: Page Not Found</h1>} />
            </React.Suspense>
        </Routes>
        <Footer />
    </Router>
);

export { AppRouter as default };
