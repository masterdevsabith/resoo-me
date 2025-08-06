export default function ResumeData() {
  return (
    <section className="resume-data-collection w-full p-20 bg-stone-300">
      <div className="max-w-7xl mx-auto bg-white shadow-lg  p-8 space-y-8 text-black">
        {/* Basic Details */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Basic Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Location</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">GitHub URL</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">LinkedIn URL</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Summary</h2>
          <textarea className="w-full border rounded px-3 py-2 h-24" />
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded"
              >
                <div>
                  <label className="block font-semibold mb-1">Job Title</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Company</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Start Date</label>
                  <input
                    type="month"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">End Date</label>
                  <input
                    type="month"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-1">
                    Responsibilities
                  </label>
                  <textarea className="w-full border rounded px-3 py-2 h-20" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Degree</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Institution</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Graduation Date
              </label>
              <input type="month" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Languages</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="JavaScript, TypeScript, Go..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Tools & Frameworks
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="React, Next.js, Tailwind..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Databases</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Supabase, MongoDB..."
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Other Skills</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="API Design, UI/UX..."
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            Save Details
          </button>
        </div>
      </div>
    </section>
  );
}
