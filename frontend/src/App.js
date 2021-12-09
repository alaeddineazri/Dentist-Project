
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ServiceDetails } from './components/ServiceList';
import Header from './components/Header'
import Footer from './components/Footer'
import AppointmentPage from './pages/AppointmentPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import DashboardPage from './pages/DashboardPage'
import RegisterPage from './pages/RegisterPage'
import ServicePage from './pages/ServicePage'
import PrivateRoute from './Private/PrivateRoute'
import AboutUsPage from './pages/AboutUsPage'
import ContactUs from './pages/ContactUs'
import ProtectedRoute from './Private/ProtectedRoute'
import WelcomePage from './pages/WelcomePage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop';




const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/aboutUs" component={AboutUsPage} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path={`/service/:id`} render={(props) => <ServicePage {...props} ServiceDetails={ServiceDetails} />} />
          <PrivateRoute exact path="/welcome" component={WelcomePage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/appointment" component={AppointmentPage} />
          <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App




// <>
//       <Router>
//             <Header />

//         <Switch>

//           <PrivateRoute exact path="/welcome" component={WelcomePage} />
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/login" component={LoginPage} />
//             <Route exact path="/register" component={RegisterPage} />
//             <Route exact path="/aboutUs" component={AboutUsPage} />
//             <Route exact path={`/service/:id`} render={(props) => <ServicePage {...props} ServiceDetails={ServiceDetails} />} />
//             <PrivateRoute exact path="/profile" component={ProfilePage} />
//             <PrivateRoute exact path="/appointment" component={AppointmentPage} />
//             <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
//             {/* <Redirect from="/*" to='/NotFound' /> */}
//             <Route path="*" component={NotFoundPage} />

//         </Switch>
//             <Footer />
//       </Router>
//     </>



{/* <>
<Router>

  <Switch>
    <PrivateRoute exact path="/welcome" component={WelcomePage} />
    <div>
      <Header />
      
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/aboutUs" component={AboutUsPage} />
      <Route exact path={`/service/:id`} render={(props) => <ServicePage {...props} ServiceDetails={ServiceDetails} />} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />
      <PrivateRoute exact path="/appointment" component={AppointmentPage} />
      <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
      <Footer />
    </div>
  </Switch>
</Router>
</> */}