import Button from "./Button";
import { useState } from "react";


function Calculator() {
    const [display,setDisplay]=useState(1);

    function handleNumber(value){
        // alert("button was clicked ");
        // alert('handle click number  ' + value)
        setDisplay(value);

    }

  function handleOperator(value){
//  alert("button was clicked");

  }



    return (
        <>
        <div className="app-container">
            <div className="display">{display}</div>
            <div className="container">
                <Button value="1" onClick={handleNumber}/>
                <Button value="2" onClick={handleNumber} />
                <Button value="3" onClick={handleNumber}/>
                <Button  className="operator" onClick={handleOperator} value="/" />


 
                <Button value="4" onClick={handleNumber} />
                <Button value="5" onClick={handleNumber}/>
                <Button value="6" onClick={handleNumber}/>
                <Button className="operator" onClick={handleOperator} value="+" />

                <Button value="7" onClick={handleNumber}/>
                <Button value="8" onClick={handleNumber}/>
                <Button value="9" onClick={handleNumber} />
                <Button className ="operator" onClick={handleOperator} value="-" />


                <Button value="C" />
                <Button value="0" onClick={handleNumber}/>
                <Button value="=" />
                <Button className="operator" onClick={handleOperator} value="*" />

                






            </div>
            </div>
        </>
    );
}

export default Calculator;
