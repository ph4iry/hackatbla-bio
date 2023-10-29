// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '@fontsource-variable/inter';
import Link from './components/Link';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App flex flex-col items-center max-w-screen overscroll-x-none">
      <Header />
      <div className="py-6 px-4 max-w-md w-full  divide-y">
        <div className="py-5">
          <Link title="join us!" caption="log in with bostonk12 email" href="https://forms.gle/zZEAnaiAYUaswWro8/" className="bg-[#FFB13C]" />
        </div>
        <div className="py-5 space-y-3">
          <Link title="hack club hq" caption="" href="https://hackclub.com/" className="bg-gradient-to-br from-red-500 to-orange-400" />
          <Link title="slack" caption="" href="https://hackclub.com/slack/" className="bg-gradient-to-br from-sky-400 to-violet-600" />
          <Link title="onboard" caption="" href="https://hackclub.com/onboard/" className="bg-gradient-to-br from-blue-500 to-emerald-400" />
          <Link title="sprig" caption="" href="https://sprig.hackclub.com/" className="bg-gradient-to-br from-emerald-400 to-green-600" />
        </div>
        <div className="py-5">
          <Link title="hackatbla.club" caption="" href="https://hackatbla.club/" className="bg-gradient-to-br from-rose-500 to-red-500" />
        </div>
        <div className="py-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
