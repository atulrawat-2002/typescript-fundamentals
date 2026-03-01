function withDarkmode(Component: any) {

    const DarkModeStyles = {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh'
    }

    return function(props: any) {

        return <>

            <div style={DarkModeStyles} >  <Component {...props} /> </div>

        </>
    }
}


export default withDarkmode;