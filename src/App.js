import './App.css';
import Button from '@mui/material/Button'
import TextField  from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [principle,setprinciple] = useState(0);
  const [rate,setrate] = useState(0)
  const [year,setyear] = useState(0)
  const [interest,setinterest] = useState(0)
  //const [result,setresult] = useState(0);

  const [isPrincipleValid,setprincipleValid] = useState(true);
  const [isRateValid,setRateValid] = useState(true);
  const [isyearvalid,setYearValid] = useState(true);

//  principle*rate*year /100


  const validate = (e) => {
    const {name,value} = e.target;
    if(!!value.match(/^[1-9][0-9]*\.?[0-9]*$/)){
    if(name==='principle'){
      setprinciple(value)
    }
    else if(name === 'rate'){
      setrate(value);
    }
    else{
      setyear(value);
    }
  }
  }


  const handlecalculate = (e) => {
    e.preventDefault();
    const result = (principle*rate*year)/100;
    setinterest(result)
  }

  const handlereset = () => {
    setinterest(0);
  }

  return (
   <div style={{backgroundColor: 'black',height: '100vh'}} className='d-flex justify-content-center align-items-center'>
    <div style={{backgroundColor:"white",width: '500px'}} className='p-4'>
       <h2>Simple Interest Application</h2>
       <p>Calculate your simple Interest easily</p>
       <div style={{height:'150px',backgroundColor:'orange'}} className='p-3 mt-3 rounded shadow d-flex justify-content-center align-items-center flex-column'>
         <h2 className='fw-bold'>₹{interest}</h2>
         <p>Total simple interest</p>
         </div>
         <form onSubmit={handlecalculate}>
          <div className='mt-3'>
          <TextField id="outlined-basic" label="Outlined" name="principle" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          </div>
          <div className='mt-3'>
          <TextField id="outlined-basic" label="Rate of intererest" name="rate" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          </div>
          <div className='mt-3'>
          <TextField id="outlined-basic" label="total years" variant="outlined"  className='w-100' onChange={(e)=>validate(e)}/>
          </div>
          <div className='mt-3 d-flex justify-content-between'>
            <Button variant="contained" color='success' type='submit' style={{width:'190px',padding:'10px'}}>CAlculate</Button>
            <Button variant="outlined" type="reset" onClick={handlereset} style={{width:'190px',padding:'10px'}}>RESET</Button>

          </div>
         </form>
       </div>
    </div>

  );
}

export default App;
