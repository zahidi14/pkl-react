import React, {Component} from 'react';
import { connect } from "react-redux";
import setProgresss from '../../actions/setProgress';
import setCar from '../../actions/setCar';
import PropTypes from "prop-types";
import avanza from '../../assets/aset/avanza.png';
import xenia from '../../assets/aset/xenia.png';
import innova from '../../assets/aset/innova.png';
import innovaR from '../../assets/aset/innova-reborn.png';
import elfShort from '../../assets/aset/elf-short.jpg';
import elfLong from '../../assets/aset/elf-long.jpg';
import hiAce from '../../assets/aset/ho-ace.jpg';
import '../../assets/styles/detail.scss';

class Car extends Component {
    getImage = carName => {
        if(carName === 'Avanza') {
            return avanza;
        }else if(carName === 'Xenia') {
            return xenia;
        }else if(carName === 'Grand New Innova'){
            return innova;
        }else if(carName === 'Grand New Innova Reborn') {
            return innovaR;
        }
        else if(carName === 'Elf Short') {
            return elfShort;
        }
        else if(carName === 'Elf Long') {
            return elfLong;
        }
        else if(carName === 'Hi Ace'){
            return hiAce;
        }
    }
    render(){
        const {
            carName,vehicleType,topSeller,noPassengers,description,transmission,airConditioning,fuel,price
        }= this.props
        return(
            <div className="cont">
                <div className="car-details">
                    <img src={this.getImage(carName)} alt="car"/>
                    <div className="details">
                        <div>
                            <p className="car-name">{carName}</p>
                            <p className="divider">|</p>
                            <p className="carvehicle-type">{vehicleType}</p>
                            <p className="divider">|</p>
                            {
                                topSeller
                                &&
                                <p className="top-seller">Top Seller</p>
                            }
                        </div>
                        <ul>
                            <li><i></i>{noPassengers}</li>
                            <li><i></i>{description}</li>
                            <li><i></i>{transmission}</li>
                            <li><i></i>{airConditioning && 'Air Conditioning'}</li>
                            <li><i></i>{fuel}</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="price">
                    <p><strong>{`Rp. ${price} K` }</strong></p>
                    
                    <button onClick={() => {
                        this.props.setProgress(4);
                        this.props.setCar(carName);
                    }}>Pilih</button>
                </div>
            </div>
        )
    }
}

Car.propTypes = {
    carName: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    topSeller: PropTypes.bool.isRequired,
    noPassengers: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    transmission:PropTypes.string.isRequired,
    airConditioning: PropTypes.bool.isRequired,
    fuel: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
const mapStateToProps = state => ({
    ...state
  });
  
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setCar: (payload) => dispatch(setCar(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Car);