import React from "react";

const Searchbox= ({searchfield,searchChange}) => {
    return(
        <div className="pa2">
            <input className="pa3 ba b--greem bg-lightest-blue" type='search' placeholder='search for friends' onChange={searchChange}/>
        </div>
    );
}
export default Searchbox;