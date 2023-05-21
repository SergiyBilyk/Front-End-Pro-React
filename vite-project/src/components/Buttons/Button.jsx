import './Button.css'

export const Button = (props) => {

    const{onClick} = props;
return (
    <button onClick = {onClick} className="btn">{props.children}</button>
)
}
