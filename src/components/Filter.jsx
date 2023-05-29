
const FilterNames = ({ filterChange }) => {
  return (
    <div>
      <form action="">
        Filter Names: 
        <input
          type='text'
          onChange={filterChange}
        />
      </form>
    </div>
  )
}

export default FilterNames