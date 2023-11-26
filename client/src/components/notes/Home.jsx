import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../api";
import { Link } from "react-router-dom";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getNotes = async (token) => {
    const res = await axios.get(`${api}/api/notes`, {
      headers: { Authorization: token },
    });
    setNotes(res.data);
    // console.log(res.data);
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
        await axios.delete(`${api}/api/notes/${id}`, {
          headers: { Authorization: token },
        });
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <div className="note-wrapper" onClick={openModal}>
        {notes.map((note) => (
          <div className="card" key={note._id}>
            <h4 title={note.title}>{note.title}</h4>
            <div className="text-wrapper">
              <p>{note.content}</p>
            </div>
            <p className="date">
              {note.date} {note.time}
            </p>
            {/* <p className="date"></p> */}
            <div className="card-footer">
              {note.name}
              <Link to={`edit/${note._id}`}>Edit</Link>
              <div onClick={() => deleteNote(note._id)}>
                <p>Delete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} notes={notes} deleteNote={deleteNote} />
      )}
    </div>
  );
}

const Modal = ({ closeModal, notes, deleteNote }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {notes.map((note) => (
          <div  key={note._id}>
            <h4 title={note.title}>{note.title}</h4>
            <div className="text-section">
              <p>{note.content}</p>
            </div>
            <p className="date">
              {note.date} {note.time}
            </p>
            {/* <p className="date"></p> */}
            <div className="card-footer">
              {note.name}
              <Link to={`edit/${note._id}`}>Edit</Link>
              <div onClick={() => deleteNote(note._id)}>
                <p>Delete</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
