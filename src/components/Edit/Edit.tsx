import * as React from 'react';
interface IMyProps{
    
    
    clickEdit: any
    click:any
    editInfo:any[]
    
}


class edit extends React.Component<IMyProps>{

    constructor(props:any){
        super(props);
        
        
       
    }

    private editEnglish(id:any){
        
        const idUpdate= document.getElementById("edit-id") as HTMLInputElement
        const englishUpdate= document.getElementById("edit-english") as HTMLInputElement
        const spanishUpdate = document.getElementById("edit-english") as HTMLInputElement
        const noteUpdate = document.getElementById("edit-english") as HTMLInputElement
    
        if (englishUpdate === null || spanishUpdate === null) {
          return;
        }
        const updateID = idUpdate.value
        const updateEnglish = englishUpdate.value
      const updateSpanish = spanishUpdate.value
      const updateNote = noteUpdate.value
      
      

      const api_call = `https://nzmsaphase22018englishspanish.azurewebsites.net/api/englishspanish/${updateID   }`
      
      fetch(api_call, {
        body: JSON.stringify({
                "id" : updateID,
                  "english": updateEnglish,
                  "spanish": updateSpanish,
                  "note": updateNote
                  
              }),
              headers: {'cache-control': 'no-cache','Content-Type': 'application/json'},
              method: 'PUT'
            })
            
            .then((response : any) => {
          if (!response.ok) {
            // Error State
            alert(response.statusText + "!! " + api_call)
          } else {
            location.reload()
          }
          })
        }


    public render(){
        return(


    <div>
        <form>
            <div className="form-group">
            
            
              <label>English word</label>
              <input type="text" className="form-control" id="edit-id" placeholder="Enter id" />
              <input type="text" className="form-control" id="edit-english" placeholder="Enter english word" />
              <small className="form-text text-muted">*required*</small>
            </div>
            <div className="form-group">
              <label>Spanish word</label>
              <input type="text" className="form-control" id="edit-spanish" placeholder="Enter spanish word" />
              <small className="form-text text-muted">*required*</small>
            </div>
            <div className="form-group">
              <label>Any sentence</label>
              <input type="text" className="form-control" id="edit-note" placeholder="Enter any sentence" />
            </div>
            <button type="button" className="btn btn-warning" onClick ={this.editEnglish}>Edit</button>
            <button type="button" className="btn btn-warning" onClick ={this.props.click}>Cancel</button>
            
            
          </form>
    </div>
        )

    }
}

export default edit;