const Searchbar = (props) => {
  return (
    <div id='search-area'>
      <input
        id='header-search'
        type='text'
        placeholder='Enter Keywords...'
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export default Searchbar;
