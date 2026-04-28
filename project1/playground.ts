type APIResponse<TData> = {
    data: TData
    isError?: boolean
}

type UserResponse = APIResponse<{name: string, age: number}>

const a: UserResponse = {
    data: {
        name: "Atul",
        age: 23
    },
    isError: false
}