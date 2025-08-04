import React from 'react';
import Counter from "../components/Counter";
import Friend from "../components/Friend"
import MovieComp from "../components/MovieComp";
import MoviesVerse from "../components/MoviesVerse";
import ExampleOne from "../example/ExampleOne";
import ExampleTwo from "../example/ExampleTwo";
import User from "../pages/User";


const LearningPage = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", marginBottom: "2.5rem" }}>
                <Counter />
                <Friend />
            </div>
            <br />
            <hr />
            <br />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", marginBottom: "2.5rem" }}>
                <MovieComp />
                <MoviesVerse />
            </div>
            <br />
            <hr />
            <br />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", marginBottom: "2.5rem" }}>
                <ExampleOne />
                <ExampleTwo />
            </div>
            <br />

            <hr />
            <br />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", marginBottom: "2.5rem" }}>
                <User />
            </div>
        </div>
    )
}

export default LearningPage