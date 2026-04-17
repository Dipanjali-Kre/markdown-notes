import React, { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // Or choose another theme
import './PreviewPane.css';

// Configure marked to use highlight.js for code blocks
marked.setOptions({
  langPrefix: 'hljs language-', // highlight.js css expects this
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
});

function PreviewPane({ content }) {
  const sanitizedHtml = useMemo(() => {
    if (!content) return '';
    const rawMarkup = marked.parse(content);
    return DOMPurify.sanitize(rawMarkup);
  }, [content]);

  return (
    <div
      className="preview-pane markdown-body"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}

export default PreviewPane;
