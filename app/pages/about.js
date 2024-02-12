import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className="flex justify-center min-h-screen dark:text-gray-400">
        <div className="text-center pt-12">
          <h1 className="m-4">About us:</h1>
          <p className="m-4">
            Welcome to our website! We are two enthusiastic students from École
            Centrale d&apos;Électronique (ECE), passionate about web
            technologies and development. This website is the result of our
            dedication to creating a platform that showcases our skills and
            provides valuable content to our audience.
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col items-start">
              <p>👨‍💻 PRIVAT Robin:</p>
              <Image
                src="/CV_PRIVAT_Robin.png"
                alt="CV Robin PRIVAT"
                width={210*2.2}
                height={297*2.2}
              />
            </div>
            <div className="flex flex-col items-start ml-8">
              <p>👨‍💻 PAULY Raphaël:</p>
              <Image
                src="/CV_PAULY_Raphaël.png"
                alt="CV Raphaël PAULY"
                width={210*2.2}
                height={297*2.2}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
