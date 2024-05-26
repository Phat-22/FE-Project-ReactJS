import React from "react";
import { useDispatch } from "react-redux";
import { SignUpThunk } from "../../redux/account-user/user.slice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUpUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { username, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const { payload } = await dispatch(SignUpThunk({ username, password }));
            const { status } = payload;
            console.log(status);
            if (status === 201) {
                alert('Sign up successful. Please sign in.');
                navigate('/signIn');
            } else {
                alert('Account already exists')
            }

        } catch (error) {
            alert('Sign up failed. Please try again later.');
        }
    }

    return (
        <main>
            <section className="container signup">
                <div className="content">
                    <h1>Welcome to CarDealer. Sign Up!</h1>
                </div>
                <div className="main">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="main--input">
                            <input
                                type="text"
                                {...register("username", { required: true })}
                                placeholder="First & Last name*"
                                aria-label="name"
                            />
                            {errors.username && <p className="error-message" style={{ color: "red" }}>Please enter your username.</p>}
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                placeholder="Your Password*"
                                aria-label="password"
                            />
                            {errors.password && <p className="error-message" style={{ color: "red" }}>Please enter your password.</p>}
                            <input
                                type="password"
                                {...register("confirmPassword", { required: true })}
                                placeholder="Confirm*"
                                aria-label="confirm-password"
                            />
                            {errors.confirmPassword && <p className="error-message" style={{ color: "red" }}>Please confirm your password.</p>}
                        </div>
                        <br></br>
                        <div className="main--button ">
                            <button className="button_signin">Create An Account</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default SignUpUser;