import React, { Component } from 'react'
import IndexHeader from "../../components/Headers/IndexHeader"
import OptionSanPham from "./OptionSanPham";
import BoxSanPham from "./BoxSanPham";
export default class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            change:false
        }
    }
    componentDidMount(){
        let kw =this.props.match.params.kw;
        fetch(`https://192.168.56.1:3001/api/Products/${kw}`, {
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
                <BoxSanPham data={item}/>
            )
        })
    }
    render() {
        let kw =this.props.match.params.kw;
        console.log(this.state.data)
        let {data}=this.state// cach viet tat cho this.state.data
        return (
            <div className="search-page">
                <IndexHeader namePage={kw}/>
                <div className='container'>
                    <div className="keyword-info py-4">
                        Tu khoa "{kw}" co {data.length} ket qua
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <OptionSanPham/>
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
