import React from "react";

const Scrool = (props) =>{
    return(
        <div style={{overflow:'scroll',border:'5px solid black', height:'530px' }}>
            {props.children}
        </div>
    );
};

export default Scrool;