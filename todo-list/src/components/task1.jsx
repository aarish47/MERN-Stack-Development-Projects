import "../App.css";

function Task1() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col" id="tsk1">
          TASK 1
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">
            DELETE
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-warning">
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task1;
