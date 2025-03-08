function doSomething(ms) {
    const start = Date.now();
    let now = start

    while(now - start < ms) {
        now = Date.now();
    }
}

function SlowComponentTwo({children}) {
    doSomething(1000)
    return (
        <>
            {children}
        </>
    )
}

export default SlowComponentTwo