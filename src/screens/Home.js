import React from 'react'
import styles from './styles.module.css'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
const data = [
  ['A','B','C','D','E','F','G','H','J','K','L'],
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
]


function Home () {

  let count = 0;
  let countArr = [];
  let typeArr = [];
  let standartArr = [];
  let vipArr = [];
  let deluxeArr = [];
  let totalprice = 0;
  
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let day = d.getDate();

  const date = day+'/'+month+'/'+year
  const addArr = () =>{
    for(var i = 0; i < typeArr.length; i++){
      if(typeArr[i]==='standart'){
        standartArr.push(typeArr[i])
      }else if(typeArr[i]==='vip'){
        vipArr.push(typeArr[i]);
      }else if(typeArr[i]==='deluxe'){
        deluxeArr.push(typeArr[i])
      }
    }
  }
  
  const handlePay=(event)=>{
    const x = countArr.length;
    confirmAlert({
      title:'Ban muon dat nhung cho nay: ',
      message:("Tong so ghe da dat la: "+ x 
      + " ,Stan: " + standartArr.length
      + " ,Vip: "+ vipArr.length
      + " ,Deluxe: "+ deluxeArr.length
      + " ,Total: "+totalprice),
      buttons:[
        {
          label:'Yes',
          onClick:()=>window.location.reload(),
        },
      ]
    })
  }
  
  const handleSubmit=(event)=>{
    addArr()
    event.currentTarget.disabled = true;
    const x = countArr.length;
    const total = (standartArr.length * 60000) 
    + (vipArr.length * 90000) 
    + (deluxeArr.length * 110000)
    totalprice += total
    document.getElementById('price').innerText = totalprice
    
  }
  
  const removeValue = (event) =>{
    typeArr.splice(typeArr.indexOf(event.target.value),1)
  }
  const handleClick = (event) => {
    const value = event.target.value
      if (event.currentTarget.style.backgroundColor) {
        event.currentTarget.style.backgroundColor = null;
        countArr.pop()
        removeValue(event)
      } else {
        event.currentTarget.style.backgroundColor = 'white';
        countArr.push(count++)
        typeArr.push(value);
      }
      if(countArr.length>6){
        event.currentTarget.style.backgroundColor=null ;
        alert("Ban chi duoc chon toi da 6 ghe!!!")
        countArr.pop()
        typeArr.pop()
      }
    }
    const container = {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black'
    };
    const row = {
      display:'flex',
      flexDirection:'row',
      // justifyContent:'center',
      // alignItems:'center',
    };
    const seats = {
      display:'flex',
      flexDirection:'row',
      marginLeft: '20px',
      
    };
    const center = {
      display:'flex',
      justifyDirection:'row',
    };

    const label = {
      marginLeft:'10px',
      display:'flex',
      justifyContent:'flex-start',
      flexDirection:'column',
    }

    const rowSeats = {
      display:'flex',
      justifyContent:'flex-start',
      flexDirection:'column'
    }
    return(
      <TransformWrapper>
        <TransformComponent>
          <div className='container' style={container}>
              <div className={styles.screen}></div>
              <div style={center}>
                <div style={label}>
                  <label>{data[0][0]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][1]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][2]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][3]}</label>
                  <label style={{marginTop:'7px'}}>{data[0][4]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][5]}</label>
                  <label style={{marginTop:'7px'}}>{data[0][6]}</label>
                  <label style={{marginTop:'7px'}}>{data[0][7]}</label>
                  <label style={{marginTop:'8px'}}>{data[0][8]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][9]}</label>
                  <label style={{marginTop:'10px'}}>{data[0][10]}</label>
                </div>
                <div style={rowSeats}>
                  <div className='seatA' style={row}>
                    {/*<p>{data[0][0]}</p>*/}
                    <div className='seats' style={seats}>                
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][0]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][1]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][2]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][3]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][4]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][5]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][6]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][7]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][8]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][9]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][10]}</button>
                      <button  value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][11]}</button>
                    </div>
                  </div>
                  <div className='seatB' style={row}>
                    {/* <p>{data[0][1]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][0]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][1]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][2]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][3]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][4]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][5]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][6]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][7]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][8]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][9]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][10]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][11]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][12]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][13]}</button>
                    </div>
                  </div>
                  <div className={styles.seatC} style={row}>
                    {/* <p>{data[0][2]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][0]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][1]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][2]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][3]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][4]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][5]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][6]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][7]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][8]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][9]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][10]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][11]}</button>
                    </div>
                  </div>
                  <div className='seatD' style={row}>
                    {/* <p>{data[0][3]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][0]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][1]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][2]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][3]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][4]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][5]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][6]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][7]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][8]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][9]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][10]}</button>
                      <button value="standart" onClick={handleClick} className={[styles.seatDefault, styles.seatStandart].join(' ')}>{data[1][11]}</button>
                    </div>
                  </div>
                  <div className='seatE' style={row}>
                    {/* <p>{data[0][4]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][3]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][4]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][5]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][6]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][7]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][8]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][9]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][10]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][11]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][12]}</button>
                    </div>
                  </div>
                  <div className='seatF' style={row}>
                    {/* <p>{data[0][5]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][3]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][4]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][5]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][6]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][7]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][8]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][9]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][10]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][11]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][12]}</button>
                    </div>
                  </div>
                  <div className='seatG' style={row}>
                    {/* <p>{data[0][6]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip,styles.selected].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][3]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][4]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][5]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][6]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][7]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][8]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][9]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][10]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][11]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][12]}</button>
                    </div>
                  </div>
                  <div className='seatH' style={row}>
                    {/* <p>{data[0][7]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][3]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][4]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][5]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][6]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][7]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][8]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][9]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][10]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][11]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][12]}</button>
                    </div>
                  </div>
                  <div className='seatJ' style={row}>
                    {/* <p>{data[0][8]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][3]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][4]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][5]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][6]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][7]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][8]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][9]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][10]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][11]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][12]}</button>
                    </div>
                  </div>
                  <div className={styles.seatK} style={row}>
                    {/* <p>{data[0][9]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][0]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][1]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][2]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][3]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][4]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][5]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][6]}</button>
                      <button value="vip" className={[styles.seatDefault, styles.seatVip, styles.selected].join(' ')}>{data[1][7]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][8]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][9]}</button>
                      <button value="vip" onClick={handleClick} className={[styles.seatDefault, styles.seatVip].join(' ')}>{data[1][10]}</button>
                    </div>
                  </div>
                  <div className='seatL' style={row}>
                    {/* <p>{data[0][10]}</p> */}
                    <div className='seats' style={seats}>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][0]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][1]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][2]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][3]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][4]}</button>
                      <button value="deluxe" className={[styles.seatDefault, styles.seatDeluxe, styles.selected].join(' ')}>{data[1][5]}</button>
                      <button value="deluxe" className={[styles.seatDefault, styles.seatDeluxe, styles.selected].join(' ')}>{data[1][6]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][7]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][8]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][9]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][10]}</button>
                      <button value="deluxe" onClick={handleClick} className={[styles.seatDefault, styles.seatDeluxe].join(' ')}>{data[1][11]}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.left}>
                  <div className={styles.footerSelected}>
                    <div className={styles.leftSelected}></div>
                    <p>Da Chon</p>
                  </div>
                  <div className={styles.footerSelecting}>
                    <div className={styles.leftSelecting}></div>
                    <p>Dang Chon</p>
                  </div>
                </div>
                <div className='right'>
                  <div className={styles.footerType}>
                    <div class={styles.rightStandard}></div>
                    <p>Standard-60.000</p>
                  </div>
                  <div className={styles.footerType}>
                    <div class={styles.rightVip}></div>
                    <p>Vip-90.000</p>
                  </div>
                  <div className={styles.footerType}>
                    <div class={styles.rightDeluxe}></div>
                    <p>Deluxe - 110.000</p>
                  </div>
                  </div>
              </div>
              <div className={styles.submit}>
                <div className={styles.head}>
                  <div>
                    <h6>CGV Cinema</h6>
                    <div className={styles.time}>
                      <p>9h00-12h00</p>
                      <hr></hr>
                      <p>{date}</p>   
                    </div>
                    <h6>*Nên submit để cập nhật giá</h6>
                  </div>
                  
                </div>
               <div className={styles.foot}>
                <p id='price'>{totalprice}</p>
                <div className={styles.button}>
                  <div className={styles.button1}>
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                  <div className={styles.button2} >
                    <button onClick={handlePay}>Pay</button>
                  </div>
                </div>
               </div>
              </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
      
    )
}
    
  

    // return (
     
    // )

export default Home