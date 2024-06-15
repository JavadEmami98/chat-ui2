"use client";
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiList: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState<string | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const onEmojiClick = (event: React.MouseEvent, emojiObject: { emoji: string }): void => {
    setChosenEmoji(emojiObject.emoji);
    setIsPickerOpen(false); 
  };

  const togglePicker = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={togglePicker} style={{ marginBottom: '10px' }}>
      <img src="/images/emoji.svg" alt="" />
      </button>
      {isPickerOpen && (
        <div style={{ position: 'absolute', bottom: '30px', right: '0', zIndex: 999 }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      {chosenEmoji && <div>Chosen Emoji: {chosenEmoji}</div>}
    </div>
  );
};

export default EmojiList;
