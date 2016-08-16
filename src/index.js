import React from "react"
import t from "tcomb-form"

export default React.createClass({
  onSubmit: function(evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      console.log(value)
    }
  },

  onChange: function(evt) {
    if(this.props.readOnly){
      this.forceUpdate();
    }
  },

  render: function(){
    var button = null;
    if(!this.props.readOnly){

      button = <div className="form-group">
        <button type="submit" className="btn btn-primary">Save</button>
        {this.props.allowDelete ? <button onClick={this.onDelete} className="btn">Delete</button> : null}
      </div>
    }

    return (<form onSubmit={this.props.onSubmit || this.onSubmit}>
      <t.form.Form ref="form" value={this.props.value} type={this.props.clazz.getSchema()} />
      {button}
    </form>)
  }
})
