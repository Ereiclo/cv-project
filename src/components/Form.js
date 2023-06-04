function Form(props){
    let {state_name,id,data,onInputChange,onRemove} = props;



    return (
        <div className="form">
            {data.map((current_input,index) => {
                return (

                    <div className="input" key={current_input.name}>
                        <input type={current_input.type} 
                        placeholder={current_input.placeholder}
                        value={current_input.value}
                        onChange={(e) => onInputChange(state_name,id,e,current_input.name)}
                        />
                    </div>
                )
            })}
            <button onClick={(e) => onRemove(state_name,id,e) } >Elimina </button>
        </div>

    );

    






}


export default Form;