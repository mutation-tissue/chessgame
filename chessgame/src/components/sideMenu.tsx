function SideMenu({initialize}: {initialize: Function}) {

    return (
        <div>
            <button onClick={()=>initialize()}>initialize</button>
            <h1>SideMenu(added history)</h1>
        </div>
    );
}

export default SideMenu