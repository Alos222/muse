export default function ErrorNotice(props) {
    return (
      <div>
        <span>{props.message}</span>
        <button onClick={props.clearError}>OK</button>
      </div>
    )
  }