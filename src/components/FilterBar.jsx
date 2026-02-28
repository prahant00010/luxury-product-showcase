export function FilterBar({ category, sort, onChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <label className="field-label" htmlFor="category">
          Mood
        </label>
        <select
          id="category"
          className="field"
          value={category}
          onChange={(e) => onChange({ category: e.target.value, sort })}
        >
          <option value="all">All moods</option>
          <option value="day">Daylight</option>
          <option value="evening">Evening</option>
          <option value="signature">Signature</option>
        </select>
      </div>
      <div className="filter-bar__group">
        <label className="field-label" htmlFor="sort">
          Price
        </label>
        <select
          id="sort"
          className="field"
          value={sort}
          onChange={(e) => onChange({ category, sort: e.target.value })}
        >
          <option value="recommended">Curator’s choice</option>
          <option value="low-to-high">Lowest first</option>
          <option value="high-to-low">Highest first</option>
        </select>
      </div>
    </div>
  );
}

