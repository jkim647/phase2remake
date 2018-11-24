import * as React from 'react';


const sideDrawer = (props:any) => (


    <div>
        <form>
            <div className="form-group">
              <label>English word</label>
              <input type="text" className="form-control" id="id-input" placeholder="Enter id" />
              <input type="text" className="form-control" id="english-input" placeholder="Enter english word" />
              <small className="form-text text-muted">*required*</small>
            </div>
            <div className="form-group">
              <label>Spanish word</label>
              <input type="text" className="form-control" id="spanish-input" placeholder="Enter spanish word" />
              <small className="form-text text-muted">*required*</small>
            </div>
            <div className="form-group">
              <label>Any sentence</label>
              <input type="text" className="form-control" id="note-input" placeholder="Enter any sentence" />
            </div>
            <button type="button" className="btn btn-warning" onClick ={props.clickUpload}>Submit</button>
            <button type="button" className="btn btn-warning" onClick ={props.click}>Cancel</button>
            

          </form>
    </div>


)

export default sideDrawer;