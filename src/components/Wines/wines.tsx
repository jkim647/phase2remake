import * as React from 'react';

import './wines.css';




interface IMyProps{
    reports: any[],
    delete: any
    edit: any
    
}

class Report extends React.Component<IMyProps,{}>{
    public render(){
        
       const report = this.props.reports
    return(
      <div className="container">
        <div className="row">
    { report.map((recipe:any) => {
      return (
        
        <table>
  
  <thead>
  
    <tr>
      
      <th scope="col">Word number</th>
      <th scope="col">English</th>
      <th scope="col">Spanish</th>
      <th scope="col">Sentence</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Word number">{recipe.id}</td>
      <td data-label="English">{recipe.english}</td>
      <td data-label="Spanish">{recipe.spanish}</td>
      <td data-label="sentence">{recipe.note}</td>
      <td data-label="sentence"><button className="btn btn-warning" onClick ={this.props.edit}>
                
                Edit
               </button></td>

      <td data-label="sentence"><button className="btn btn-warning" onClick ={this.props.delete.bind(this, recipe.id)}>
                
                Delete
               </button></td>
     
    </tr>
    
  </tbody>
</table>
      );
    })}
    </div>
    </div>

    );
}


}




    
 

export default Report