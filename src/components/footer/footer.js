import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>

    
    <footer style={{ backgroundColor: "#ffffff", height: "100px", alignContent: "center", textAlign: "center" }}>
    <center>
            <table width="60%" align="centre" style={{ fontWeight: "400"}}>
                <tr>
                    <th> 
                            <h1> AMAN SHAH</h1>
                            <p> Name</p>
                    </th>

                    <th> 
                            <h1> CAPSTONE 2</h1>
                            <p> Project</p>
                    </th>

                    <th> 
                            <h1> ANAND VARDHAN</h1>
                            <p> Trainer</p>
                    </th>

                    <th style={{ backgroundColor: "#303596", paddingBottom: "20px"}}> 
                            <h1 style={{ color: "#ffffff" }}> 10 - 04 - 2023</h1>
                            <p style={{ color: "#ffffff" }}> Submited On</p>
                        
                    </th>

                </tr>
            </table>
        </center>
    </footer>
    </div>
  )
}

export default Footer