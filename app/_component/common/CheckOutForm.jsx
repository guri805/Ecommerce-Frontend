'use client'
import TextField from '@mui/material/TextField';

const CheckOutForm = () => {
    return (
        <form className='w-full flex flex-col gap-3 mt-3'>
            <div className="flex gap-4 w-full">
                <TextField type='text' label="Full Name" variant="outlined" size='small' className='w-full' />
                <TextField label="Email" type='email' variant="outlined" size='small' className='w-full' />
            </div>
            <h3>Street Address*</h3>
            <TextField type='text' label="House No and Street Name" variant="outlined" size='small' className='w-full' />
            <TextField type='text' label="Apartment, suite, unit, etc.(optional)" variant="outlined" size='small' className='w-full' />
            <TextField type='text' label="Town/City" variant="outlined" size='small' className='w-full' />
            <TextField type='text' label="State/Country" variant="outlined" size='small' className='w-full' />
            <h3>Postcode/ZIP*</h3>
            <TextField type='text' label="Zip Code" variant="outlined" size='small' className='w-full' />
            <div className="flex gap-4">
                <TextField type='text' label="Phone Number" variant="outlined" size='small' />
                <TextField label="Email Address" type='email' variant="outlined" size='small' />
            </div>
        </form>
    )
}

export default CheckOutForm
