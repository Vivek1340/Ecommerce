
const Success = () => {
  return (
    <div 
        style={{
            height:"100vh",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection: "column"
        }}
        >
        <h1>SWAGGER</h1>
            <button
            style={{
                border:"none",
                width:200,
                borderRadius:5,
                padding: "20px",
                backgroundColor:"teal",
                color:"white",
                fontWeight:"600",
                cursor:"pointer",
            }}
            >
            Successful!

            </button>
            <p
            style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}
            >Your Order has been accepted . Thank you for shopping with us!</p>
        </div>
  )
}

export default Success