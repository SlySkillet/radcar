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
            <img src="https://res.cloudinary.com/outdoorsy/image/upload/a_exif,q_auto,f_auto,w_auto,e_improve,w_1000,c_fill/v1584206903/p/rentals/159752/images/g5qedpaa3kksvrluz4ji.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://www.campervanlife.com/wp-content/uploads/2021/03/3396090548_36c4e0dc70_o-scaled.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
