import React from "react"

export default function Answers(props) {
    
    const [cl, setCl] = React.useState(false);
    const [selected, setSelected] = React.useState("")

    let zxc =[]
        





    function clicker(ans,index){
        console.log(`clicked: ${ans} , ${props.correctAnswer}`)



        if (ans === props.correctAnswer){
            setCl(true)

        } else {
            setCl(false)

        }


        setSelected(ans)

        zxc = [
            {id:0, a: ""},
            {id:1, a: ""},
            {id:2, a: ""},
            {id:3, a: ""},
            {id:4, a: ""}
        ]
        for (let i=0;i<zxc.length;i++){
            if (props.answers.includes(ans)){
                zxc[i].a = ans
            }

        }


    }



    const green = {backgroundColor: "rgba(0,255,0,75%)",color: "black"}
    const red = {backgroundColor: "rgba(255,0,0,75%)",color: "white"}
    const blue = {backgroundColor: "rgba(0,0,255,75%)",color: "white"}


    

    const el = props.answers.map((ans, index) => {
        
      
        

        /* ans===props.correctAnswer? green : blue */

        return <h4 className="answer--bubble" style={ans===selected? blue : {}} key={props.id+index} onClick={()=> {clicker(ans,index)}}>{ans}</h4>
    })

    
  

    return (
        <div className="answer--container">
            {el}
        </div>
    )
}