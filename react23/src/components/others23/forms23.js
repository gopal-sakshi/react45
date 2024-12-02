import { useForm } from 'react-hook-form';

export default function Forms23() { 
    const { register, handleSubmit, formState: { errors } } = useForm();   
    return (
        <form onSubmit={ handleSubmit((data) => console.log("data ===> ", data)) }>
            <input {...register('firstName')} />
            <input {...register('lastName', { required: true })} />
            { errors.lastName && <p>Last name is required.</p> }
            <input {...register('age', { pattern: /\d+/ })} />
            { errors.age && <p>Please enter number for age.</p> }
            <input type="submit" />
      </form>        
    );
}