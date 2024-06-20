import { User, UserInfo } from "firebase/auth";

// Define the type for the user object that is being stored in the state
export interface CurrentUser extends User {
  providerData: UserInfo[];
}

// Define the context value type
export interface AuthContextType {
  userLoggedIn: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  currentUser: CurrentUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUser | null>>;
}

// Define the props for the AuthProvider component
export interface AuthProviderProps {
  children: React.ReactNode;
}
