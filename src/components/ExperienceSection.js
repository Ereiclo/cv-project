import Form from "./Form";

function ExperienceSection(props) {
  let {state_name, data, onInputChange, onRemove, createNewExperience } = props;
  let sharedProps = {state_name,onInputChange,onRemove};

  return (
    <div className="experience-section">
      {data.map((elem) => {

        return <Form key={elem.id} {...elem} {...sharedProps}/> 

      })}

      <div className="add-experience">
        <button onClick={() => createNewExperience()}>Agrega</button>
        {/* <button >Elimina</button> */}
      </div>
    </div>
  );
}

export default ExperienceSection;
