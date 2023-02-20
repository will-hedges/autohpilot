export const CopyToClipboardButton = () => {
  return (
    <img
      className="my-notes__button"
      id="copy-to-clipboard__button"
      src="copy-icon.png"
      alt="a blue circle icon with two pieces of paper on it"
      onClick={() => {
        const noteAsString =
          document.querySelector(".complete-note").textContent;
        navigator.clipboard.writeText(noteAsString);
      }}
    />
  );
};
