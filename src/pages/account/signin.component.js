import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginThunk, getCurrentUserThunk } from "../../redux/account-user/user.slice";
import { useForm } from "react-hook-form";


const SignInUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const { username, password } = data;
        const {payload: {status}} = await dispatch(LoginThunk({ username, password }));
        console.log(status);
        try {
            if (status === 200) {
                alert('Login successful.');
                dispatch(getCurrentUserThunk());
                navigate('/');
            } else {
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
    };

    return (
        <main>
            <section className="container signin">
                <div className="content">
                    <h1>Welcome to CarDealer. Sign In!</h1>
                </div>
                <div className="main">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="main--input">
                            <input
                                {...register("username", { required: true })}
                                type="text"
                                aria-label="mail-phone"
                                placeholder="Number phone or email*"
                            />
                            {errors.username && <div className="error" style={{ color: "red" }}>Username is required.</div>}
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                aria-label="password"
                                placeholder="Password*"
                            />
                            {errors.password && <div className="error" style={{ color: "red" }}>Password is required.</div>}
                            <div className="forgot__password">
                                <a href="./resetpassword.html">Forgot password?</a>
                            </div>
                        </div>
                        <div className="main--button">
                            <button className="button_signin" type="submit">
                                Login
                            </button>
                            <button className="button_signup" type="button" onClick={() => navigate('/signUp')}>
                                Register
                            </button>
                        </div>
                    </form>


                </div>
            </section>
        </main>
    );
};

export default SignInUser;
