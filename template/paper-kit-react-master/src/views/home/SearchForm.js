import React, {Component} from 'react'

export class SearchFrom extends Component {
    render() {
        return (
        <div className="container">
            <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Tìm kiếm sản phẩm"
                // onChange={this.onChange}
            />
        {/* <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
        </button> */}
      </div>
        );  
    }
}

export default SearchFrom   