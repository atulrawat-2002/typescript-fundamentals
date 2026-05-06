function checkLength(a: String, b: number) {
    return a.length < b;
}

type Func = () => void

// type ReturnOfLengthCheck = ReturnType<Func>
type Params = Parameters<typeof checkLength>[0]