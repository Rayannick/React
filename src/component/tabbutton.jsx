// eslint-disable-next-line react/prop-types
export default function TabButton({children,bitch}){



    return (
        <li>
            <button onClick={bitch}>{children}</button>
        </li>
    )
}