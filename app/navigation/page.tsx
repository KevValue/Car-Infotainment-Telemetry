export default function Page() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700"
          placeholder="Search destination…"
        />
      </div>

      <div className="flex-1 bg-gray-800 flex items-center justify-center">
        <div className="text-gray-500 h-50 flex items-center justify-center">[ Map Placeholder ]</div>
      </div>

      <div className="p-4 bg-gray-900 border-t border-gray-800 space-y-3">
        <div className="text-lg font-semibold">Route Preview</div>
        <div className="text-gray-400 text-sm">ETA: 12 min • 4.2 miles</div>

        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-lg bg-blue-600">Start</button>
          <button className="flex-1 py-2 rounded-lg bg-gray-700">Options</button>
        </div>
      </div>
    </div>
  )
}
