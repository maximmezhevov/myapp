export const ToggleSettingsWindow = ({settingsWindow, setSettingsWindow, editMode}) => {

  function toggleSettingsWindow() {
    setSettingsWindow(!settingsWindow)
  }

  const button_textContent = settingsWindow ? 'Закрыть' : 'Настройки'
  const button_disabled = editMode

  return ( 
    <button className='todo-button' onClick={() => toggleSettingsWindow()} disabled={button_disabled}>
      {button_textContent}
    </button>
  )
}