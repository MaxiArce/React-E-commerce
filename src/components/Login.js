import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Login = () => {
  const { LogUser } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerification, setEmailVerification] = useState("empty");

  const AccountLogin = (e) => {
    e.preventDefault();

    if (emailVerification === "correct" && password !== "") {
      LogUser(email, password);
    } else {
      alert("Check thhe fields!");
    }
  };

  //check if the entered email is correct or not
  const ValidateEmail = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      setEmailVerification("correct");
      setEmail(mail);
    } else if (mail === "") {
      setEmailVerification("empty");
      setEmail("");
    } else {
      setEmailVerification("incorrect");
      setEmail("");
    }
  };

  return (
    <div className="">
      <form className="mt-16 flex flex-col space-y-6">
        <div className="w-full mx-auto shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              onChange={(e) => ValidateEmail(e.target.value)}
              required
              className={`appearance-none rounded-t-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                                      emailVerification === "empty"
                                        ? "bg-white"
                                        : ""
                                    } ${
                emailVerification === "correct" ? "bg-green-100" : ""
              } ${emailVerification === "incorrect" ? "bg-red-800" : ""}`}
              placeholder="*Email"
            ></input>
          </div>

          <div>
            <label htmlFor="password" className="sr-only ">
              password
            </label>
            <input
              type="password"
              autoComplete="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none rounded-b-lg relative block w-full px-3 py-2 border border-gray-300 
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="*Password"
            ></input>
          </div>
        </div>
        <p className="font-light text-black text-sm mx-auto rounded p-2">
          *required fields
        </p>
        <button
          onClick={AccountLogin}
          className="font-bold text-white w-16 mx-auto bg-black rounded p-2"
        >
          Done!
        </button>
      </form>
    </div>
  );
};

export default Login;
