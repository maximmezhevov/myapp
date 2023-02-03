import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import { useState } from 'react'
import { ContextProjects } from './ContextProjects' 

import { About } from './pages/About'
import { Contacts } from './pages/Сontacts'
import { TodoProps } from './pages/workshop/projects/todoProps/TodoProps'
import { AccordionApp } from './pages/workshop/development/Accordion/AccordionApp'
import { TabsApp } from './pages/workshop/development/Tabs/TabsApp'
import { DropDownApp } from './pages/workshop/development/DropDown/DropDownApp'
import { Search } from './pages/workshop/development/Search'
import { Other } from './pages/workshop/development/other/Other'


const Main = () => {
  const [projects] = useState([
    {id: 'about', category: 'pages', app: <About />},
    {id: 'contacts', category: 'pages', app: <Contacts />},
  
    {id: 'todoProps', category: 'projects', app: <TodoProps />, disc: 'useContex and .... bla bla bla'},
  


    {id: 'accordion', category: 'development', app: <AccordionApp />},
    {id: 'tabs', category: 'development', app: <TabsApp /> },
    {id: 'dropdown', category: 'development', app: <DropDownApp />},
    {id: 'search', category: 'development', app: <Search />},
    {id: 'other', category: 'development', app: <Other />}


    // {id: 'test', category: 'test', app: <div>test</div>},
  
    // {id: 'sdfsdsdf234fsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfsd234fsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sd2423fsdfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: '4234',category: 'projects', app: <div>asdasda</div>},
    // {id: '234',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfs324df3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: '1dfgdfgdg', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfsf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfsdf3dfsd123f',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfsdfsdfs123df3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: '42424',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdf3234234',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfsdf3dfsd12313f',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfs23424df3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdsdfsdf343fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfsdfsdfsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfssdfsd234d2f3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdfsdf4234d3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssd44d44d14fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfssd11d1d1dfsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'd14',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssdf1414cdsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: '1231', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfssdfd141sdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssd44d44d99fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfssd48844d14fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdf1231ssdfsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdf3d44d44d14fsdf3dfsdf', category: 'projects',app: <div>asdasda</div>},
    // {id: 'sdfssd44d14d14fsdf3dfsdf',category: 'projects', app: <div>asdasda</div>},
    // {id: 'sdfssd44d44d14fsd13dfsdf',category: 'projects', app: <div>asdasda</div>},
  ])
  return (
    <React.StrictMode>
      <ContextProjects.Provider value={{projects}}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ContextProjects.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <Main />
)
