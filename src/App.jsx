import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar } from "./components";
import "./App.css";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import About from "./NavComponents/About/About";
import Events from "./NavComponents/Events/Events";
import Gallery from "./NavComponents/Gallery/Gallery";
import Contact from "./NavComponents/Contact/Contact";
import Signup from "./NavComponents/signup/SignUp";
// import SignUp2 from './NavComponents/signup/SignUp2';
import ParticularEventCard from "./NavComponents/Events/components/particularEvent/ParticularEventCard";
import Signin from "./NavComponents/SignIn/Signin";
import Signin2 from "./NavComponents/SignIn/Signin2";
import ForgotPassword from "./NavComponents/Forgotpassword/ForgotPassword";
import MyAccount from "./NavComponents/MyAccount/MyAccount";
import ChangeDetails from "./NavComponents/MyAccount/ChangeDetails/ChangeDetails";
import ChangePassword from "./NavComponents/MyAccount/ChangePassword/ChangePassword";
import MyBookings from "./NavComponents/MyBookings/MyBookings";
import Admin from "./components/admin/Admin";
import Chart from "./components/admin/dashboardcomp/Chart";
import Hello from "./components/admin/dashboardcomp/Hello";
import UserList from "./components/admin/userlist/UserList";
import SigninAdmin from "./components/admin/auth/signIn/SigninAdmin";
import SignupAdmin from "./components/admin/auth/signup/SignupAdmin";
import PostEvent from "./components/admin/postevent/PostEvent";
import BookedEvent from "./components/admin/bookedevent/BookedEvent";
import Test from "./components/test/Test";
import EventCards from "./NavComponents/Events/EventCards/EventCards";
import EventHeader from "./NavComponents/Events/components/EventHeader";
import PostCategory from "./components/admin/postcategtory/PostCategory";
import NotFound from "./components/admin/notfound/NotFound";
const ab = 3;

const Navbaroutlet = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
const SidebarOutlet = () => (
  <>
    <Admin />
    <Outlet />
  </>
);

const Event = () => (
  <>
    <EventHeader/>
    {/* <EventCards/> */}
    <Outlet/>
  </>
)

const App = () => {
  const name = localStorage.getItem("adminUserId");
  const adminid = localStorage.getItem("adminUserName");
  const [boool,setBool] = useState()

  useEffect(() => {
    if (name && adminid !== null || undefined) {
      setBool(true)
    }
  },[])
  return (
    <div className="App">
      <div className="gradient__bg">
        {/* <Navbar /> */}
      
        <Routes>
          <Route element={<Navbaroutlet />}>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />

            <Route path="/events" element={<Event />}>
          
               <Route path="/events" element={<EventCards />}/>
               <Route path="/events/catergory" element={<EventCards />}/>
              <Route path="/events/:name" element={<Events />} />                       
            </Route>


            {/* <Route path="/events" element={<Events />} /> */}
            <Route path="/event/:id" element={<ParticularEventCard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgotpass" element={<ForgotPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/changepass" element={<ChangePassword />} />
            <Route path="/changedetails" element={<ChangeDetails />} />
            <Route path="/mybookings" element={<MyBookings />} />
            <Route path='/test' element={<Test/>}/>
            
          </Route>

          {boool ? 
          <Route path="/admin" element={<SidebarOutlet />}>           
            <Route path="/admin"
              element={
                boool ? 
                  <UserList />
                 : 
                  <SigninAdmin />                
              }
            />
            <Route path="/admin/userlist" element={boool ? <UserList /> : <NotFound/>} />
            <Route path="/admin/signin" element={<SigninAdmin />} />
            <Route path="/admin/signup" element={<SignupAdmin />} />
            <Route path="/admin/eventpost" element={boool ?<PostEvent />: <NotFound/>} />
            <Route path="/admin/bookedevent" element={boool ?<BookedEvent />: <NotFound/>} />
            <Route path="/admin/postcategory" element={boool ?<PostCategory />: <NotFound/>} />
          </Route>
            :
            <>
            <Route path="/admin" element={<SigninAdmin />} />
              <Route path="/admin/*" element={<NotFound />} />
              </>
            }
            
        </Routes>
      </div>
    </div>
  );
};

export default App;
