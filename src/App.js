import './App.css';
import { Component } from 'react';
import ProductsList from './ProductsList';
// import Sidebar from './Sidebar';


class  App extends Component {
  constructor(props){
    super(props)
    this.state = {
      file : null,
      showProducts : false,
      formData : null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image',this.state.file);
    this.setState({
      formData : formData,
      showProducts : true
    })
  }

  setSelectedFile(file){
    this.setState({
      file : file,
    })
  }

  displayProducts(){
    return <ProductsList formData = {this.state.formData}/>
  }

  render(){

  return (
    <div>
      {/* <Sidebar /> */}
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit = {this.handleSubmit}
      >
        <input type="file" name="image" multiple onChange={(e) => this.setSelectedFile(e.target.files[0])}/>

        <input type="submit" name="submit" id="btnSubmit" value="Upload" />
      </form>
      {this.state.showProducts && this.displayProducts()}
    </div>

  )};
}

export default App;
