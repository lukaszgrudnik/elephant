import React, { useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import type { TooltipActions } from '../text-tooltip/tooltip-actions';

export default function RichTextEditor({
  actions,
}: {
  actions: TooltipActions;
}) {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  // Handle text formatting (bold, italic, etc.)
  const handleKeyCommand = (command: any) => {
    const newState = RichUtils.handleKeyCommand(
      editorState,
      command,
    );
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style: any) => {
    setEditorState(
      RichUtils.toggleInlineStyle(
        editorState,
        style,
      ),
    );
  };

  return (
    <div
      className={
        'w-full rounded-md border border-gray-200 pt-2 pb-2 pl-3.5 text-base text-gray-900 focus:outline focus:outline-3 focus:-outline-offset-1 focus:outline-blue-800'
      }
    >
      <div
        style={{
          minHeight: '100px',
          cursor: 'text',
        }}
      >
        <Editor
          onBlur={() => {
            actions.bold = () => {
              toggleInlineStyle('BOLD');
            };

            actions.underline = () => {
              toggleInlineStyle('UNDERLINE');
            };

            actions.italic = () => {
              toggleInlineStyle('ITALIC');
            };
          }}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}
