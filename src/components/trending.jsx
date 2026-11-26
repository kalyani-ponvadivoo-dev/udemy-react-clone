function Trending() {
    return (

        <div className="trending">
        <h1>Trending Courses</h1>
        <p>Exclusive for you</p>
        <div className="trending_container">
            <div className="trending_container__course1">
                <img src="/images/course1.jpg" alt="Course1_image" />
                <h3>LLM Engineering, RAG, QLoRA, Agents</h3>
                <p>Ed donner</p>
                <p>4.7</p>
                <p>499 <del>999</del></p>
            </div>
            <div className="trending_container__course2">
                <img src="/images/course2.jpg" alt="Course2_image" />
                <h3>The Complete Agent & MCP Course</h3>
                <p>Angella</p>
                <p>4.9</p>
                <p>799 <del>1999</del></p>
            </div>
            <div className="trending_container__course3">
                <img src="/images/course3.jpg" alt="Course3_image" />
                <h3>The Complete Python Pro Bootcamp</h3>
                <p>Kyle</p>
                <p>4.8</p>
                <p>699 <del>2999</del></p>
            </div>
            <div className="trending_container__course4">
                <img src="/images/course4.jpg" alt="Course4_image" />
                <h3>Complete Claude & Coding Agents Course</h3>
                <p>Patrick</p>
                <p>4.9</p>
                <p>999 <del>2999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Trending;