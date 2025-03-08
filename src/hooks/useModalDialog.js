import { useState } from "react";

function useModalDialog() {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }
}

export default useModalDialog;