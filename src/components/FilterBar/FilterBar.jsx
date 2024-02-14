export const FilterBar = () => {
    return (
      <div>
          <label htmlFor="price">
            Price
            <input type="number" id="price" />
            <input type="number" />
          </label>

        <label htmlFor="sort">Sorted</label>
          <select id="sort">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
      </div>)
}