"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, content: string, editId?: string) => void;
  editData?: { id: string; title: string; content: string } | null;
};

export default function JournalEntryDialog({
  open,
  onClose,
  onSave,
  editData,
}: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setContent(editData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editData]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#0B0B0F] border border-gray-800 text-gray-100 max-w-md w-full">
        <DialogHeader>
          <DialogTitle>{editData ? "Edit Entry" : "New Entry"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-3">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-[#121218] border-gray-700"
          />
          <Textarea
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-[#121218] border-gray-700 min-h-[150px]"
          />
          <Button
            className="w-full"
            onClick={() => {
              onSave(title, content, editData?.id);
              onClose();
            }}
          >
            {editData ? "Save Changes" : "Add Entry"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
