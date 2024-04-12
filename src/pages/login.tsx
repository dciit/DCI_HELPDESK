import LoginAppName from '@/components/login/login.app.name'
import LoginForm from '@/components/login/login.form'

function Login() {
  return (
    <div className='bg-black text-white flex justify-center items-center h-full w-full flex-col'>
      <LoginAppName/>
      <LoginForm/>
    </div>
  )
}

export default Login