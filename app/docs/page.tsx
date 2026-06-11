export default function Page() {
  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="text-gray-400 text-lg">
          A central place for diagrams, flows, components, and system notes.
          Docs is mainly for developers.
        </p>
      </header>

      {/* Placeholder Section */}
      <section className="p-8 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
        <p className="text-gray-400 leading-relaxed">
          This page will eventually contain:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Architecture diagrams</li>
          <li>Component documentation</li>
          <li>API endpoints</li>
          <li>Flow charts and system behavior</li>
          <li>Design patterns and decisions</li>
          <li>Internal notes and references</li>
        </ul>

        <p className="text-gray-500 text-sm pt-2">
          full documentation system coming later.
        </p>
      </section>
    </div>
  )
}
