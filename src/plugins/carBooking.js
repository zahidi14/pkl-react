import React,{Component} from 'react';
import { connect } from "react-redux";
import {data} from '../constants/data';
import avanza from '../assets/aset/avanza.png';
import xenia from '../assets/aset/xenia.png';
import innova from '../assets/aset/innova.png';
import innovaR from '../assets/aset/innova-reborn.png';
import elfShort from '../assets/aset/elf-short.jpg';
import elfLong from '../assets/aset/elf-long.jpg';
import hiAce from '../assets/aset/ho-ace.jpg';

var QRCode = require('qrcode.react');

class Book extends Component {
    state = {
        bookingConfirmed: false
    }
    filterByCarName = (data,carName) => {
        const filteredData = data.filter(car => car.carName === carName);
        return filteredData
    }
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
        return(
            <div>
            {
                this.filterByCarName(data,this.props.Car).map(car => 
                <div className="booking">
                    <img src={this.getImage(car.carName)} alt="car"/>
                    <h1>{car.carName}</h1>
                    <h2>{`Rp. ${car.price} K`}</h2>
                </div>
                )
            }
            {
                this.state.bookingConfirmed
                ?
                <div>
                    Nama : {this.props.nama} <br/>
                    No Telp : {this.props.noTel}<br/>
                    tanggal sewa : {this.props.pickupDate} <br/>
                    sampai tanggal : {this.props.dropoffDate} <br/>
                    <QRCode value={this.props.nama} />
                </div>
                
                :
                <button id="confirm-booking" onClick={() => this.setState({ bookingConfirmed: true })}>Konfirmasi Pemesanan</button>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Book)