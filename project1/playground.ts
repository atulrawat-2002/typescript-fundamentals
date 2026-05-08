async function doSomething() {
    return 2;
}

type Value = Awaited<ReturnType<typeof doSomething>>