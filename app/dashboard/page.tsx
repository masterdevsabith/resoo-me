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
          <h2 className="border-b border-stone-800">SUMMARY</h2>
        </div>
      </div>
    </section>
  );
}
