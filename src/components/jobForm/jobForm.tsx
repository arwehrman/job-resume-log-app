export default function JobForm() {
  //TODO: create handler function for form submit
  //TODO: create inputs for all job props
  return (
    <form>
      <h2>Add a job</h2>
      <div>
        <label>
          Company Name:
          <input type="text"></input>
        </label>
        <label>
          Job Title:
          <input type="text"></input>
        </label>
      </div>

      <button type="submit">Add Job</button>
    </form>
  );
}
