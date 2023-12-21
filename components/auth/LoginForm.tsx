"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Boton from "../ui/Boton";
import { useAuthContext } from "../context/AuthContext";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // })
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <div className="relative mb-4">
              <label  className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={values.email}
                required
                placeholder="Tu email"
                name="email"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={values.password}
                required
                placeholder="Tu password"
                name="password"
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button onClick={() => loginUser(values)} className="text-black bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">Ingesar</button>
            <button onClick={() => registerUser(values)} className="text-black bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg my-2">Registrarme</button>
            <button onClick={googleLogin} className="text-black bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">Ingresar con Google</button>
            <p className="text-xs text-gray-500 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
