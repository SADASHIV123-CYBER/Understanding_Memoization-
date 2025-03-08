import Moadal from "./Modal";
import useModalDialog from "../hooks/useModalDialog";

function ButtonWithModal() {
    const {isOpen, open, close} = useModalDialog();
    return(
        <div>
            <button onClick={open} >
                open
            </button>

            {isOpen && <Moadal close={close} />}
        </div>
    )
}

export default ButtonWithModal;