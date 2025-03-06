"use client";
import { Button, TextField } from "@mui/material";

const ProfileForm = () => {
    return (
        <form className="mt-5">
            <div className="grid grid-cols-2 gap-5">
                <TextField label="Full Name" variant="outlined" size="small" className="w-full" />
                <TextField label="Email" variant="outlined" size="small" type="email" className="w-full" />
                <TextField label="Phone Number" variant="outlined" size="small" className="w-full" />
            </div>
            <div className="mt-5 flex gap-5">
                <Button variant="contained" color="primary">Save</Button>
                <Button variant="contained" color="secondary">Cancel</Button>
            </div>
        </form>
    );
};

export default ProfileForm;
