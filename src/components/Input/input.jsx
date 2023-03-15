import { useState } from "react";
import { Input } from "../../global/style";



const InputField = (props) => {
    
    const [Value, setValue] = useState(""); 

    const HandelChange = (e) => {
        setValue(e.target.value);
        console.log("Input Component => ", Value)
    }
    
    return (
        <>
            <Input 
                width={props.width ? props.width : '70%'} 
                height={props.height ? props.height : '40px'} 
                type={props.type ? props.type : 'text'} 
                placeholder={props.placeholder} 
                onChange={HandelChange}
            />
        </>
    )
}

export default InputField;