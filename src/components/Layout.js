
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Layout = () =>{
    return(

        <div>
            <nav> 
            <ul>
                <Link to="/Read">
                <Button>Read</Button>
                </Link>
               
                <Link to="/Update">
                <Button>Update</Button>
                </Link>
                
            </ul>
            </nav>
        </div>
    )
}

export default Layout;
