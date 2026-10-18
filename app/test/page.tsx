"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => alert("OK")}
        className="bg-red-500 text-white text-3xl p-10 rounded-xl"
      >
        TEST
      </button>
    </div>
  );
}