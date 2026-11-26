

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar-section1">
                <h1 className="navbar-section1__title">Udemy</h1>
            </div>

            <div className="navbar-section2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="search anything here" />
            </div>

            <div className="navbar-section3">
                <p>Courses</p>

                <div className="mylearning">
                    <p>My Learning</p>
                    <p className="mylearning_popup">
                        You didn't purchase anything
                    </p>
                </div>

                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-jelly-fill fa-regular fa-user"></i>
            </div>

            <div className="navbar-section4">
                <i
                    className="fa-solid fa-bars"
                    style={{ color: "rgb(0, 0, 0)" }}
                ></i>
            </div>

        </div>
    );
}

export default Navbar;

