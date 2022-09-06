import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import axios from "axios";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get(
      "https://notesapp34.herokuapp.com/api/notes",
      {
        headers: { Authorization: token },
      }
    );
    setNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(
          `https://notesapp34.herokuapp.com/api/notes/${id}`,
          {
            headers: { Authorization: token },
          }
        );
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div className="note-wrapper">
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <h4 title={note.title}>{note.title}</h4>
          <div className="text-wrapper">
            <p>{note.content}</p>
          </div>
          <p className="date">{format(note.date)}</p>
          <div className="card-footer" onClick={() => deleteNote(note._id)}>
            {note.name}
            <p>Delete</p>
          </div>
        </div>
      ))}
    </div>
  );
}
