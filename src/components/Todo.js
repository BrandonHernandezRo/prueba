import '../styles/Todo.css'


const Todo = (props) => {

    return (
        <h1 className="element">{props.labor}</h1>
    )
}

function TodoFunction() {
    return (
        <div>
            <h1>ReactJs</h1>
            <p>
                ReactJs is a JavaScript library for building user interfaces.
            </p>
        </div>
    )
}

export  {TodoFunction, Todo}