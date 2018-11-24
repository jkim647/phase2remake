import * as React from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Report from './components/Wines/wines';
import Edit from './components/Edit/Edit';





// const API_KEY = 'ba3bff8c30d65ceb5d773540dc52784c';

interface IState {
	
  report: any[],
  sideDrawerOpen: boolean,
  backScreen: false,
  editOpen: boolean,
  open: boolean,
  refCamera: any,
  authenticated: boolean,
  
}

class App extends React.Component<{}, IState> {
 constructor(props:any){
   super(props);
   this.state ={
     report: [],
     sideDrawerOpen:false,
     backScreen: false,
     editOpen: false,
     open: false,
     refCamera: React.createRef(),
     authenticated: false,
     
   }

   this.getReport("")
    this.getReport = this.getReport.bind(this)
    this.deleteEnglish = this.deleteEnglish.bind(this)
    //this.editEnglish = this.editEnglish.bind(this)
          
  
  
    } 

  private editEnglish(id:any){
    
    const englishUpdate= document.getElementById("edit-english") as HTMLInputElement
    const spanishUpdate = document.getElementById("edit-spanish") as HTMLInputElement
    const noteUpdate = document.getElementById("edit-note") as HTMLInputElement

    if (englishUpdate === null || spanishUpdate === null) {
      return;
    }
    
  const api_call = 'https://nzmsaphase22018englishspanish.azurewebsites.net/api/englishspanish/' +id
  const updateEnglish = englishUpdate.value
  const updateSpanish = spanishUpdate.value
  const updateNote = noteUpdate.value
  
  fetch(api_call, {
    body: JSON.stringify({
              "english": updateEnglish,
              "spanish": updateSpanish,
              "note": updateNote,
              
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

  

private uploadEnglish(){
  const idInput= document.getElementById("id-input") as HTMLInputElement
  const englishInput= document.getElementById("english-input") as HTMLInputElement
  const spanishInput = document.getElementById("spanish-input") as HTMLInputElement
  const noteInput = document.getElementById("note-input") as HTMLInputElement
  
  if ( englishInput=== null || spanishInput === null) {
    return;
}
const id = idInput.value
const english = englishInput.value
const spanish = spanishInput.value
const note = noteInput.value

const api_call = 'https://nzmsaphase22018englishspanish.azurewebsites.net/api/englishspanish' 
fetch(api_call, {
  body: JSON.stringify({
    id,
    english,
    spanish,
    note,
  }),
  headers: {'Content-Type': 'application/json'},
  method: 'POST'
})
.then((response : any) => {
  if (!response.ok) {
    // Error State
    alert(response.statusText)
  } else {
    location.reload()
  }
})


}

private deleteEnglish(id: any) {
  const api_call = "https://nzmsaphase22018englishspanish.azurewebsites.net/api/englishspanish/" + id

fetch(api_call, {method: 'DELETE'})
  .then((response : any) => {
    if (!response.ok) {
      // Error Response
      alert(response.statusText + "!! " + api_call)
    }
    else {
          location.reload()
    }
  })
}





 private getReport(props:any) {
  
  let api_call = 'https://nzmsaphase22018englishspanish.azurewebsites.net/api/englishspanish' 
  
   fetch(api_call, {
     method: 'GET'
   })
   
   .then(res => res.json())
   
   .then(json =>{
     console.log(json)
    
     this.setState({
      report: json

     }
   )
     
  } );
  }



 drawerToggleClickHandler = (prevState:any) => {
    this.setState({sideDrawerOpen: !prevState.sideDrawerOpen}
    );
}

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});

};



editdropClickHandler = (prevStat:any) => {
  this.setState({editOpen: !prevStat.editOpen});

};

editCancelClickHandler = () => {
  this.setState({editOpen: false});

};

    public render() {
    let sideDrawer;
    let backdrop;
    let edit;
    let backdrop_2

    
    
    if(this.state.sideDrawerOpen){ 
      
      sideDrawer = <SideDrawer click= {this.backdropClickHandler} clickUpload= {this.uploadEnglish}/>
      backdrop =  <Backdrop click= {this.backdropClickHandler} />
    }

    if(this.state.editOpen){
      edit = <Edit click ={this.editCancelClickHandler} clickEdit = {this.editEnglish} editInfo={this.state.report}/>
      backdrop_2 =  <Backdrop click= {this.backdropClickHandler} />
      sideDrawer = false;
      backdrop = false;
    }
  

    return (
      
      <div>
          <Toolbar drawerToggleClickHandler = {this.drawerToggleClickHandler}/>
          
          
          
          <main style={{marginTop: '120px'}}>
         
          {sideDrawer}
          {backdrop}
          {edit}
          {backdrop_2}

        
      
          <Report reports={this.state.report} delete={this.deleteEnglish} edit={this.editdropClickHandler}/>
          
          
          </main>
          
    </div>
     
    );
  }
}

export default App;