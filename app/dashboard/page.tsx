import Link from "next/link";

export default function DashboardPage() {
  return (
    <section className="resume_landing bg-stone-300 w-full flex items-center justify-center p-20">
      <div
        id="resume"
        className="w-[794px] h-[1123px] bg-white p-8 shadow-md text-black"
      >
        <div className="name_and_basic_details mb-10">
          <h1 className="font-black text-3xl">MUHAMMED SABITH A S</h1>
          <p className="text-stone-900">
            Kerala India, masterdevsabith@gmail.com | +91 7736572490 |{" "}
            <Link href={"#"} className="underline">
              Github
            </Link>{" "}
            |{" "}
            <Link href={"#"} className="underline">
              LinkedIn
            </Link>
          </p>
        </div>
        <div className="summary">
          <h2 className="border-b border-stone-800 font-bold">SUMMARY</h2>
          <p className="text-md text-stone-900 mt-2">
            Young and ambitious full-stack developer with a passion for
            real-world problem solving, open-source development, and building
            impactful systems across education, health, and emergency sectors.
            Seeking a role to contribute to meaningful products, expand
            technical skills, and collaborate with mission-driven teams
          </p>
        </div>
        <div className="work_experience mt-8 text-stone-900 text-sm leading-relaxed">
          <h2 className="border-b border-stone-800 font-bold mb-2">
            WORK EXPERIENCE
          </h2>

          {/* Job 1 */}
          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <h3>Founder & Full-Stack Developer</h3>
              <span className="italic">Jan 2024</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Founded and led a startup providing high-performance software
                for schools and hospitals
              </li>
              <li>
                Developed a full School ERP covering attendance, messaging,
                fees, exam results, library, and dashboards
              </li>
              <li>
                Built Parana: an emergency medical support app with a Golang
                event-driven backend and Flutter frontend
              </li>
              <li>
                Managed a small team and led product development, UI/UX, and
                client demos
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <h3>Freelance Web Developer</h3>
              <span className="italic">Jul 2024 - Jan 2024</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Delivered modern, responsive school websites under 3 days via
                WebForge
              </li>
              <li>
                Built fully custom admin panels, carousels, animations, and
                contact forms
              </li>
              <li>
                Integrated Supabase and Firebase for real-time data and auth
                workflows
              </li>
              <li>
                Designed and deployed educational dashboards and analytics
                systems
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <h3>Student Developer & Innovator</h3>
              <span className="italic">May 2023 - July 2024</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>
                Created RFID-based bus tracking system using ESP32C3, integrated
                with school ERP
              </li>
              <li>
                Built hospital–ambulance communication backend in Go using NATS
                for event streaming
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="border-b border-stone-800 font-bold mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between font-semibold">
              <h3>Bachelor of Science in Computer Science</h3>
              <span className="italic">Aug 2025</span>
            </div>
            <p className="italic">
              Vidya Academy of Science & Technology Technical Campus
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="border-b border-stone-800 font-bold mb-2">SKILLS</h2>
            <div className="grid grid-cols-1 gap-2">
              <p>
                <span className="font-semibold">Languages :</span> JavaScript,
                TypeScript, Dart, Python, Go, HTML, CSS
              </p>
              <p>
                <span className="font-semibold">Tools/Frameworks :</span>{" "}
                Flutter, React, Next.js, Tailwind CSS, Express.js, Firebase
              </p>
              <p>
                <span className="font-semibold">Databases :</span> Supabase,
                MongoDB, PostgreSQL
              </p>
              <p>
                <span className="font-semibold">Other Skills :</span>{" "}
                Event-Driven Architecture, API Design, UI/UX Design, Leadership,
                Client Communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
