function TabButton({children}){

    function handleClick(){
        console.log("The one and only oyeah");
    }

    return (
            <li>
                <button onClick={handleClick}>{children}</button>
             </li>
        
        );

}

export default TabButton;