import { createSlice } from "@reduxjs/toolkit";
import react from "react";
import firebase from "firebase";
import { useAuth0 } from "@auth0/auth0-react";
var id;

// export const idSlice = createSlice({
//   name: "id",
//   initialState: { value: [] },
//   reducers: {
//     getProfile: (state, action) => {
//       firebase
//         .firestore()
//         .collection("shopper")
//         .doc("prof")
//         .collection("profile")
//         .doc(id)
//         .get()
//         .then((snapshot) => {
//           state.value.push(snapshot);
//         });
//     },
//   },
// });

export const profileSlice = createSlice({
  name: "profile",
  initialState: { value: [] },
  reducers: {
    getProfile: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { getProfile } = profileSlice.actions;
export default profileSlice.reducer;
