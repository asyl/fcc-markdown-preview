import PropTypes from "prop-types";

const Editor = ({ markdown, onMarkdownChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => onMarkdownChange(e.target.value)}
    />
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  onMarkdownChange: PropTypes.func,
};

export default Editor;
