import React from 'react';
import './NoteList.css';

function NoteList({
  notes,
  selectedNoteId,
  onSelectNote,
  onAddNote,
  onDeleteNote,
  onUpdateNoteTitle,
}) {
  const sortedNotes = [...notes].sort((a, b) => b.timestamp - a.timestamp);

  const handleTitleChange = (noteId, e) => {
    onUpdateNoteTitle(noteId, e.target.value);
  };

  const handleDeleteClick = (e, noteId) => {
    e.stopPropagation(); // Prevent selecting the note when deleting
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDeleteNote(noteId);
    }
  };

  return (
    <div className="note-list-pane">
      <div className="note-list-header">
        <h2>Notes</h2>
        <button onClick={onAddNote} className="add-note-btn">+ New Note</button>
      </div>
      <ul className="note-list">
        {sortedNotes.length === 0 ? (
          <li className="no-notes-message">No notes yet. Click "New Note" to create one!</li>
        ) : (
          sortedNotes.map(note => (
            <li
              key={note.id}
              className={`note-list-item ${note.id === selectedNoteId ? 'selected' : ''}`}
              onClick={() => onSelectNote(note.id)}
            >
              <input
                type="text"
                value={note.title}
                onChange={(e) => handleTitleChange(note.id, e)}
                onClick={(e) => e.stopPropagation()} // Prevent selecting note when editing title
                className="note-title-input"
              />
              <button
                onClick={(e) => handleDeleteClick(e, note.id)}
                className="delete-note-btn"
                title="Delete Note"
              >
                &times;
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default NoteList;
