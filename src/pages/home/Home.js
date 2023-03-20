function Home() {
    document.title = "Home";
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-4 fw-bold">Home</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">The home page? What more would you want?</p>
            </div>
        </div>
    );
}

export default Home;