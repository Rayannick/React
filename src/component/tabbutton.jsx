// eslint-disable-next-line react/prop-types
export default function TabButton({children,bitches}){



    return (
        <li>
            <button onClick={bitches}>{children}</button>
        </li>
    )
}