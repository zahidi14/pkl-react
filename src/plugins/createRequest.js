import React, {Component} from 'react';
import { connect } from "react-redux";
import setProgresss from '../actions/setProgress';
import setNo from '../actions/setNo';
import setIdentitas from '../actions/setIdentitas';
import '../assets/styles/createRequest.scss';

class CreateRequest extends Component{
    state = {
       nama: '',
       noTel: '',
       textAdded: false
    }

   /*  handleNamaOnKeyDown = event => {
        if(['Enter', 'Tab'].includes(event.key)) {
          event.preventDefault();
          const text = this.state.nama.trim();
    
          if(text) {
            this.setState({
             nama: text,
              textAdded: true
            });
          }
        }
    } */
    
    handleNamaChange = event => {
        this.setState({
         nama: event.target.value
        });
    }

   handleNoChange = event =>{
     const no = event.target.value;
     this.setState({
       noTel : no 
     });
   }


    render(){
        return(
            <main className="wrapper">
                {
                    this.state.textAdded
                    
                }
                  <input 
                    className="input"
                    placeholder="Nama"
                    value={this.state.nama}
                    onChange={this.handleNamaChange}
                    
                  />
                  <input 
                    className="input"
                    placeholder="No Telp"
                    value={this.state.noTel}
                    onChange={this.handleNoChange}
                    
                   
                  />
                {
                    
                    <button class="btn orange" type="button" onClick={ () => {
                        this.props.setProgress(2);
                        this.props.setIdentitas(this.state.nama);
                        this.props.setNo(this.state.noTel);
                    }}>
                            <span>Pilih Mobil</span>
                    </button>
                }
            </main>
        )
    }
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setIdentitas: (payload) => dispatch(setIdentitas(payload)),
    setNo:(payload) => dispatch(setNo(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(CreateRequest);