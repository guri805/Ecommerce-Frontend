
import Button from '@mui/material/Button';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import SignupForm from '../_component/common/SignupForm';


const Signup = () => {

    return (
        <section className='loginSection py-10'>
            <div className="container">
                <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10 flex flex-col gap-4">
                    <h3 className='text-center text-lg text-black font-semibold'>Register with new Account</h3>
                    <SignupForm />
                    <p className='signuplink text-center '>Already have an account? <Link className='font-semibold link' href={"/login"}>login</Link></p>
                    <p className='text text-center mt-[-5px]'>Or continue with social account</p>
                    <Button className='flex gap-3 items-center !w-full !bg-[#f1f1f1] !mt-[-12px] !text-black'><FcGoogle className='text-[27px]' /> Login with Google</Button>
                </div>
            </div>
        </section >
    )
}

export default Signup
