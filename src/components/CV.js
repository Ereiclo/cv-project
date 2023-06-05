import ExperienceCV from "./ExperienceCV";

function CV(props) {
  let { userInformation:user_information, experience } = props;

  return (
    <div className="user-information">
      {user_information.map((field) => {
        let str = `${field.placeholder} ${
          field.value === "" ? "-" : field.value
        }`;

        if (field.type !== "file")
          return (
            <div className="data" key={field.name}>
              {str}
            </div>
          );
        else
          return (
            field.src_value !== "" && (
              <img key={field.name} src={field.src_value} alt="noimg" />
            )
          );
      })}
      <div className="experience-information-cv">
          {experience.map(({ id, data }) => (
            <ExperienceCV key={id} experience_information={data} />
          ))}
      </div>
    </div>
  );
}

export default CV;
