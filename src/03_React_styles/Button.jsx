// HOW TO STYLE REACT COMPONENTS WITH CSS - Làm thế nòa để điều chỉnh style cho component
// (not including external frameworks or preprocessors) - không bao gồm các khung hoặc bộ tiền xử lý bên ngoài

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import styles from './Button.module.css'

const Button = () => {
  return (
    <>
        <button className={styles.button}>Click me</button>
    </>
  )
}

export default Button