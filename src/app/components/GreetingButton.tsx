"use client";
import React from "react";

type Props = {name:string};

const GreetingButton = (props: Props) => {
    return(
        <button
            onClick={() => {
                // alert("Wellcome " + props.name);
                alert(`Wellcome ${props.name}`);
            }}
            className="bg-blue-500 text-white rounded-2xl">
                Wellcome {props.name};
            </button>
    );};
export default GreetingButton;
