import React from "react";
import { useBooksContext } from "../utils/GlobalState";



const Styles = {
    // nav: {
    //     fontWeight: 900,
    //     fontSize: "26px"
    // }
}
function Saved() {
    const [state, dispatch] = useBooksContext();
    return (
        <div>
            {state.map(book => {
                return (<div>
                    <p>{state.title}</p>
                <p>{state.description}</p>
                </div>)
            })
            }
      {/* <div class="nav-wrapper #1976d2 blue darken-2">
        <a linkto="/" class="left" style={Styles.nav}>Books</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="" >Search</a></li>
          <li><a href="" >Saved</a></li>
    
        </ul>
      </div> */}
      </div>
      );
    
}

export default Saved;