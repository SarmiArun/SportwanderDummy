export default function validate(inpdata, handleError, inptype,index=false) {
    var error = false;
    var errors = {};
    var keyName = false;
    Object.entries(inpdata).map(([key, value], index) => {
      if(Object.values(inpdata).length===1)
       keyName=key;
      switch (inptype[key]) {
        case "text":
          if (value === ""||value===null) {
            error = true;
            return (errors = { ...errors, [key]: "*required" });
          }
          if (value.length < 3) {
            error = true;
            return (errors = {
              ...errors,
              [key]: "Must have four or more characters",
            });
          }
          break;
        case "image":
          if (value === ""||value===null||typeof value==="undefined") {
            error = true;
            return (errors = { ...errors, [key]: "*required" });
          }
          if(value.name&&['png','jpg','jpeg'].indexOf(value.name.toLowerCase().split('.').pop())===-1){
            error=true;
          return (errors = {
            ...errors,
            [key]: "Please upload png or jpg or jpeg",
          });
        }
          break;
        case "email":
          if (value === "") {
            error = true;
            return (errors = { ...errors, [key]: "*required" });
          }
          if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            error = true;
            return (errors = {
              ...errors,
              [key]: "Invalid Email Address",
            });
          }
          break;
          case "number":
            if (value === "") {
              error = true;
              return (errors = { ...errors, [key]: "*required" });
            }
            if (value.length!==10) {
              error = true;
              return (errors = {
                ...errors,
                [key]: "Invalid Mobile Number",
              });
            }
            break;
      }
      if(!errors[key])
      errors = { ...errors, [key]: "success" };
    });
    handleError(errors,keyName,index);
    return error;
  }
  