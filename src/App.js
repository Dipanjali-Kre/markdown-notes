import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoteList from './components/NoteList';
import EditorPane from './components/EditorPane';
import PreviewPane from './components/PreviewPane';
import './styles/App.css';

const LOCAL_STORAGE_KEY = 'markdown-notes-app-notes';

function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    // If no note is selected and there are notes, select the first one
    if (!selectedNoteId && notes.length > 0) {
      setSelectedNoteId(notes[0].id);
    }
    // If selected note was deleted, clear selection
    if (selectedNoteId && !notes.some(note => note.id === selectedNoteId)) {
      setSelectedNoteId(notes.length > 0 ? notes[0].id : null);
    }
  }, [notes, selectedNoteId]);

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  const addNote = useCallback(() => {
    const newNote = {
      id: uuidv4(),
      title: 'New Note',
      content: '# New Note\n\nStart writing your markdown here!',
      timestamp: Date.now(),
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setSelectedNoteId(newNote.id);
  }, []);

  const deleteNote = useCallback((idToDelete) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== idToDelete));
    if (selectedNoteId === idToDelete) {
      setSelectedNoteId(null); // Clear selection if the deleted note was selected
    }
  }, [selectedNoteId]);

  const updateNoteContent = useCallback((id, newContent) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, content: newContent, timestamp: Date.now() } : note
      )
    );
  }, []);

  const updateNoteTitle = useCallback((id, newTitle) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, title: newTitle, timestamp: Date.now() } : note
      )
    );
  }, []);

  return (
    <div className="app-container">
      <NoteList
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={setSelectedNoteId}
        onAddNote={addNote}
        onDeleteNote={deleteNote}
        onUpdateNoteTitle={updateNoteTitle}
      />
      <div className="editor-preview-container">
        {selectedNote ? (
          <>
            <EditorPane
              note={selectedNote}
              onContentChange={updateNoteContent}
              onTitleChange={updateNoteTitle}
            />
            <PreviewPane content={selectedNote.content} />
          </>
        ) : (
          <div className="no-note-selected">
            <h2>No note selected</h2>
            <p>Click "New Note" to create one, or select an existing note from the left panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
