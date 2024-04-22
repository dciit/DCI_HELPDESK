// import { useForm } from 'react-hook-form'
// import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import LoginBtnSignIn from './login.btn.sign.in'

function FormLogin() {
    // const form = useForm()

    return <div className='flex  flex-col border rounded-lg border-gray-800 p-6'>
        <span className='text-[1.5em] font-semibold'>Login</span>
        <span className='text-muted-foreground'>Enter you email below to login to your account.</span>
        <br />
        <div className='flex flex-col gap-1'>
            <span className='font-semibold'>Email</span>
            <Input placeholder='####.#' />
        </div>
        <br />
        <div className='flex flex-col gap-1'>
            <span className='font-semibold'>Password</span>
            <Input placeholder='####.#' />
        </div>
        <br />
        <LoginBtnSignIn />
    </div>

}

export default FormLogin