import { useState } from "react"
import mobile from './assets/image/image-hero-mobile.png';
import desktop from './assets/image/image-hero-desktop.png';
import audiophile from './assets/image/client-audiophile.svg';
import databiz from './assets/image/client-databiz.svg';
import maker from './assets/image/client-maker.svg';
import meet from './assets/image/client-meet.svg';
 import logo from './assets/image/logo.svg'; 
 import chevroDown from './assets/image/icon-arrow-down.svg';
 import chevronUp from "./assets/image/icon-arrow-up.svg"
 import menuOpen from './assets/image/icon-menu.svg';
 import closeMenu from './assets/image/icon-close-menu.svg';
 import todoList from './assets/image/icon-todo.svg';
 import calendar from './assets/image/icon-calendar.svg';
 import reminders from './assets/image/icon-reminders.svg';
 import planning from './assets/image/icon-planning.svg';

 export function App() {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)



  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector(".menu-button")


    navbar.classList.toggle("open")

    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu
  }else{
    menuButton.src = menuOpen
  }
}
  return (
   <>
   <header className='p-5 flex items-center justify-between '>
      <div className='lg:flex lg:items-start lg:justify-start'>
        <img src={logo} alt='logo' className='lg:mr-5' />
        <nav className='navbar'>
          <div>
          <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center  text-gray-600 justify-start"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevroDown} alt="" className="ml-2" />
                )}
              </button>
            {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todoList} alt="" className="mr-2" /> Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} alt="" className="mr-2" /> Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} alt="" className="mr-2" /> Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} alt="" className="mr-2" /> Planning
                  </li>
                </ul>
              )}
          </div>
          <div>
          <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start  text-gray-600"
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevroDown} alt="" className="ml-2" />
                )}
              </button>
            {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
          </div>
          <div>
            <button className='mb-2 lg:mb-0  text-gray-600'>Careers</button>
          </div>
          <div>
            <button className=" text-gray-600">About</button>
          </div>
        </nav>
      </div>
      <div className="lg:hidden">
        <button onClick={handleOpenMenu}>
        <img src={menuOpen}/>
        </button>
      </div>
      <div  className='hidden lg:block'>
      <button className=" mr-12 text-gray-600 hover:text-black">Login</button>
        <button className="px-5 py-2 border-2 border-gray-700 rounded-xl text-gray-600  hover:text-black hover:border-black">Register</button>
      </div>
        
    </header>
    <section className='flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto'>
      <article className='text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0'>
        <h1 className='font-bold text-4xl lg:text-6xl mb-5'>
        Make<br/> remote work
        </h1>
        <p className='mb-5'>
        Get your team in sync, no matter your location.<br/> Streamline processes,create team rituals, and<br/> watch productivity soar.
        </p>
        <button class="bg-black rounded-lg shadow text-white font-bold hover:bg-white hover:text-black hover:border-black hover:border  transition-all duration-150 py-2 px-6 cursor-pointer">
          Learn more
          </button> 

        <ul className='grid grid-cols-4 gap-1 mt-11 place-items-center md:place-items-start'>
          <li><img src={databiz} alt='logo databiz'className='w-16 md:w-24' /></li>
          <li><img src={audiophile} alt='logo audiophile' className='w-16 md:w-24'/></li>
          <li><img src={meet} alt='logo meet' className='w-16 md:w-24' /></li>
          <li><img src={maker} alt='logo maker' className='w-16 md:w-24' /></li>
          
        </ul>
      </article>
      <article>
        <picture>
          <source media='(min-width:768px)' srcSet={desktop}/>
          <img src={mobile} alt="imagem mobile" className='w-full'/>
        </picture>
      </article>
    </section>
      </>
      
  )
}

