import { useState, useEffect } from "react";
import { PlayPomodoro } from "../components/PlayPomodoro";
import { Timer } from "../components/Timer";
import { UserPopup } from "../components/UserPopup";
import { auth, provider } from "../firebase/index";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOutUser, setUser } from "../features/userSlice";

export const Home = () => {
  const [userModal, setUserModal] = useState(false);
  const { isSignin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setUserModal(true);
  };

  const handleCloseModal = () => {
    setUserModal(false);
  };

  const handleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      dispatch(signIn());
      setUserModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async () => {
    await signOut(auth);
    dispatch(signOutUser());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        return;
      }
      const displayName = currentUser.displayName;
      const photoUrl = currentUser.photoURL;
      dispatch(signIn());
      dispatch(setUser({ displayName, photoUrl }));
    });
  }, [dispatch]);

  return (
    <div className="w-full px-6 py-4 lg:w-[600px] mx-auto bg-secondary bg-opacity-40 min-h-screen">
      <header className="w-full flex justify-between items-center" hidden={!user}>
        <div className="w-1/2">
          <h1 className="text-primary text-lg">
            Hello, <span className="font-bold">{isSignin ? user.displayName.split(" ")[0] : "name"}</span>
          </h1>
        </div>
        <button className="border border-primary group px-3 rounded-full py-1 text-primary hover:bg-primary hover:text-white" onClick={isSignin ? handleSignout : handleOpenModal}>
          {/* <img src="" alt="" id="profile-picture" className="group-hover:cursor-pointer" /> */}
          {isSignin ? "Sign Out" : "Sign In"}
        </button>
      </header>
      <UserPopup userModal={userModal} closeModal={handleCloseModal} signin={handleSignin} />
      <section>
        <Timer />
      </section>
      <section>
        <PlayPomodoro />
      </section>
    </div>
  );
};

// Next nya data user harus masuk ke redux, biar gampang oper datanya
