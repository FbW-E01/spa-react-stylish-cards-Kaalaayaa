
function RegularCSS() {

    const style = {
        border: "1px solid black",
        width: "700px",
        height:"300px",
        borderRadius:"5px",
        margin:"50px 170px 170px 500px",
        background: "linear-gradient(#e66465, #9198e5)",
       }
    
    const style1 = {
        textAlign: "center",
        paddingTop: "110px",
        fontSize: "30px",
        fontFamily: "Pilowlava"

    }


    return(
        <div style={style}>
            <p style={style1}>I am regular CSS</p>
        </div>
    )

}

export default RegularCSS