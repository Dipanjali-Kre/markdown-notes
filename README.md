# Markdown Notes App

This is a simple React.js application for creating, editing, and managing markdown notes with live preview and syntax highlighting.

## Features

*   **Split-pane Editor**: Write markdown on the left, see the live preview on the right.
*   **Create, Save, Delete Notes**: Easily manage your notes.
*   **Local Storage Persistence**: All notes are automatically saved to your browser's local storage.
*   **Syntax Highlighting**: Code blocks in your markdown are automatically highlighted using `highlight.js`.
*   **Sanitized HTML Output**: Markdown preview is sanitized using `DOMPurify` to prevent XSS attacks.
*   **Responsive Design**: Basic responsive layout for different screen sizes.

## Technologies Used

*   **React.js**: Frontend library.
*   **`marked`**: For parsing Markdown into HTML.
*   **`dompurify`**: For sanitizing HTML output.
*   **`highlight.js`**: For syntax highlighting of code blocks.
*   **`uuid`**: For generating unique IDs for notes.
*   **Local Storage**: For data persistence.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/markdown-notes.git
    cd markdown-notes
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the application in your browser at `http://localhost:3000`.

## Usage

1.  **Create a New Note**: Click the "+ New Note" button in the left sidebar.
2.  **Edit Note Title**: Click on the note title in the sidebar to edit it directly.
3.  **Write Markdown**: Type your markdown content in the left editor pane.
4.  **Live Preview**: See the rendered markdown in real-time in the right preview pane.
5.  **Delete Note**: Click the "x" button next to a note's title in the sidebar to delete it.
6.  **Persistence**: All changes are automatically saved to your browser's local storage and will be available the next time you open the app.

## Project Structure

```
markdown-notes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EditorPane.css
│   │   ├── EditorPane.js
│   │   ├── NoteList.css
│   │   ├── NoteList.js
│   │   ├── PreviewPane.css
│   │   └── PreviewPane.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Customization

*   **Styling**: Modify `.css` files in `src/styles/` and `src/components/` to change the application's appearance.
*   **Highlight.js Theme**: Change the `highlight.js` theme by importing a different CSS file in `src/components/PreviewPane.js` (e.g., `import 'highlight.js/styles/atom-one-dark.css';`).

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the MIT License.
