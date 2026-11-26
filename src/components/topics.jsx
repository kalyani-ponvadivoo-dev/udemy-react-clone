function Topics(){
    return(
         <div className="topics">
        <p>Choose your Topic</p>
        <input type="text" placeholder="Suggest a topic" />
        <h1 className="topics_title">Topics Recommanded for you</h1>
        <div className="topics_container">
            <p>Java</p>
            <p>Python</p>
            <p>PHP</p>
            <p>Docker</p>
            <p>Asure</p>
            <p>Cloud</p>
            <p>AI</p>
            <p> MERN Stack</p>
            <p>AWS</p>
        </div>
    </div>
    )
}

export default Topics;