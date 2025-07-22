import s from "./Wrapper.module.css"

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({children}: WrapperProps) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper