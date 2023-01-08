



const FilterTool = (props) => {
    return (  <>
      <div className="filter">
            <select id="filter" style={{marginRight:"2px"}} onChange={props.handlefilter} >
            <option value="All">All</option>
            <option value="Done">Done</option>
            <option value="Not-Yet">Not-Yet</option>
          </select>
                    </div>
    </>);
}
 
export default FilterTool;