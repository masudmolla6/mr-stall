import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
          const {
            register,
            handleSubmit,
            formState: { errors },
    } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div>
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password && <span>This field is required</span>}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="LogIn"
                    />
                  </div>
                  <p>
                    New here ? <Link to="/signup">Create Account</Link>
                  </p>
                  <div className="divider">OR</div>
                  <p>hello</p>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Login;