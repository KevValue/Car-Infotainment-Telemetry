export default function Page() {
  return (
    <div className="p-6 space-y-8 flex flex-col">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-700" />
        <div>
          <div className="text-xl font-semibold">Kev Value</div>
          <div className="text-gray-400 text-sm">kevvalue @ github</div>
        </div>
      </div>

      <div className="space-y-4">
        {["Account", "Preferences", "Notifications", "Privacy"].map((item) => (
          <div
            key={item}
            className="p-4 bg-gray-800 rounded-lg text-gray-300"
          >
            {item}
          </div>
        ))}
      </div>

      <button className="w-full py-2 rounded-lg bg-red-600">
        Log Out
      </button>
    </div>
  )
}
