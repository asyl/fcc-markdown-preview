import PropTypes from "prop-types";

const Toolbar = ({ text, icon, onClick }) => {
  return (
    <div className="toolbar">
      <i className="fa fa-free-code-camp" title="no-stack-dub-sack" />
      {text}
      <i className={icon} onClick={onClick} />
    </div>
  );
};

Toolbar.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Toolbar;
