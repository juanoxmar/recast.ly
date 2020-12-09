var Search = (props) => {

  const clickHandler = () => {
    props.searchFunc($('input').val());
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={_.debounce(() => props.searchFunc($('input').val()), 500)} />
      <button className="btn hidden-sm-down" onClick={clickHandler}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

Search.propTypes = {
  searchFunc: PropTypes.func
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
