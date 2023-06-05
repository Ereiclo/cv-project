import uniqid from "uniqid";
import ExperienceSection from "./components/ExperienceSection";
import "./App.css";
import { useState } from "react";
import UserSection from "./components/UserSection";
import CV from "./components/CV";

function createUserFields() {
  return [
    {
      value: "",
      type: "text",
      name: "first_name",
      placeholder: "Primer Nombre",
    },
    {
      value: "",
      type: "text",
      name: "last_name",
      placeholder: "Apellido",
    },
    {
      value: "",
      type: "text",
      name: "title",
      placeholder: "Titulo",
    },
    {
      value: "",
      src_value: "",
      type: "file",
      name: "photo",
      placeholder: "Foto",
    },
    {
      value: "",
      type: "text",
      name: "email",
      placeholder: "Email",
    },
    {
      value: "",
      type: "text",
      name: "description",
      placeholder: "Description",
    },
  ];
}

function createExperienceFields() {
  return [
    {
      value: "",
      type: "text",
      name: "position",
      placeholder: "Posicion",
    },
    {
      value: "",
      type: "text",
      name: "company",
      placeholder: "Compania",
    },
    {
      value: "",
      type: "text",
      name: "city",
      placeholder: "Ciudad",
    },
    {
      value: "",
      type: "text",
      name: "from",
      placeholder: "Desde",
    },
    {
      value: "",
      type: "text",
      name: "to",
      placeholder: "hasta",
    },
  ];
}

//   let position = {value:'',type:'text'};
//   let company = {value:'',type:'text'};
//   let city = {value:'',type:'text'};
//   let from = {value:'',type:'text'};
//   let to = {value:'',type:'text'};

function createForm(data) {
  return { id: uniqid(), data };
}


function App(props){
  let [userInformation,setUserInformation] = useState(createUserFields());
  let [experience,setExperience] = useState([createForm(createExperienceFields())]);

  const onUserInformationChange = (e, name) => {
    let new_value = e.currentTarget.value;
    let tipo = e.currentTarget.type;

    if (tipo === "file") {
      let [file] = e.currentTarget.files;
      new_value = URL.createObjectURL(file);
    }

    setUserInformation(
      userInformation.map((field) => {
        return field.name === name
          ? { ...field, [tipo === "file" ? "src_value" : "value"]: new_value }
          : field;
      })
    );
  };

  const onExperienceChange = (state_name,id, e, name) => {
    let new_value = e.currentTarget.value;
    let new_fields = experience 
      .find((elem) => elem.id === id)
      .data.map((field) => {
        return field.name === name ? { ...field, value: new_value } : field;
      });

    setExperience(
      experience.map((elem) => {
        return elem.id === id ? { ...elem, data: new_fields } : elem;
      }),
    );
  };

  const onRemoveState = (state_name,id, e) => {
    // let state = this.state;
    let new_array = experience 
      .filter((elem) => elem.id !== id)

    setExperience(new_array);
  };


  const createNewExperience = () => {
    setExperience(experience.concat(createForm(createExperienceFields())))
  }


  return (
      <div className="app">
        <UserSection
          data={userInformation}
          onInputChange={onUserInformationChange}
        />
        <ExperienceSection 
          state_name='experience' 
          data={experience}
          onInputChange={onExperienceChange}
          createNewExperience={createNewExperience}
          onRemove={onRemoveState}
        />
        <CV {...{userInformation,experience}}/>
      </div>
    );

}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user_information: createUserFields(),
//       experience: [createForm(createExperienceFields())],
//     };
//   }

  

  

  

//   render() {
//     let { user_information,experience } = this.state;
//     // let {src_value} = user_information.find((field) => field.name === 'photo');
    
//   }
// }

export default App;

// function personalInformation(){
//   let first_name = {value:'',type:'text'};
//   let last_name = {value:'',type:'text'};
//   let title = {value:'',type:'text'};
//   let src_photo = {value:'',type:'file'};
//   let address = {value:'',type:'text'};
//   let phone_number = {value:'',type:'text'};
//   let email = {value:'',type:'text'};
//   let description = {value:'',type:'text'};

//   return []

// }

// function educationInformation(){
//   let position = {value:'',type:'text'};
//   let company = {value:'',type:'text'};
//   let city = {value:'',type:'text'};
//   let from = {value:'',type:'text'};
//   let to = {value:'',type:'text'};

//   return {position,company,city,from,to};

// }

// function experienceInformation(){
//   let university_name = {value:'',type:'text'};
//   let city = {value:'',type:'text'};
//   let degree = {value:'',type:'text'};
//   let subject  = {value:'',type:'text'};
//   let from  = {value:'',type:'text'};
//   let to  = {value:'',type:'text'};

//   return {university_name,city,degree,subject,from,to};
// }
