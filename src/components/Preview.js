import PropTypes from "prop-types";
import marked, { Renderer } from "marked";

const Preview = ({ markdown }) => {
  marked.setOptions({
    breaks: true,
  });

  const renderer = new Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>;`
  };

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    />
  );
};

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
