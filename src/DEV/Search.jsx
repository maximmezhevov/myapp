// import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
  const [users, setUsers] = useState([])

  // async function fetchUsers() {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users') // ?_start=0&_limit=5
  //   setUsers(response.data)
  // }
  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?&_limit=8')
      .then((response) => response.json())
      .then(data => setUsers(data));
  }, [])

  //

  const LiveLinearSearch = () => {
    const [nameQuery, setNameQuery] = useState('')
    const filteredUsers = users
      .filter(user => user.name.toLowerCase().includes(nameQuery.toLowerCase()))

    return (
      <div className='w-72 flex flex-col gap-y-2'>
        <h2>Live search (Linear search)</h2>
        <form className='relative flex items-center' onSubmit={(event) => event.preventDefault()} >
          <input className='w-full pl-1 pr-[22px] border rounded bg-transparent focus:outline-none' value={nameQuery} onChange={(event) => setNameQuery(event.target.value)} placeholder='Search...' maxLength='13' />
          {nameQuery.length > 0 &&
            <button className='absolute right-[6px]' onClick={() => setNameQuery('')} tabIndex='-1'>
              <svg className='w-3 h-3'
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          }
        </form>
        <ul className=' min-h-[220px] flex flex-col gap-y-1'>
          {filteredUsers.length > 0 
          ? (filteredUsers.map(user => (
              <li key={user.id} className='w-full text-center'>
                {user.name}
              </li>
            )))
          : <button className='w-full text-center text-red-400 cursor-pointer' onClick={() => setNameQuery('')}>
              no matches
            </button>
          }
        </ul>
      </div>
    )
  }

  const CustomAutocomplete = () => {
    const [nameQuery, setNameQuery] = useState('')
    const filteredUsers = users
      .filter(user => user.name.toLowerCase().includes(nameQuery.toLowerCase()))

    const [autocomplete, setAutocomplete] = useState(null)

      const header = () => <h2>Custom autocomplete (Linear search)</h2>

    return (
      <div className='flex flex-col gap-y-2'>
        {header()}
        <form 
          onSubmit={(event) => event.preventDefault()} 
          className='relative w-[200px] flex items-center'>
          <input type='text' placeholder='Search...' maxLength='10'
          value={nameQuery} 
          onChange={(event) => setNameQuery(event.target.value)} 
          onClick={() => setAutocomplete(true)}
          className={`relative w-full px-1 border focus:outline-none focus:border-black`} />
          {nameQuery &&
            <svg className={`absolute right-[4px] w-4 h-4 cursor-pointer ${!filteredUsers.length > 0 && 'text-red-400'}`} onClick={() => setNameQuery('')}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          }
          {(nameQuery && autocomplete) &&
          <div className={`absolute top-[26px] w-full bg-white border drop-shadow-lg`}>
            {filteredUsers.length > 0 ?
              (filteredUsers
                .map(user => (
                  <button key={user.id}
                    onClick={
                      (event) => setNameQuery(event.target.textContent) &
                      setAutocomplete(false)
                    }
                    className='px-1 w-full text-start hover:bg-gray-100 focus:bg-gray-100 cursor-pointer'>
                    {user.name}
                  </button>
                ))
              ) 
            :
              <button onClick={() => setNameQuery('')} className='w-full text-center text-red-400 border focus:outline-none focus:border-red-300 cursor-pointer'>no matches</button>
            }
          </div>
        } 
        </form>
        {/* <ul className='w-[200px] min-h-[236px] flex flex-col gap-y-1'>
          {filteredUsers
            .map(user => (
              <li key={user.id} className='w-full text-center'>
                {user.name}
              </li>
            ))
          }
        </ul> */}
      </div>
    )
  }

  // const CustomAutocomplete2 = () => {
  //   const [nameQuery, setNameQuery] = useState('')
  //   const filteredUsers = users
  //     .filter(user => user.name.toLowerCase().includes(nameQuery.toLowerCase()))

  //   const [autocompleteIsOpen, setAutocompleteIsOpen] = useState(null)

  //   return (
  //     <div className='flex flex-col gap-y-2'>
  //       <h2>Custom autocomplete (Linear search)</h2>
  //       <form autoComplete='off' 
  //         onSubmit={(event) => event.preventDefault()} 
  //         className='relative w-[300px] flex items-center gap-x-1'
  //       >
  //         <input type='text' placeholder='Search'  maxLength='10' 
  //           value={nameQuery} 
  //           onChange={(event) => setNameQuery(event.target.value)} 
  //           onClick={() => setAutocompleteIsOpen(true)} 
  //           className={`searchInput grow border pl-[22px] ${nameQuery && 'pr-[22px]'} focus:outline-none focus:border-blue-600`}
  //         />
  //         {nameQuery &&
  //           <svg onClick={() => setNameQuery('')} className='w-4 h-4 absolute right-[69px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  //           </svg>
  //         }
  //         {(nameQuery && autocompleteIsOpen) &&
  //           <ul className='absolute top-[29px] w-[235.48px] border bg-white'>
  //             {filteredUsers
  //               .map(user => (
  //                 <li key={user.id} className='hover:bg-gray-200 cursor-pointer px-[6px] py-0.5' 
  //                   onClick={
  //                     (event) => setNameQuery(event.target.textContent) &
  //                     setAutocompleteIsOpen(false)
  //                   }
  //                 >
  //                   {user.name}
  //                 </li>
  //               ))
  //             }
  //           </ul>
            
  //         }
  //         <button type='submit' className='border px-1 focus:outline-none focus:border-blue-600'>Search</button>
  //       </form>
  //       <ul className='w-[300px] min-h-[210px] flex flex-col gap-y-1'>
  //         {filteredUsers
  //           .map(user => (
  //             <li key={user.id} className='w-full border text-center'>
  //               {user.name}
  //             </li>
  //           ))
  //         }
  //       </ul>
  //     </div>
  //   )
  // }

  const useSearchParamsReactRouterDom = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const nameQuery = searchParams.get('name') || '';

    const handleSearch = (event) => {
      // event.preventDefault()
      const name = event.target.value

      if (name) 
         return setSearchParams({ name });
      return setSearchParams({})
    }

    return (
      <div className='flex flex-col gap-y-2'>
        <div>
          <div>{`URL search(Linear search) ... { useSearchParams } from 'react-router-dom'`}</div>
          <div>{`URL.../search${nameQuery && `?${searchParams}`}`}</div>
        </div>
        <form onSubmit={(event) => event.preventDefault()} className='relative w-[300px] flex items-center gap-x-1'>
          <label htmlFor='input2' className='absolute left-[6px] cursor-pointer '>
            <svg className='w-[14px] h-[14px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </label>
          <input type='text' id='input2' value={nameQuery} onChange={handleSearch} className={`searchInput grow border pl-[22px] ${nameQuery && 'pr-[22px]'} focus:outline-none focus:border-blue-600`} maxLength='10' placeholder='Search'/>
          {nameQuery &&
            <svg onClick={() => setSearchParams('')} className='w-4 h-4 absolute right-[4px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
        </form>
        <ul className='w-[300px] flex flex-col gap-y-1'>
          {users
            .filter(user => user.name.toLowerCase().includes(nameQuery.toLowerCase()))
            .map(user => (
              <li key={user.id} className='w-full border text-center'>
                {user.name}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-y-5'>
      <div className='flex gap-x-5'>
        {/* {LinearSearch()} */}
        {LiveLinearSearch()}
        {CustomAutocomplete()}
      </div>
      {useSearchParamsReactRouterDom()}
    </div>
  )
}