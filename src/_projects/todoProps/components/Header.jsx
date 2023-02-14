export const Header = ({settingsWindow, children}) => {
  
  const heading_textContent = settingsWindow ? 'Настройки TodoProps' : 'TodoProps'
  
  return (
    <header className='relative flex justify-center p-2'>
      <h1 className='cursor-default'>
        {heading_textContent}
      </h1>
      <nav className='absolute left-2'>
        {children}
      </nav>
    </header>
  )
}