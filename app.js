const activities = [
    {
      name: "Fishing Charters",
      img:
        "url(https://rentcabosanlucas.com/wp-content/uploads/2022/04/Cabo-San-Lucas-Fishing-Charters.png)",
      text:
        "Get to experience some of the best fishing in the world right here in Cabo San Lucas, Mexico. Get a private fishing charter to catch your own Marlin.",
    },
    {
      name: "Golf Packages",
      img:
        "url(https://rentcabosanlucas.com/wp-content/uploads/2022/04/Cabo-Golfing-Packages.png)",
      text:
        "Cabo is also one of the best golf holiday destinations. The resort city is home to famous golf courses that will ensure you experience an unforgettable vacation. "
    },
    {
      name: "Farm To Table Dining",
      img:
        "url(https://rentcabosanlucas.com/wp-content/uploads/2022/04/Farm-to-table-dining-in-Cabo-San-Lucas.png)",
      text:
        "Fresh and local food right from the farm to your plate is the way to experience some amazing dining. Let us get your table reservation booked for you."
    },
    {
      name: "ATV Outdoor Activities",
      img:
        "url(https://rentcabosanlucas.com/wp-content/uploads/2022/04/ATVs-in-Cabo-San-Lucas.png)",
      text:
        "Have the time of your life with some outdoor adventure on ATV’s or perhaps a camel ride, both taking you to see some stunning ocean views. "
    },
  ];

// required objects from html

const sliderCol1 = document.querySelector('.image-custom-col-1');
const sliderCol2 = document.querySelector('.image-custom-col-2');
const sliderCol3 = document.querySelector('.image-custom-col-3');

const prev = document.querySelector('.slider-custom-image-prev');
const next = document.querySelector('.slider-custom-image-next');

const sliderHeader = document.querySelector('.custom-slider-header');
const sliderParagraph = document.querySelector('.custom-slider-paragraph');


let slideCount = 0;
let slideCountCol1 = slideCount - 1;
let slideCountCol3 = slideCount + 1;

// load initial item

window.addEventListener('DOMContentLoaded', loadInitial);

function loadInitial(){
   sliderCol2.style.backgroundImage = activities[0].img;
   sliderHeader.textContent = activities[0].name;
   sliderParagraph.textContent = activities[0].text;
   sliderCol1.style.backgroundImage = activities[3].img;
   sliderCol3.style.backgroundImage = activities[1].img;
}


function showItem(){
    const item = activities[slideCount];
    sliderCol2.style.backgroundImage = item.img;
    sliderHeader.textContent = item.name;
    sliderParagraph.textContent = item.text;
}

function showCol1Item(){
    const itemCol1 = activities[slideCountCol1];
    sliderCol1.style.backgroundImage = itemCol1.img;
}

function showCol3Item(){
    const itemCol3 = activities[slideCountCol3];
    sliderCol3.style.backgroundImage = itemCol3.img;
}

prev.addEventListener('click', decreaceSlideCount);
prev.addEventListener('click', decreaceCol1);
prev.addEventListener('click', decreaseCol3);

// middle column

function decreaceSlideCount(){
    slideCount --;
    if (slideCount < 0) {
        slideCount = activities.length - 1;
      }
    showItem(slideCount);

};
// col 1
function decreaceCol1(){
    slideCountCol1--;
    if (slideCountCol1 < 0 && slideCountCol1 !==-1){
        slideCountCol1 = activities.length - 2;
    }
    else if (slideCountCol1 === -1){
        slideCountCol1 = activities.length - 1;
    }
    showCol1Item(slideCountCol1);
}

// col 3

function decreaseCol3(){
    slideCountCol3--;
    if (slideCountCol3 < 0 && slideCountCol3 !==-1){
        slideCountCol3 = activities.length -2;
    }
    else if (slideCountCol3 === -1){
        slideCountCol3 = activities.length - 1;
    }
    showCol3Item(slideCountCol3);
}



//next
next.addEventListener('click', increaseSlideCount);
next.addEventListener('click', increasecol1);
next.addEventListener('click', increasecol3);

function increaseSlideCount(){
    slideCount++;
    if (slideCount > activities.length - 1) {
        slideCount = 0;
      }
    showItem(slideCount);  
};

//col1
function increasecol1(){
    slideCountCol1++;
    if (slideCountCol1 > activities.length - 1 && slideCountCol1 !==4){
        slideCountCol1 = 0;
    }
    else if (slideCountCol1 === 4){
        slideCountCol1 = 0;
    }
    showCol1Item(slideCountCol1);
}

// col 3

function increasecol3(){
    slideCountCol3++;
    if (slideCountCol3 > activities.length - 1 && slideCountCol3 !==4){
        slideCountCol3 = 0;
    }
    else if (slideCountCol3 === 4){
        slideCountCol3 = 0;
    }
    showCol3Item(slideCountCol3);
}


// co
