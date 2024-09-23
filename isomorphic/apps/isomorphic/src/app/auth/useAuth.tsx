import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebase'; // Import Firebase auth and Firestore database, ensure Firebase is initialized properly.
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase function to track changes in authentication state.
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions to get a document reference and retrieve data.

export const useAuth = () => {
  // useState hook to store the current user's information (initially set to null).
  const [user, setUser] = useState(null);

  // useEffect hook runs when the component mounts and sets up the auth listener.
  useEffect(() => {
    // Set up a listener for authentication state changes (login/logout).
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // If a user is logged in, fetch the user's role from Firestore using their UID.
        fetchUserRole(currentUser.uid).then((role) => {
          // Once the role is fetched, update the user state with the UID, email, and role.
          setUser({ uid: currentUser.uid, email: currentUser.email, role });
        });
      } else {
        // If no user is logged in, reset the user state to null.
        setUser(null);
      }
    });

    // Return a cleanup function to unsubscribe from the auth listener when the component unmounts.
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs only once when the component mounts.

  // Return the current user's state (which includes their UID, email, and role).
  return { user };
};

// Function to fetch the user's role from Firestore using their UID.
const fetchUserRole = async (uid) => {
  // Get a reference to the Firestore document for the user in the "staff" collection.
  const docRef = doc(db, 'staff', uid);
  // Retrieve the document snapshot from Firestore.
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    // If the document exists, return the user's role field from the Firestore document.
    return docSnap.data().role;
  } else {
    // If the document does not exist, log an error message and return null.
    console.error('No such document!');
    return null; // Handle missing document case.
  }
};
