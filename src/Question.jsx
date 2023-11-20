import React from "react"


export default function Question(props) {



    const ColoredLine =
        <hr
            style={{
                color: "black",
                backgroundColor: "black",
                height: "1",
                width: "100%",
                marginTop: "0px"
            }}
        />

    const [selected, setSelected] = React.useState("")
    const [dis, setDis] = React.useState(false)
    const [showAns, setShowAns] = React.useState(false)


    function reset(){
        setShowAns(false)
        setDis(false)
    }

    function clicker(ans){
        

        if (ans === props.correctAnswer){
            props.scoreAdder()

        }

        setSelected(ans)
        setDis(true)
        setShowAns(true)


    }

    function reset(){
        setShowAns(false)
        setDis(false)
    }

    React.useEffect(()=>{
        props.passChildData(()=>()=>reset)
    },[selected])
   
        
        
    

    const green = {backgroundColor: "rgba(0,255,0,75%)",color: "black"}
    const red = {backgroundColor: "rgba(255,0,0,75%)",color: "white"}
    const blue = {backgroundColor: "rgba(0,0,255,75%)",color: "white"}
    
    function QuestionAnswerPairs (){
        return (
            <div className="question--container" key={props.id}>
            <h2>{props.question}</h2>
            <div className="answer--container">
                <h4 
                className="answer--bubble" 
                style={(showAns && props.answers[0]===props.correctAnswer) ? green : (showAns && props.answers[0]!==props.correctAnswer && props.answers[0] === selected) ? red : {}} 
                onClick={()=> {!dis && clicker(props.answers[0])}}>
                    {props.answers[0]}
                </h4>

                <h4 
                className="answer--bubble" 
                style={(showAns && props.answers[1]===props.correctAnswer) ? green : (showAns && props.answers[1]!==props.correctAnswer && props.answers[1] === selected) ? red : {}} 
                onClick={()=> {!dis && clicker(props.answers[1])}}>
                    {props.answers[1]}
                </h4>

                <h4 
                className="answer--bubble" 
                style={(showAns && props.answers[2]===props.correctAnswer) ? green : (showAns && props.answers[2]!==props.correctAnswer && props.answers[2] === selected) ? red : {}} 
                onClick={()=> {!dis && clicker(props.answers[2])}}>
                    {props.answers[2]}
                </h4>
                
                <h4 
                className="answer--bubble" 
                style={(showAns && props.answers[3]===props.correctAnswer) ? green : (showAns && props.answers[3]!==props.correctAnswer && props.answers[3] === selected) ? red : {}} 
                onClick={()=> {!dis && clicker(props.answers[3])}}>
                    {props.answers[3]}
                </h4>
            </div>
            
            {ColoredLine}
        </div>
        )
    }

    console.log(selected)

    return (
    <div>
        <QuestionAnswerPairs />
        
    </div>
        
    )
}

