import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
   
  pageSize=5
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#1f1ce6'
        progress={100}
        onLoaderFinished={() => this.setProgress(this.state.progress)}
      />
      <Routes><Route exact  path="/" element={<News setProgress={this.setProgress} key='general' pageSize={20} country="in" category="general" />}></Route>
      <Route exact  path="/business" element={<News setProgress={this.setProgress} key='business' pageSize={20} country="in" category="business" />}></Route>
      <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' pageSize={20} country="in" category="entertainment" />}></Route>
      <Route exact  path="/health" element={<News setProgress={this.setProgress} key='health' pageSize={20} country="in" category="health" />}></Route>
      <Route exact  path="/science" element={<News setProgress={this.setProgress} key='science' pageSize={20} country="in" category="science" />}></Route>
      <Route exact  path="/sports" element={<News setProgress={this.setProgress} key='sports' pageSize={20} country="in" category="sports" />}></Route>
      <Route exact  path="/technology" element={<News setProgress={this.setProgress} key='technology' pageSize={20} country="in" category="technology" />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
    }
}
