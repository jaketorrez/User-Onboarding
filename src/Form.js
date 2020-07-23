import React, { useReducer } from "react";

export default function Form(props) {
    const {
        user,
        errors,
        handleInputChange,
        handleCheckboxChange,
        handleSubmit,
        buttonDisabled
    } = props;

    return (
        <form onSubmit={ event => handleSubmit(event)}>
            <h2>Create a Free Account</h2>
            <label htmlFor="Name">
                Name:
                <input type="text"
                name="name"
                value={user.name}
                onChange={event => handleInputChange(event)} />
            </label> <br />
            {errors.name.length > 0 ? <p>{errors.name}</p> : null}

            <label htmlFor="Email">
                Email:
                <input type="email"
                name="email"
                value={user.email}
                onChange={event => handleInputChange(event)} />
            </label> <br />
            {errors.email.length > 0 ? <p>{errors.email}</p> : null}

            <label htmlFor="Password">
                Password:
                <input type="password"
                name="password"
                value={user.password}
                onChange={event => handleInputChange(event)} />
            </label> <br />
            {errors.password.length > 0 ? <p>{errors.password}</p> : null}

            <label htmlFor="terms">
                I accept the terms and conditions.
                <input type="checkbox"
                name="terms"
                value={user.terms}
                onChange={event => handleCheckboxChange(event)} />
            </label> <br />
            {errors.terms.length > 0 ? <p>{errors.terms}</p> : null}

            <button disabled={buttonDisabled}>
                Submit!
            </button>
        </form>
    );
}
