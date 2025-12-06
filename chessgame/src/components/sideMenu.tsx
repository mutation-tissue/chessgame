function SideMenu() {
    function initialize() {
        console.log("initialize")
    }
    return (
        <div>
            <button onClick={initialize}>initialize</button>
            <h1>SideMenu(added history)</h1>
        </div>
    );
}

export default SideMenu