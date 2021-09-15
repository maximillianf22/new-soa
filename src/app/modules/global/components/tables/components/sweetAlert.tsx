import React from 'react'

export const sweetAlert = () => {
    return (
        <div>
            
        </div>
    )
}

// import React, {Component } from 'react';
// import SweetAlert from 'react-bootstrap-sweetalert';

// class Hero extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             alert: false,
//         };
//     }  

//     showAlert = () => {
//       this.setState({
//         alert: true,
//       })
//     };

//     render(){
//         return (
//           <>
//             <section className = "hero">
//                 <nav>
//                     <h2>Book Exchange</h2>
//                     <button onClick={this.showAlert}>Logout</button>
//                 </nav>
//             </section>
//             { 
//                 this.state.alert && <SweetAlert
//                     title="Here's a message!"
//                     onConfirm={this.props.handleLogout}
//                     onCancel={this.onCancel}
//                     showCancel={true}
//                     focusCancelBtn={true}
//                     />
//              }
//             </>
//         );
//     }
// };
// export default Hero;