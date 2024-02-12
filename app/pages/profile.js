import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Layout from "../components/Layout.js";
import UserContext from "../components/UserContext";
import { useContext } from "react";

export default function Page() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { user, logout } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("id, language, image_id, name")
          .eq("id", user.id);

        if (profileError) {
          console.error("Supabase profile error:", profileError);
          return;
        }

        setProfile(profileData[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [supabase, user]);

  const onClickUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .upsert([
          {
            id: user.id,
            language: profile.language,
            image_id: 1,
            name: profile.name,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error.message);
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
    setProfile({
      id: "",
      language: "",
      image_id: "",
      name: "",
    });

    await fetchData();
    router.push("/");
  };

  return (
    <Layout title="Profile" description="User profile page">
      <div className="text-center">
        {user && (
          <div className="flex m-4 justify-center flex-col items-center">
            <h1 className="dark:text-white">Profile</h1>
            <input
              type="text"
              id="profileName"
              className="border rounded my-2 p-2"
              placeholder="Enter your name"
              value={profile?.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <input
              type="email"
              id="profileEmail"
              className="border rounded mb-2 p-2"
              value={user.email}
              readOnly
            />
            <input
              type="text"
              id="profileLanguage"
              className="border rounded mb-2 p-2"
              placeholder="Enter your language"
              value={profile?.language || ""}
              onChange={(e) =>
                setProfile({ ...profile, language: e.target.value })
              }
            />
            <button
              className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              onClick={onClickUpdateProfile}
            >
              Update Profile
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
