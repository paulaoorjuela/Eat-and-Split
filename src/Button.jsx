export default function Button({children, onClick, color = "default"}){
    return(
        <button 
            className={`button ${color !== "default" ? `button--${color}` : ""}`}  
            onClick={onClick}>{children}
        </button>
    )
}