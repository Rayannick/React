
/* eslint-disable react/prop-types */













// children argument work as the content between the component


export default function Tabs({button , children }){
    return(<>
        <menu>{button}</menu>
        {children}
     </>
    )
}