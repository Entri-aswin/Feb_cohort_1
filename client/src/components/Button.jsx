import React, { useState } from "react";

// export default function DefaultButton() {
//     return <button>Default button</button>;
// }

export const PrimaryButton = ({count,onClick}) => {

    return <button onClick={onClick} >Primary Button ---- {count} </button>;
};

// export const SecondaryButton = () => {
//     return <button>Secondary Button</button>;
// };
