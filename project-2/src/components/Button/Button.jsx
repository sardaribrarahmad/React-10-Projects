
import styles from './Button.module.css'


const Button = ({blank, icon, text, ...rest}) => { 
  return (
    <button {...rest} className={blank ? styles.blank_btn : styles.primary_btn}>
      {text}
      {icon}
    </button>
  )
}

export default Button; 