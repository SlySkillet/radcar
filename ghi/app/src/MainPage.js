import { useState, useEffect} from 'react';


function MainPage() {
  const [models, setModels] = useState([])
  const fetchData = async () => {
    const automobileUrl = "http://localhost:8100/api/models/"
    const response = await fetch(automobileUrl)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setModels(data.models)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">RadCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for getting rad --- get after it
        </p>
      </div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.f150online.com/wp-content/uploads/2019/01/fe2-3.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://st.automobilemag.com/uploads/sites/10/2015/09/2013-Toyota-Tacoma-Baja-Edition-front-three-quarters-view-in-motion-01.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
