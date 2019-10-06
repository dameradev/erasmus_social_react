import React, { Component } from "react";
import Input from "../../../components/Input/Input";

class ProjectForm extends Component {
  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Project name"
        },
        value: ""
      },
      countries: {
        elementType: "select",
        elementConfig: {
          options: [{ value: "Macedonia" }, { value: "Sloveina" }]
        },
        value: ""
      }
    },
    goals: [
      {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Project name"
        },
        value: ""
      }
    ]
  };

  inputChangedHandler = (event, elementId) => {
    if (elementId.length > 1) {
      const updatedControls = {
        ...this.state.controls,

        [elementId]: {
          ...this.state.controls[elementId],

          value: event.target.value
        }
      };
      this.setState({ controls: updatedControls });
    } else {
      const updatedGoals = [...this.state.goals];
      updatedGoals[elementId].value = event.target.value;
      this.setState({ goals: updatedGoals });
    }
  };

  addGoal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      goals: [
        ...prevState.goals,
        {
          elementConfig: {
            type: "input",
            placeholder: "What do you want to achieve?"
          },
          value: ""
        }
      ]
    }));
  };

  render() {
    const fromElementsArray = [];
    for (let key in this.state.controls) {
      fromElementsArray.push({ id: key, config: this.state.controls[key] });
    }
    for (let key in this.state.goals) {
      fromElementsArray.push({ id: key, config: this.state.goals[key] });
    }
    console.log(fromElementsArray.length);
    // console.log(fromElementsArray);

    const form = fromElementsArray.map(formElement => {
      console.log(formElement);
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(e, elementId) =>
            this.inputChangedHandler(e, formElement.id)
          }
        />
      );
    });
    return (
      <div>
        <h2>Add a new Project</h2>
        <form>
          {form}
          <button onClick={e => this.addGoal(e)}>Add new goal</button>
        </form>
      </div>
    );
  }
}

export default ProjectForm;
