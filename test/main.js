import React from "react"
import ReactDom from "react-dom"
import ClassGui from "../dist/index"
import t from "tcomb-form"

class User {
    constructor(){

    }

    static getSchema(){
      return t.struct(
        {
          name: t.String,
          age: t.Number,
          dateOfBirth: t.Date
        }
      )
    }
}

ReactDom.render(
  <ClassGui clazz={User} value={{name:"Bob"}} allowDelete={true}/>, 
document.getElementById("app"))
