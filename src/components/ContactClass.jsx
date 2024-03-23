import React from "react";
import { UserContext } from "./utils/userContext";

class ContactClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            userInfo:{
                name:"sree",
                location:"kerala"
            }
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/ek-sree")
        const data = await response.json()

        this.setState({
            userInfo:data
        })
    }

    render(){

        const{name,location, avatar_url} = this.state.userInfo
        const {count} = this.state;
        return(
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1>{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                <h1>Members: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count</button>
                <button style={{marginLeft:"10px"}} onClick={()=>{
                    this.setState({
                        count:0
                    })
                }}>Reset</button>
                <div className="details">
                    <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                {/* <h3>Contact Info: {Info}</h3> */}
                </div>
            </div>
        )
    }
}

export default ContactClass;