import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import md from "markdown-it";
import Header from "../../../components/Header";
import Navigation from "../../../components/Layout";
import Footer from "../../../components/Footer";

export default function Contacts({ id }) {
  const [contact, setContact] = useState(null);
  const supabase = useSupabaseClient();
  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("contacts")
          .select("id, firstname, lastname, email, message")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Supabase error:", error.message);
          return;
        }
        setContact(data);
      } catch (error) {
        console.error("Unexpected error:", error.message);
      }
    })();
  }, [id, supabase]);

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <h1 className="wt-title text-center pt-10">View a contact message</h1>
        {contact && (
          <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="bg-slate-50">
              <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
                <dt>Name</dt>
                <dd>
                  {contact.lastname}, {contact.firstname}
                </dd>
                <dt>Email</dt>
                <dd>{contact.email}</dd>
              </dl>
            </div>
            <div className="px-3 py-10 bg-white">
              <div
                dangerouslySetInnerHTML={{
                  __html: md().render(contact.message),
                }}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}