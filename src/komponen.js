import React from "react";

class ClassComponent extends React.Component{

    render() {
        return(
            <div>
                <h1>Hello {this.props.nama}</h1>
            </div>

        )
        
    
    }
}

export default ClassComponent