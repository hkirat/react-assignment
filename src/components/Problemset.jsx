import React from "react";
import Problems from "../Allproblems";
import ProblemCard from "./ProblemCard";

function Problem(){
    return (
        <div>
            <ProblemCard 
                titles = {Problems[0].title}
                acceptances = {Problems[0].acceptance}
                difficultys = {Problems[0].difficulty}
            />
            <hr />
            <ProblemCard 
                titles = {Problems[1].title}
                acceptances = {Problems[1].acceptance}
                difficultys = {Problems[1].difficulty}
            />
            <hr />
            <ProblemCard 
                titles = {Problems[2].title}
                acceptances = {Problems[2].acceptance}
                difficultys = {Problems[2].difficulty}
            />
        </div>
    );
}

export default Problem;