function checkLength(a: String, b: number) {
    return a.length < b;
}

type ReturnOfLengthCheck = ReturnType<typeof checkLength>