function wait(duration: number): Promise<any> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("Hi"), duration)
    })
}

wait(2000).then((value) => {
    console.log(value.length) 
})