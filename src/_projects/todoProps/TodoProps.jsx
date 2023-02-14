import { useState } from 'react'

import { Header } from './components/Header'
import { ToggleSettingsWindow } from './components/ToggleSettingsWindowState'
import { Settings } from './components/Settings'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { TodoPropsForm } from './components/TodoPropsForm'
import { FavoritesListHeader } from './components/FavoritesListHeader'
import { FavoritesList } from './components/FavoritesList'
import { TodosListHeader } from './components/TodosListHeader'
import { TodosList } from './components/TodosList'
import { RemovePanel } from './components/RemovePanel'

export const TodoProps = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Сделать то', isCompleted: true, favorites: true},
    { id: 2, title: 'Сделать сё', isCompleted: true, favorites: false},
    { id: 3, title: 'И это тоже', isCompleted: false, favorites: false},
    // { id: 65 title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius quas et temporibus veniam iure voluptatem soluta, similique maxime nemo! Architecto laboriosam illum voluptatum tempore quibusdam modi repellendus sapiente aut?', isCompleted: false, favorites: false}
  ])
  const [settingsWindow, setSettingsWindow] = useState(false)
  const [editMode, setEditMode] = useState(null) 
  const [abbilityСancelTask, setAbbilityСancelTask] = useState(true)
  const [tab, setTab] = useState('all')

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='h-5/6 w-[500px] flex flex-col item-center justify-between gap-y-2 p-2 rounded-lg bg-white shadow drop-shadow-lg'>
        <Header settingsWindow={settingsWindow}>
          <ToggleSettingsWindow 
            settingsWindow={settingsWindow} setSettingsWindow={setSettingsWindow} 
            editMode={editMode}/>
        </Header>
        {settingsWindow
        ? <>
            <main className='grow overflow-y-auto'>
              <Settings 
                abbilityСancelTask={abbilityСancelTask} setAbbilityСancelTask={setAbbilityСancelTask}
              />
            </main>
            <Footer />
          </> 
        : <>
            <TodoPropsForm
              todos={todos} setTodos={setTodos}
              editMode={editMode}
            />
            <Navigation
              todos={todos}
              tab={tab} setTab={setTab}
              editMode={editMode}
            />
            <main className='grow flex flex-col overflow-y-auto gap-y-1'> 
              <FavoritesListHeader 
                todos={todos} 
                tab={tab}
              />
              <FavoritesList 
                todos={todos} setTodos={setTodos} 
                editMode={editMode} setEditMode={setEditMode} 
                abbilityСancelTask={abbilityСancelTask}
                tab={tab} setTab={setTab}
              />
              <TodosListHeader 
                todos={todos} 
                tab={tab} 
              />
              <TodosList 
                todos={todos} setTodos={setTodos} 
                editMode={editMode} setEditMode={setEditMode} 
                abbilityСancelTask={abbilityСancelTask}
                tab={tab} setTab={setTab}
              />
            </main>
            <RemovePanel
              todos={todos} setTodos={setTodos} 
              editMode={editMode}
            />
          </>
        }
      </div>
    </div>
  ) 
}