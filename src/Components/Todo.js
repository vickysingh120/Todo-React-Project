import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ name: 'Check mails', id: 1 }, { name: 'Study React', id: 2 }, { name: 'Complete Office work', id: 3 }],
            currTask: ''
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            currTask: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { name: this.state.currTask, id: this.state.tasks.length + 1 }],
            currTask: ''
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((task) => {
            return task.id != id;
        })
        this.setState({
            tasks: [...narr]
        })
    }
    render() {
        return (
            <div className=' mt-5'>
                <div className='text-center'>
                    <h2 className='mb-3 text-primary'>Add your Task</h2>
                    <input type="text" class="mb-5" value={this.state.currTask} onChange={this.handleChange} /> &nbsp;&nbsp;
                    <button onClick={this.handleSubmit} className='btn btn-success'>Submit</button>
                </div>
                <div className='container'>
                <h2 className='mb-3 text-primary text-center'>Existing Task</h2>
                    {
                        this.state.tasks.map((task) => {
                            return (

                                <div key={task.id} class="row mb-3">
                                    <div className='col-md-4 offset-md-4'><b>{task.id}. {task.name} </b></div>
                                    <div className='col-md-3'>
                                        <button className="btn btn-danger" onClick={() => this.handleDelete(task.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Todo;