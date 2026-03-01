


function withAuth(Component: any) {
    // enhancement

    return function (props: any): any {
            return <Component {...props} />
        }
    }


export default withAuth;