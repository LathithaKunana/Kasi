import React from "react";

import {
    StyedContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles'

const Login = () => {
    return (
        <StyedContainer>
            <InnerContainer>
                <PageLogo resizeMode = 'cover' source = {require('./../assets/ekasi dark')}
            </InnerContainer>
        </StyedContainer>
    )
}

export default Login;