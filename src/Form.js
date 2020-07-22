import React, { useReducer } from "react";

export default function Form(props) {
    const {
        user,
        handleChange,
        handleSubmit
    } = props;

    return (
        <form onSubmit={ event => handleSubmit(event)}>
            <label>Name:
                <input type="text"
                name="name"
                value={user.name} />
            </label>

            { /* <label>Email:
                <input type="text"
                name="email"
                value={user.email} />
            </label> */ }

            { /* <label>Password:
                <input type="text"
                name="password"
                value={user.password} />
            </label> */ }

            { /* <label>I accept the terms and services.
                <input type="checkbox"
                name="terms of service"
                value="1" />
            </label> */ }</label>
        </form>
    );
}
