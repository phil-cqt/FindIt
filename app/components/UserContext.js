import { createContext, useState, useEffect } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router'; // Import the useRouter hook

const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const supabase = useSupabaseClient();
  const supabaseUser = useUser();
  const router = useRouter(); // Use the useRouter hook
  const [user, setUser] = useState();

  useEffect(() => {
    if (supabaseUser) setUser(supabaseUser);
  }, [supabaseUser]);

  const logout = async () => {
    router.push('/');
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <Context.Provider
      value={{
        user: user,
        logout: logout, // Use the logout function
      }}
    >
      {children}
    </Context.Provider>
  );
};
