import React, { useRef, useEffect } from 'react';
import './EditorPane.css';

function EditorPane({ note, onContentChange }) {
  const textareaRef = useRef(null);

  // Focus on the textarea when a new note is selected or created
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [note.id]);

  const handleChange = (e) => {
    onContentChange(note.id, e.target.value);
  };

  return (
    <div className="editor-pane">
      <textarea
        ref={textareaRef}
        className="markdown-editor"
        value={note.content}
        onChange={handleChange}
        placeholder="Start writing your markdown here..."
      />
    </div>
  );
}

export default EditorPane;
