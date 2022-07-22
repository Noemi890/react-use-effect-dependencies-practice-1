function SelectTypeForm(props) {
  // Write code here...
  const {setDataType} = props
  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={(e) => setDataType(e.target.value)}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
