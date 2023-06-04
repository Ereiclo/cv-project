

function ExperienceCV(props){
    let {experience_information} = props;

    return (
        <div className="experience-information">
            {
                experience_information.map((field)=>{
                    let str = `${field.placeholder} ${field.value === '' ? '-' : field.value}`;

                    return <div className="data" key={field.name}>{str}</div>
                })
            }
        </div>
    )

}

export default ExperienceCV; 