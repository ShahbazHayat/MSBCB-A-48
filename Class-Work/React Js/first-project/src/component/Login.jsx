//  import React from "react";
// import React, { useRef } from "react";
// un controlled 
//  export default function LoginForm() {
//     const nameField = useRef();
//     const handleSubmit = (event)=> {
//         event.preventDefault();
//         console.log("AGAIN SUBMITTED !");
//         console.log("nameField: ",nameField.current);
//         console.log("nameField-value : ",nameField.current.value);
//     };

//  return(
//     <div>
//         <h1>LOGIN FORM</h1>
//         <form onSubmit={handleSubmit}>
//             <label for="username">User Name </label>
//             <input type="text" ref={nameField} placeholder="Enter your Name" />
            
//             <label for="password">Password </label>
//             <input type="password" placeholder="Enter your Password" />
//             <button>Submit</button>
//         </form>
//     </div>
//  );
//  }

//controlled

/* export default function LoginForm() {
    const [nameField, setNameField] = useState("");
    const handleSubmit = (event)=> {
       console.log("event.target.value : ",event.target.name);
       if (event.target.name === "nameField"){
        //check name
       }
       else{

       }
       setNameField(event.target.value);
    };

    


 return(
    <div>
        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
            <label for="username">User Name </label>
            <input type="text" ref={nameField} placeholder="Enter your Name" />
            
            <label for="password">Password </label>
            <input type="password" placeholder="Enter your Password" />
            <button>Submit</button>
        </form>
    </div>
 );
 } */

 export default function LoginForm(){
    return (<div>
        <Form className="form">
    <FormGroup>
      <Label for="exampleEmail">Username</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="example@example.com"
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="********"
      />
    </FormGroup>
  <Button>Submit</Button>
</Form>
    </div>)
 }


 


