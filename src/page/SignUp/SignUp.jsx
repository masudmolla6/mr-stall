import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm();

          const onSubmit = (data) => {
            console.log(data)
          };

    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp now!</h1>
            </div>
            <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoUrl", { required: true })}
                    placeholder="PhotoUrl"
                    className="input input-bordered"
                  />
                  {errors.photoUrl && <span>This field is required</span>}
                </div>
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
                    value="SignUp"
                  />
                </div>
                <p>
                  Already Have An Account ? <Link to="/LogIn">LogIn Now</Link>
                </p>
                <div className="divider">OR</div>
                <p>ok</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;