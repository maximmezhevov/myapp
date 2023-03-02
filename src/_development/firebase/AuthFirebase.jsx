import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link, Outlet, useNavigate, useLocation } from "react-router-dom" 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { removeUser, setUser } from "../../features/authFirebase/authFirebaseSlice";


export function useAuth() {
  const {email, token, id} = useSelector(state => state.authFirebase)
  return {
    isAuth: !!email,
    email, token, id
  }
}

const Layout = () => {
  const dispatch = useDispatch()
  const {isAuth, email} = useAuth()
  

  const handleLogOut = () => {
    dispatch(removeUser())
    
  }

  return (
    <div id='authFirebase' className='w-full'>
      <div>
        <Link to='/firebase'>👈 to all <span className='text-orange-500'>firebase</span> mini-projects</Link>
        <h1 className='text-xl font-bold flex items-end gap-x-1'>
          <span>Authorization</span>
          <span className='text-orange-500'>Firebase</span>
        </h1>
        <div className='flex gap-x-2'>
          code:
          <a href=' ' target='_blank' className='hover:text-blue-500'>app
            <span className={`text-xs before:content-['_↗']`}>(github)</span>
          </a>
          <a href=' ' target='_blank' className='hover:text-blue-500'>slice
            <span className={`text-xs before:content-['_↗']`}>(github)</span>
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-x-1'>
          <Link to='/authFirebase'>index</Link>
          <Link to='page1'>page1</Link>
          <Link to='page2'>page2</Link>
        </div>
        <div>
          {isAuth 
          ? <div className='flex gap-x-3'>
              <Link to='profile' className='text-blue-500'>{email}</Link>
              <div className='border-r'></div>
              <button onClick={handleLogOut} className='text-blue-500'>Sing out</button>
            </div>
          : <Link to='login' className='text-blue-500'>Sing in</Link>
          }
        </div>
      </div>
      <Outlet />
    </div>
  )
}

const Router = () => {
  return (
    <Routes>
      <Route path='/*' element={<Layout />}>
        <Route index element={<IndexPage /> } />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage /> } />
        <Route path='page1' element={<div>page1</div>} />
        <Route path='page2' element={<div>page2</div>} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export const AuthFirebase = () => {
  return <Router />
}

const IndexPage = () => {
  const {isAuth, email} = useAuth()
  return (
    <div>
      {/* <h2 className='text-lg font-bold'>Index</h2> */}
      <div>
        {!isAuth
          ? <div className='flex justify-center gap-x-3'>
              <Link to='/authFirebase/login' className='text-blue-500'>Sing in</Link>
              <div className='border-r'></div>
              <Link to='/authFirebase/register' className='text-blue-500'>Sing up</Link>
            </div>
          : <div className='text-center'>Hello {email} 👋</div>
        }
      </div>
    </div>
  )
}

const RegisterPage = () => {
  return (
    <div>
      {/* <h2 className='text-lg font-bold'>register</h2> */}
      <div className='w-[350px] mx-auto border p-3'>
        <div>
          <h2 className='text-lg font-bold text-center'>Sing up</h2>
        </div>
        <div>
          <Register />
        </div>
        <div className='text-center'>
          Already have an account? <Link to='/authFirebase/login' className='text-blue-500'>Sing in</Link>
        </div>
      </div>
    </div>
  )
}

const LoginPage = () => {
  return (
    <div className='mx-auto'>
      {/* <h2 className='text-lg font-bold'>login</h2> */}
      <div className='w-[350px] mx-auto border p-3'>
        <div>
          <h2 className='text-lg font-bold text-center'>Sing in</h2> 
        </div>
        <div>
          <Login />
        </div>
        <div className='text-center'>
        Сreate an account? <Link to='/authFirebase/register' className='text-blue-500'>Sing up</Link>
        </div>
      </div>
    </div>
  )
}

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='my-3 flex flex-col gap-y-1'>
      {/* <label htmlFor='email'>Email address</label> */}
      <input /*id='email'*/ type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email address...' className='w-full border px-1'/>
      {/* <label htmlFor='password'>Password</label> */}
      <input /*id='password'*/ type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password...' className=' w-full border px-1'/>
      <button onClick={() => handleClick(email, password)} className='w-full border px-1 hover:bg-gray-50'>{title}</button>
    </div>
  )
}

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth() //;console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          uid: user.uid,
          token: user.accessToken,
        }))
        navigate('/authFirebase')
      })
      .catch(console.error)
  }
  return <Form title='Sing up' handleClick={handleRegister}/>
}


export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          uid: user.uid,
          token: user.accessToken,
        }))
        navigate('/authFirebase')
      })
      .catch(console.error)
  }
  return <Form title='Sing in' handleClick={handleLogin}/>
}

const Profile = () => {
  const {isAuth, email} = useAuth()

  // const auth = getAuth();
  // const user = auth.currentUser;
  // const test = () => {
  //   if (user) {
  //     return (
  //       <div>
  //         <div>email: {user.email}</div>
  //       </div>
  //     )
  //   } else {
  //     <div className='text-center'>
  //       <Link to='/authFirebase/login' className='text-blue-500'>Sing in</Link>
  //     </div>
  //   }
  // }

  return (
    <div>
      <h2 className='text-center text-lg font-bold'>Profile</h2>
      {isAuth
        ? <div>
            <div>email: {email}</div>
          </div>
        : <div className='text-center'>
            <Link to='/authFirebase/login' className='text-blue-500'>Sing in</Link>
          </div>
      }
      {/* {test()} */}
    </div>
  )
}

