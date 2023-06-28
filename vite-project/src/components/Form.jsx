import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Form = () => {

    const{register, control, handleSubmit, formState: { errors, isValid }} = useForm({
        // mode: 'onBlur',
        defaultValues: {
            name: '',
            pass: '',
            pets: '',
            years: ''
        }
    });
    // console.log('formState', errors)

    const onSubmit = (data) => {
        console.log('onsubmit', data);
    }

    const onError = (data) => {
        console.log('onerror', data)
    }

    // const regExp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+";

    const handleValidate = (data) => {
        console.log(data)
        return false
    }

    const options = [
        {id: 1, value: 'dog', name: 'Dogs'},
        {id: 2, value: 'cat', name: 'Cats'},
        {id: 3, value: 'snake', name: 'Snake'},
        {id: 4, value: 'mouse', name: 'Mouse'},
    ]

    return (
        <div className="container">
            <h2>Form</h2>
            <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete = 'off'>
                <div><input type='text' {...register('name', {
                    required: 'Pole mae buti zapovnene',
                    minLength: {
                        value: 3,
                        message: 'Vvedit bilshe 3'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Vvedit menshe 3'
                    }
                    // validate: handleValidate
                })} />
                {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div><input type='password' {...register('pass',{
                    required: 'Pole mae buti zapovnene',
                    minLength: {
                        value: 3,
                        message: 'Vvedit bilshe 3'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Vvedit menshe 11'
                    }
                })} />
                {errors.pass && <span>{errors.pass.message}</span>}
                </div>
                {/* <div><input type='email' {...register('email',{
                    required: true,
                    pattern: RegExp
                })} /></div> */}
                <div>
                    {/* <select {...register('pets')}>
                        {options.map(a =><option key={a.id} value={a.value}>{a.name}</option>)}
                    </select> */}
                    <div>
                        <Controller name='years'
                                rules={{required:"Viberit pets"}} 
                                control={control} 
                            render={({field}) =>
                        <Select {...field}

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"


                        >
                            {options.map(a =><MenuItem key={a.id} value={a.value}>{a.name}</MenuItem>)}
                        </Select> 
                        
                        }  />  
                        {errors.years && <span>{errors.years.message}</span>}              
                    </div>
                </div>
                <button >submit</button>
            </form>
                
        </div>
        );
}
export default Form;