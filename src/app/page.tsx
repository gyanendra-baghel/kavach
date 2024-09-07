import HomeHeader from "@/components/home/Header";
import securityIcon from "@/assets/security.png";
import monitoringIcon from "@/assets/home/monitoring.png";
import multiPlatformIcon from "@/assets/home/multi-platform.png";
import privacyIcon from "@/assets/home/privacy.png";
import drugIcon from "@/assets/home/drug.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <main className="text-center h-screen flex flex-col">
        <div className="flex-grow flex flex-col justify-center items-center pt-10">
          <Image src={securityIcon} width={300} alt="hero" />
          <h1 className="text-4xl font-bold">
            Detect & Prevent{" "}
            <span className="text-orange-500">Drug Trafficking</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Empowering authorities with AI-driven insights to combat drug
            trafficking on social media.
          </p>
          <Link
            href="/dashboard"
            className="bg-orange-500 text-white px-6 py-3 mt-10 rounded-full"
          >
            Launch It..
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mt-12 p-10">
          <div className="bg-gray-800 p-6 rounded flex flex-col items-center">
            <Image src={multiPlatformIcon} height={150} alt="multiplatform" />
            <h3 className="text-xl font-bold mt-4">Multiplatform Support</h3>
            <p className="text-gray-400 mt-2">
              Built with cross-platform frameworks, our software adapts to any
              device, supporting desktop, mobile, and web environments
              effortlessly.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded flex flex-col items-center">
            <Image src={privacyIcon} height={150} alt="privary" />
            <h3 className="text-xl font-bold mt-4">Privacy & Security</h3>
            <p className="text-gray-400 mt-2">
              We prioritize privacy and security with robust encryption,
              safeguarding sensitive data from unauthorized access and breaches.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded flex flex-col items-center">
            <Image src={monitoringIcon} height={150} alt="monitoring" />
            <h3 className="text-xl font-bold">24/7 Monitoring</h3>
            <p className="text-gray-400 mt-2">
              With round-the-clock surveillance, we guarantee proactive
              maintenance and immediate alerts, minimizing downtime and
              enhancing system reliability.
            </p>
          </div>
        </div>
      </main>
      <section className="py-12">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src={drugIcon}
              height={300}
              className="max-w-full"
              alt="No Drugs"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="">
              Report suspicious drug trafficking activities on social media to
              help authorities take swift action and protect communities from
              illegal drug trade.
            </p>
            <p className="mt-2 mb-5">
              Our platform implements strict security protocols and compliance
              measures, ensuring user data remains protected at all times.
            </p>
            <Link
              href="/report"
              className="bg-orange-500 text-white py-2 px-4 rounded-full"
            >
              Report Now
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-12">
        <div className="flex justify-around text-center">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">3k+</h3>
            <p className="text-gray-400">Cyber Security Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">151+</h3>
            <p className="text-gray-400">Dealers Globally</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-500">300+</h3>
            <p className="text-gray-400">Cyber Security Experts</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-500">95%</h3>
            <p className="text-gray-400">Success</p>
          </div>
        </div>
      </section>

      <footer className="flex mt-10 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold">Prekshana</h3>
              <p>Security Management</p>
              <p>Security Essentials</p>
              <p>Security Certifications</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Subscribe</h3>
              <p>Subscribe to our newsletter</p>
              <button className="bg-orange-500 text-white py-2 px-4 rounded">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p>&copy; 2024 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
