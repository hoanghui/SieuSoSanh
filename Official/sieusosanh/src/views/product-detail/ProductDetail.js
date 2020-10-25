import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"


export default class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let kw =this.props.match.params.kw;
        fetch(`https://192.168.56.1:3000/api/Products/${kw}`, {
        // headers: { 'Service-Worker': 'script' },
      })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData)
          if(responseData.length>0){
              this.setState({
                  data:responseData
              })
          }
        })
        .catch((error) => {
          console.log(
            error
          );
        });
    }
    
    renderProductBox=()=>{
        let {data}=this.state;
        return data.map((item,index)=>{
            return (
                <BoxProduct data={item}/>
            )
        })
    }
    render() {
        let kw =this.props.match.params.kw;
        console.log(this.state.data)
        let {data}=this.state
        return (
            <div className="search-page">
                <IndexHeader namePage={kw}/>
                <div className='container'>
                    <div className="keyword-info py-4 text-center">
                        Tu khoa "{kw}" co {data.length} ket qua
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <OptionProduct/>
                        </div>
                        <div className="col-lg-9" >
                            <div className="row product-list">
                                {this.renderProductBox()}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
