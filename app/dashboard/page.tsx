"use client";

import Sidebar from "@/components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { addEntry, editEntry, deleteEntry } from "@/lib/features/journalSlice";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const journals = useSelector((state: RootState) => state.journal.entries);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddOrEdit = () => {
    if (editingId) {
      dispatch(editEntry({ id: editingId, title, content }));
      setEditingId(null);
    } else {
      dispatch(
        addEntry({
          id: uuidv4(),
          title,
          content,
          createdAt: new Date().toISOString(),
        })
      );
    }
    setTitle("");
    setContent("");
  };

  const handleEdit = (entry: any) => {
    setEditingId(entry.id);
    setTitle(entry.title);
    setContent(entry.content);
  };

  return (
    <div className="min-h-screen flex bg-[#010a1f] text-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-60 px-4 py-8 md:py-12 space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300">
            Dashboard
          </h1>
          <Button
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setContent("");
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white w-full md:w-auto"
          >
            New Entry
          </Button>
        </header>

        {/* Entry Form */}
        <section
          id="new"
          className="bg-[#0b173a] border border-blue-900 rounded-2xl p-4 md:p-6 space-y-4"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Journal title..."
            className="w-full bg-transparent border border-blue-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts..."
            rows={6}
            className="w-full bg-transparent border border-blue-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
          />
          <Button
            onClick={handleAddOrEdit}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white"
          >
            {editingId ? "Save Changes" : "Add Entry"}
          </Button>
        </section>

        {/* Entries */}
        <section id="entries" className="space-y-6 pb-20 md:pb-0">
          {journals.length === 0 ? (
            <p className="text-center text-gray-400">
              No journal entries yet. Start writing your first one!
            </p>
          ) : (
            journals.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#0b173a] border border-blue-900 rounded-2xl p-4 md:p-6 transition hover:border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h2 className="text-lg md:text-xl font-semibold text-blue-200">
                    {entry.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="mt-3 text-gray-300 whitespace-pre-line">
                  {entry.content}
                </p>

                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={() => handleEdit(entry)}
                    className="flex-1 bg-blue-700 hover:bg-blue-600 text-white"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => dispatch(deleteEntry(entry.id))}
                    className="flex-1 bg-red-700 hover:bg-red-600 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
