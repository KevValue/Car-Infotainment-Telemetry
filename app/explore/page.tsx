export default function Page() {
  return (
    <div className="p-8 space-y-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Explore</h1>
        <p className="text-gray-400">
          Development roadmap, ideas, and thoughts about where this project is heading.
        </p>
      </div>

      {/* Section: Vision */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Project Vision</h2>
        <p className="text-gray-300 leading-relaxed">
          This project started as a personal challenge. I wanted to understand how real software development works in a full cycle, from mocks to full features. I was always curious about architecture, patterns
          and the discipline behind production patterns in real systems. I didn't wait for answers, but explore things in order to get data for decisions, so I choose a domain that would help me learn deeply: telemetry.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Building a telemetry infotainment system in a way became a
          vehicle for my own telemetry — a way to gather data about my strengths,
          weaknesses, and how I approach engineering problems. Through this project, I
          learned what scales and what doesn’t, how separation of concerns keeps systems
          maintainable, and how UI systems benefit from consistency and composability.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Along the way, I developed a style of building software that feels production‑grade:
          clean patterns, predictable architecture, and components that can be reasoned
          about in isolation. I wanted to train myself to onboard quickly into real teams
          and real codebases, so I treated this project like a professional environment.

          I focused on creating resuable systems around one or two core features, because establishing
          extensibility at the start made all feature development down the line easier in terms of development velocity and comphrension - a common understanding between SDES.
          Naturally, I found a rhythm for each challenge. Make assumptions, test them quickly, and compose with separation of concerns in mind.
          That way, I or another developer, can swap out components to test possbily better proposed solutions later by another team. I was building small, validating separation of concerns quickly,
          and prioritize necessary features while leaving the door open for future growth.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Ultimately, this project represents my curiosity, my discipline, and my desire to
          grow into a strong engineer. It’s a snapshot of my learning process and a
          foundation I plan to keep building on.
        </p>
      </section>

      {/* Section: Roadmap */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Roadmap</h2>

        <div className="space-y-3">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Telemetry Dashboard</h3>
            <p className="text-gray-400 text-sm">
              Current focus. Building out controls, UI polish, and layout consistency.
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Navigation</h3>
            <p className="text-gray-400 text-sm">
              Map placeholder, route preview, and UI structure. No logic yet.
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Docs</h3>
            <p className="text-gray-400 text-sm">
              A place to document components, patterns, and architecture decisions.
            </p>
          </div>

          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Profile</h3>
            <p className="text-gray-400 text-sm">
              Basic user info layout. Future settings panel.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Notes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes & Thoughts</h2>
        <p className="text-gray-300 leading-relaxed">
          This section is for random ideas, sketches, or things I want to remember.
          Could be UI concepts, component patterns, or future integrations.
          Eventually, I want the app to consume a GO backend, rabbit MQ for decoupling transports and work,  and Redis for caching.
        </p>
      </section>
    </div>
  )
}
