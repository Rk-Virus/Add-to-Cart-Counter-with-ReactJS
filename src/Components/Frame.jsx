import React, { useState, useEffect } from "react";
import "./Frame.css";
import { Button, Tooltip } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function Frame() {

    // useState Hook varibale to set the count
    const [amount, setAmount] = useState(0);

    // useEffect Hook function to update the title
    useEffect(() => {
      if(amount > 0){
        document.title = `React Cart (${amount})`;
      }
      else{
        document.title = "React Cart";
      }
    })

    function increment(){
        setAmount(amount + 1);
    }
    function decreament(){
        if(amount > 0){
            setAmount(amount - 1);
        }
    }

  return (
    <div className="frame">
      <div className="box">
        <h2>How Many You Want?</h2>
        <div className="numBox"> {amount} </div>
        <div className="buttons">
          <div className="btn">
          <Tooltip title="Increase by 1">
            <Button variant="contained" color="primary" onClick={increment}>
                 <AddIcon/>
            </Button>
          </Tooltip>
          </div>

          <div className="btn">
          <Tooltip title="Decrease by 1">
            <Button variant="contained" color="primary" onClick={decreament}>
              <RemoveIcon/>
            </Button>
          </Tooltip>
          </div>
        </div>
        <div className="cartBtn">
            <Button variant="contained" color="default">
                 Add to &nbsp;<AddShoppingCartIcon/> 
            </Button>
        </div>
      </div>
    </div>
  );
}
