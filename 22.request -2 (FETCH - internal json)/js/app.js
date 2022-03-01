// *************** HTTP-2 (fetch) *************

// elements
const btn = document.querySelector(".btn");
const container = document.querySelector(".cars-center");

// show items when website loads
window.addEventListener("DOMContentLoaded", async () => {
  getData();
});

// fetch data
const getData = async () => {
  // ----- first way
  // fetch("./cars.json")
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     displayItems(data);
  //   });
  // ----- second way async/await
  try {
    const response = await fetch("./cars.json");
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
};

//display items
function displayItems(data) {
  const displayItems = data
    .map((item) => {
      return `  <!-- single-car -->
        <article class="card">
          <!-- card-front -->
          <div class="card-side card-front">
            <!-- car-img -->
            <div class="card-img-cont">
              <img class="card-img" src="${item.img}" alt="" />
            </div>
            <!-- car-info -->
            <div class="car-info">
              <!-- car-info-title -->
              <h3 class="car-info-title">${item.name}</h3>
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>Base Price:</span>${item.price}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>Engine:</span>${item.engine}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>Power:</span>${item.power}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>Torque:</span>${item.torque}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>0-60:</span>${item.zeroSix}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>0-124 mph:</span>${item.zeroHund}</p>
              </div>
              <!-- end of car-info-text-div -->
              <!-- car-info-text-div -->
              <div class="car-info-div">
                <!-- car-info-icon -->
                <span class="car-icon">
                  <i class="fas fa-car"></i>
                </span>
                <!-- car-info-text -->
                <p class="car-info-text"><span>Top-speed:</span>${item.speed}</p>
              </div>
              <!-- end of car-info-text-div -->
            </div>
          </div>
          <!-- card-back -->
          <div class="card-side card-back">
            <!-- card-back-info -->
            <div class="card-back-info">
              <p class="card-back-text">
               ${item.info}
              </p>
              <a class="card-back-btn btn" href="">learn more</a>
            </div>
            <!-- end ofcard-back-info -->
          </div>
        </article>
        <!-- end of single-car -->
      </div>
    </section>
    <!-- end of cars -->`;
    })
    .join("");
  container.innerHTML = displayItems;
}
