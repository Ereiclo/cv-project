



function UserSection(props){
    let {data,onInputChange} = props;



    return (
        <div className="user-section">
            <div className="form">
                {data.map((current_input,index) => {
                    return (
                        <div className="input" key={current_input.name}>
                            {current_input.type === 'file' && <label htmlFor="photo_input">{current_input.placeholder}</label>}
                            <input type={current_input.type}
                            placeholder={current_input.placeholder}
                            value={current_input.value}
                            onChange={(e) => onInputChange(e,current_input.name)}
                            id={current_input.type === 'file' ? 'photo_input' : undefined}
                            />
                        </div>
                    )
                })}
            </div>
        </div>

    );

    






}


export default UserSection;