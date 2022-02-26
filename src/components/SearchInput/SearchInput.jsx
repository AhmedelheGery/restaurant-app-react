import "./SearchInput.css"

const SearchInput = ({onSearch}) => {
  return (
    <div className="search-input">
      <svg className="svg-icon search-icon form-control-feedback" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
      <input type="text" className="form-control" placeholder="Search" onChange={onSearch} />
    </div>
  )
}

export default SearchInput