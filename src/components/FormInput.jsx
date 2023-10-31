import React from 'react';
import {useController} from "react-hook-form";

const FormInput = props => {

   const {name, placeholder, label, rules, control, defaultValue = '', ...inputProps} = props

   const {field} = useController({name, control: control, rules, defaultValue})

   return (
      <div className="form-group">
         <label className="form-label" >
            {label}
         </label>
         <div className="form-control-wrap">
            <input
               value={field.value}
               name={field.name}
               onChange={field.onChange}
               onBlur={field.onBlur}
               ref={field.ref}
               className="form-control"
               placeholder={placeholder}
               {...inputProps}
            />
         </div>
      </div>
   );
};

export default React.memo(FormInput);