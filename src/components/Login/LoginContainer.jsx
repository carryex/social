// import React from "react";
// import Profile from "./Profile";
// import { connect } from "react-redux";
// import { getUserProfile } from "../../redux/profileReducer";
// import { withRouter } from "react-router-dom";
// import { setCurrentPageTitle } from "../../redux/navigationReducer";
// import Grid from "@material-ui/core/Grid";
// import CircularProgress from "@material-ui/core/CircularProgress";
//
// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     this.props.setCurrentPageTitle(this.props.pageTitle);
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = 2;
//     }
//     this.props.getUserProfile(userId);
//   }
//
//   render() {
//     if (!this.props.profile) {
//       return (
//         <Grid container justify="center">
//           <Grid item>
//             <CircularProgress />
//           </Grid>
//         </Grid>
//       );
//     }
//     return <Profile {...this.props} />;
//   }
// }
//
// let mapStateToProps = (state) => {
//   return {
//     profile: state.profilePage.profile,
//     pageTitle: state.profilePage.pageTitle,
//   };
// };
//
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {
//   setCurrentPageTitle,
//   getUserProfile,
// })(WithUrlDataContainerComponent);
