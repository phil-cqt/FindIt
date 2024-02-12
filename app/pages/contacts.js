import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Layout from "../components/Layout";

export default function Contact() {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(null);
  const supabaseClient = useSupabaseClient();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabaseClient
      .from("contacts")
      .insert([contact]);

    if (error) {
      console.error("Supabase error:", error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Data inserted successfully!");
    }

    setContact({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <Layout>
      <main className="flex justify-center">
        <form
          className="grid gap-4 bg-slate-300 p-8 rounded shadow transition-shadow hover:shadow-2xl text-center max-w-md"
          onSubmit={onSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <div>
            <label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="rounded p-2 w-full"
                onChange={(e) =>
                  setContact({ ...contact, firstname: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="rounded p-2 w-full"
                onChange={(e) =>
                  setContact({ ...contact, lastname: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="rounded p-2 w-full"
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                name="message"
                placeholder="Message"
                className="rounded p-2 w-full h-24"
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <button className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500">
              Send
            </button>
          </div>
        </form>
        {message && (
          <div
            aria-label="Overflow below the drawer dialog"
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => setMessage(null)}
            role="dialog"
          >
            <div
              aria-label="Alert pane"
              className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
            >
              {message}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
