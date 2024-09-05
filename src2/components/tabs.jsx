
/* eslint-disable react/prop-types */













// children argument work as the content between the component


export default function Tabs({button , children , buttonContainer = 'default_value'}){

    const ButtonContainer =  buttonContainer

return(<>

        <ButtonContainer>{button}</ButtonContainer>
        {children}
     </>
    )
}