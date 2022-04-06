import c from "./dialog.module.scss"

const Dialog = ({children}) => {

    return (
        <div className={c.modal}>
            <div className={c.scrollContainer}>
                <div className={c.dialog}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export {Dialog};