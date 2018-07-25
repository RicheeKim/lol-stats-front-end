// import React, { Component } from "react";
// import { Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
//
// const linkStyle = {
//   background: "#F2F2F2",
//   textDecoration: "none",
//   visited: "none",
//   link: "none"
// };
//
// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   render() {
//     return (
//       <Menu fixed="top">
//         <Menu.Item header as="h3">
//           ConcertPlan
//         </Menu.Item>
//         <NavLink to="/" exact activeStyle={linkStyle}>
//           {this.props.loggedIn ? (
//             <Menu.Item header as="h4">
//               <Icon name="home" /> Home
//             </Menu.Item>
//           ) : (
//             <Menu.Item header as="h4">
//               <Icon name="chevron down" /> Login
//             </Menu.Item>
//           )}
//         </NavLink>
//         <NavLink to="/concerts" exact activeStyle={linkStyle}>
//           <Menu.Item header as="h4">
//             <Icon name="ticket" />Concerts
//           </Menu.Item>
//         </NavLink>
//         <NavLink to="/plans" exact activeStyle={linkStyle}>
//           <Menu.Item header as="h4">
//             <Icon name="users" /> Plans
//           </Menu.Item>
//         </NavLink>
//       </Menu>
//     );
//   }
// }
//
// export default Navbar;
