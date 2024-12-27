import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SideNav from './components/sideNav/sideNav';
import Main from './components/main/main';
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <div className='h-screen flex flex-col'>
          <div className="-16 bg-white border-b">
            <Header></Header>
          </div>
          <div className="flex flex-1 overflow-hidden w-full">
            <div className="flex flex-1 overflow-hidden w-3/4">
              <div className='w-1/3 border-r bg-white overflow-y-auto'>
                <SideNav></SideNav>
              </div>
              <div className='w-2/3 flex-1 overflow-y-auto bg-gray-50'>
                <Main></Main>
              </div>
            </div>
            <div className="w-1/4 border-l bg-white overflow-y-auto">
              Plugins Panel
            </div>
          </div>
          <div className="-16 bg-white border-t">
            <Footer></Footer>
          </div>
      </div>

    </>
  )
}

export default App
