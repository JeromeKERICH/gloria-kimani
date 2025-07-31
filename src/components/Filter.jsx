const Filters = ({ filters, setFilters }) => {
    return (
      <div className="flex flex-wrap gap-4">
        <select
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">All Types</option>
          <option value="hoodie">Hoodies</option>
          <option value="tshirt">T-Shirts</option>
          <option value="cap">Caps</option>
        </select>
      </div>
    );
  };
  
  export default Filters;
  