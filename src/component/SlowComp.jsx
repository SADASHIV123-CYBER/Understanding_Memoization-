function doSomething(ms) {
    const start = Date.now();
    let now = start

    while(now - start < ms) {
        now = Date.now();
    }
}

function SlowComponent({time, fun, x}) {
    doSomething(time[0]);
    fun();
    return (
        <>
            <h1>show comp</h1>
            {x}
        </>
    ) ;
    
}

export default SlowComponent