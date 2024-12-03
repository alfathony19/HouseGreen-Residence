const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

// Logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 0.5,
});

// btn
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".fasilitas", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// tentang kami
gsap.from(".tentang", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// kontak
gsap.from(".kontak", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".title_tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".detail_tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".detail_blog", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.pageYOffset >= 30) {
    nav.classList.add("shadow-header");
  } else {
    nav.classList.remove("shadow-header");
  }
});

// LOAD ALL TYPE RUMAH
const jsonData = {
  house: [
    {
      type: "A",
      image_house: "./img/house-1.png",
      name: "Casa Verde",
      building_size: 120,
      surface_area: 200,
      bathroom: 2,
      bedroom: 3,
      description:
        "Casa Verde, a house with a modern design and enough land area for family life. With two bathrooms and three bedrooms, this house provides comfort and warmth for your family.",
      price: "700Jt-an",
      carport: "1",
      plan_house: "./img/denah_rumah.jpg",
    },
    {
      type: "B",
      image_house: "./img/house-2.png",
      name: "Sky Villa",
      building_size: 180,
      surface_area: 250,
      bathroom: 3,
      bedroom: 4,
      description:
        "Sky Villa, a luxury home with stunning views. With three bathrooms and four bedrooms, this is the perfect place to live in style and relax above the blue sky.",
      price: "800Jt-an",
      carport: "1",
      plan_house: "./img/denah_rumah.jpg",
    },
    {
      type: "C",
      image_house: "./img/house-3.png",
      name: "Lakeview Mansion",
      building_size: 220,
      surface_area: 300,
      bathroom: 4,
      bedroom: 5,
      description:
        "Lakeview Mansion, a magnificent home with stunning lake views. With four bathrooms and five bedrooms, this home brings elegance and comfort to a prestigious lifestyle.",
      price: "900Jt-an",
      carport: "1",
      plan_house: "./img/denah_rumah.jpg",
    },
    {
      type: "D",
      image_house: "./img/house-4.png",
      name: "Garden Retreat",
      building_size: 150,
      surface_area: 180,
      bathroom: 2,
      bedroom: 3,
      description:
        "Garden Retreat, an elegant home with beautiful gardens. Two bathrooms and three bedrooms provide the perfect balance between natural beauty and modern home comforts.",
      price: "950Jt-an",
      carport: "1",
      plan_house: "./img/denah_rumah.jpg",
    },
  ],
};

// Function to create a house card dynamically
function createHouseCard(house, index, isMobileView) {
  const isOdd = index % 2 === 1;

  const explanation = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.name}</h2>
        <p>${house.description}</p>
        <div class="row">
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center p-3 house_type_item">
              <i class="bi bi-house-door-fill"></i>
              <h3>${house.building_size}m²</h3>
              <p>Building Size</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center p-3 house_type_item">
              <i class="bi bi-aspect-ratio-fill"></i>
              <h3>${house.surface_area}m²</h3>
              <p>Surface Area</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center p-3 house_type_item">
              <i class="fa fa-shower"></i>
              <h3>${house.bathroom}</h3>
              <p>Bathroom</p>
            </div>
          </div>
          <div class="col-md-5 mb-3">
            <div class="card justify-content-center align-self-center p-3 house_type_item">
              <i class="fa fa-bed"></i>
              <h3>${house.bedroom}</h3>
              <p>Bedroom</p>
            </div>
          </div>
        </div>
        <a href="./detail_house.html?type_house=${house.type}" class="btn_home view_more_btn mt-1" style="text-decoration:none;">
            Learn More
        </a>
      </div>
    `;

  const imageHouse = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.image_house}" alt="${house.name}" class="img-fluid" />
        </div>
    `;

  // Alternate layout for desktop and mobile views
  return isMobileView
    ? `
          <div class="row d-flex flex-column">
              <div class="col-12 text-center">
                  <img src="${house.image_house}" alt="${house.name}" class="img-fluid mb-3" />
              </div>
              <div class="col-12">
                  ${explanation}
              </div>
          </div>
        `
    : isOdd
    ? imageHouse + explanation
    : explanation + imageHouse;
}

// Function to create a "recommended house" card
function createRecommendedHouseCard(house) {
  return `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.image_house}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom" />
            <br><br>
            <a href="./detail_house.html?type_house=${house.type}">
              <h3 class="text-center">House ${house.name}</h3>
            </a>
        </div>
    `;
}

// Function to filter house by type
function filterHouseByType(type) {
  return (
    jsonData.house.find(
      (house) => house.type.toUpperCase() === type.toUpperCase()
    ) || null
  );
}

// Load data for main house view
const houseContainer = document.getElementById("houseContainer");
if (houseContainer) {
  jsonData.house.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, false);
    houseContainer.innerHTML += houseCard;
  });
}

// Load data for mobile view
const houseContainerMobile = document.getElementById("houseContainerMobile");
if (houseContainerMobile) {
  jsonData.house.forEach((house, index) => {
    const houseCard = createHouseCard(house, index, true);
    houseContainerMobile.innerHTML += houseCard;
  });
}

// Load recommendations (other types)
const lookAnyType = document.getElementById("lookAnyType");
if (lookAnyType) {
  jsonData.house.forEach((house) => {
    const recommendedCard = createRecommendedHouseCard(house);
    lookAnyType.innerHTML += recommendedCard;
  });
}

// Load details based on URL parameter
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const typeHouseValue = searchParams.get("type_house");

if (typeHouseValue) {
  const filteredHouse = filterHouseByType(typeHouseValue);
  if (filteredHouse) {
    document.getElementById(
      "title-name-house"
    ).innerText = `House ${filteredHouse.name}`;
    document.getElementById("house-image").src = filteredHouse.image_house;
    document.getElementById("name-house").innerText = filteredHouse.name;
    document.getElementById("description-house").innerText =
      filteredHouse.description;
    document.getElementById("price-house").innerText = filteredHouse.price;
    document.getElementById(
      "building-size"
    ).innerText = `${filteredHouse.building_size}m²`;
    document.getElementById(
      "surface-area"
    ).innerText = `${filteredHouse.surface_area}m²`;
    document.getElementById("bathroom-house").innerText =
      filteredHouse.bathroom;
    document.getElementById("bedroom-house").innerText = filteredHouse.bedroom;
    document.getElementById("carport-house").innerText = filteredHouse.carport;
    document.getElementById("plan-house").src = filteredHouse.plan_house;
  } else {
    console.error("House not found");
  }
}

// FOR BLOG LOAD DATA --------------------------------

const blogData = [
  {
    id: 1,
    title: "A Perfect Haven for Families",
    date: "02 December 2024, 23:52",
    description:
      "Discover the ultimate destination for families at HouseGreen Residence. A place where comfort meets connection, offering serene spaces to create lasting memories with your loved ones...",
    detail_blog: "./content/blog-1.html",
    image_blog: "./img/tempat-keluarga.jpg",
    author_name: "Felicia Foster - Co-Founder / CTO",
    image_author: "./img/author/author1.jpg",
    updatedAt: "2024-12-02",
    isUpdated: false,
  },
  {
    id: 2,
    title: "Delightful Dining Experiences at HouseGreen Residence",
    date: "02 December 2024, 23:58 AM",
    description:
      "Indulge in a culinary journey at our dining spaces, where every meal is a celebration. HouseGreen Residence offers a variety of dining options to suit every taste, from cozy family dinners to vibrant gatherings with friends. Savor freshly prepared dishes made from the finest ingredients, all served in a warm and inviting atmosphere...",
    detail_blog: "./content/blog-2.html",
    image_blog: "./img/tempat-makan.jpg",
    author_name: "Lindsay Walton - Room Developer",
    image_author: "./img/author/author2.jpg",
    updatedAt: "2024-12-02",
    isUpdated: false,
  },
  {
    id: 3,
    title: "Modern and Pristine Restrooms",
    date: "03 December 2024, 16:13",
    description:
      "Experience comfort and cleanliness in our thoughtfully designed restrooms. At HouseGreen Residence, we prioritize hygiene and convenience, ensuring that our toilets are well-maintained and equipped with modern amenities...",
    detail_blog: "./content/blog-3.html",
    image_blog: "./img/toilet-1.jpg",
    author_name: "Herman Ahmad - Contruction Developer",
    image_author: "./img/author/author4.jpg",
    updatedAt: "2024-12-02",
    isUpdated: true,
  },
  {
    id: 4,
    title: "Serene Garden Retreat",
    date: "03 December 2024, 16:25",
    description:
      "Step into tranquility with our beautifully landscaped garden, designed to offer a peaceful retreat for relaxation and reflection. Surrounded by lush greenery and vibrant flowers, the garden at HouseGreen Residence is a haven for nature lovers...",
    detail_blog: "./content/blog-4.html",
    image_blog: "./img/taman-1.jpg",
    author_name: "Thomas Shimmel - Garden Developer",
    image_author: "./img/author/author5.jpeg",
    updatedAt: "2024-12-02",
    isUpdated: true,
  },
  {
    id: 5,
    title: "Children's Bedroom",
    date: "03 December 2024, 16:38",
    description:
      "Our children's room is a vibrant, imaginative space designed for fun and learning. With bright colors, playful decor, and plenty of room to explore, this room is the perfect environment for your little ones to grow, play, and dream...",
    detail_blog: "./content/blog-5.html",
    image_blog: "./img/single-bed.jpg",
    author_name: "Merry Walton - Room Decoration",
    image_author: "./img/author/author3.jpg",
    updatedAt: "2024-12-02",
    isUpdated: true,
  },
  {
    id: 6,
    title: "Modern Kitchen",
    date: "03 December 2024, 16:41",
    description:
      "Our modern kitchen is designed to be both functional and stylish, with sleek countertops, state-of-the-art appliances, and ample storage space. It is a perfect blend of comfort and convenience, where cooking becomes a joy and every meal is an experience...",
    detail_blog: "./content/blog-4.html",
    image_blog: "./img/dapur.jpg",
    author_name: "Safira Angel - Designer",
    image_author: "./img/author/author6.jpg",
    updatedAt: "2024-12-02",
    isUpdated: true,
  },
];

function generateBlogHTML(blogPost) {
  return `
        <div class="card mb-4">
            <div class="row">
                <div class="col-md-4">
                    <img src="${blogPost.image_blog}" width="100%" height="100%" alt="${blogPost.title}" />
                </div>
                <div class="col-md-8 p-4">
                    <div>
                        <h5>${blogPost.title}</h5>
                        <div class="d-flex align-items-center mt-2">
                            <div class="author-info me-3 d-flex align-items-center">
                                <img src="${blogPost.image_author}" class="rounded-circle me-2" width="40" height="40" alt="${blogPost.author_name}" />
                                <span class="fs-6">${blogPost.author_name}</span>
                            </div>
                            <div class="blog-date d-flex align-items-center text-muted">
                                <i class="fa fa-calendar me-2"></i>
                                <small>${blogPost.date}</small>
                            </div>
                        </div>
                        <p class="description-blog mt-3">${blogPost.description}</p>
                        <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
                            <i class="fa fa-book me-1"></i>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateLatestBlogHTML(blogPost) {
  return `
        <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-item d-flex align-items-center p-2">
            <div class="latest-blog-image-wrapper me-2">
                <img src="${blogPost.image_author}" class="rounded-circle" alt="${blogPost.author_name}" />
            </div>
            <div class="latest-blog-text">
                <p class="mb-1 fw-bold">${blogPost.title}</p>
                <div class="blog-date d-flex align-items-center text-muted">
                    <i class="fa fa-calendar me-2"></i>
                    <small>${blogPost.date}</small>
                </div>
            </div>
            <hr>
        </a>
    `;
}

// Late Post
function renderBlogPosts(filteredBlogData, isFiltered) {
  const blogContainer = document.getElementById("blogContainer");
  const latestBlogContent = document.getElementById("latestBlogContent");

  // Render latest blog posts
  if (latestBlogContent != null) {
    // Clear previous content
    latestBlogContent.innerHTML = "";

    // Sort by updatedAt or date (newest to oldest)
    const sortedLatestPosts = blogData
      .sort(
        (a, b) =>
          new Date(b.updatedAt || b.date) - new Date(a.updatedAt || a.date)
      ) // Newest first
      .slice(2, 10); // Take top 10 posts

    sortedLatestPosts.forEach((blogPost) => {
      latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost);
    });
  }

  if (blogContainer == null) {
    return; // Skip if container is missing
  }

  // Clear previous content
  blogContainer.innerHTML = "";

  // Render blog posts in the main box content
  const sortedMainContentPosts = (
    isFiltered ? filteredBlogData : blogData
  ).sort(
    (a, b) => new Date(b.updatedAt || b.date) - new Date(a.updatedAt || a.date)
  ); // Newest first

  if (isFiltered && sortedMainContentPosts.length === 0) {
    const emptyStateDiv = document.createElement("div");
    emptyStateDiv.textContent = "No blog posts available";
    blogContainer.appendChild(emptyStateDiv);
  } else {
    sortedMainContentPosts.forEach((blogPost) => {
      blogContainer.innerHTML += generateBlogHTML(blogPost);
    });
  }
}

// search blog
function searchBlog(input) {
  const searchTerm = input.value.toLowerCase();
  const filteredBlogData = [];
  blogData.forEach((blogPost) => {
    if (blogPost.title.toLowerCase().includes(searchTerm)) {
      filteredBlogData.push(blogPost);
    }
  });
  console.log("blogData", blogData);
  console.log("searchTerm", searchTerm);
  console.log("filteredBlogData", filteredBlogData);

  if (searchTerm != null && searchTerm != "" && searchTerm != undefined) {
    renderBlogPosts(filteredBlogData, true);
  } else {
    renderBlogPosts([], false);
  }
}

// render blog posts when page loads
window.onload = renderBlogPosts([], false);

// Get value of query parameter 'id'
var idBlogValue = searchParams.get("id");

if (idBlogValue) {
  const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
  if (filteredBlogData) {
    // Update elemen gambar, tanggal, dan judul
    document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
    document.getElementById("tgl-blog").innerText = filteredBlogData.date;
    document.getElementById("title-blog").innerText = filteredBlogData.title;

    // Tambahkan elemen gambar dan nama penulis
    const authorDetailContainer = document.getElementById("author-detail");
    if (authorDetailContainer) {
      // Masukkan HTML author
      authorDetailContainer.innerHTML = `
                <img src="${filteredBlogData.image_author}" class="rounded-circle me-2" width="40" height="40" alt="${filteredBlogData.author_name}" />
                <span class="fs-6 text-muted">${filteredBlogData.author_name}</span>
            `;
    }

    // Load detail blog
    loadDetailBlog(filteredBlogData.detail_blog);
  } else {
    console.error("Error: Blog data not found for ID: " + idBlogValue);
  }
} else {
  console.warn("No blog ID provided in query parameters.");
}

function getBlogById(blogId) {
  return blogData.filter((blog) => blog.id === blogId)[0]; // assuming that id is unique
}

// Function to load detail blog data
function loadDetailBlog(detailBlogURL) {
  const cardDetailBlog = document.getElementById("cardDetailBlog");
  if (cardDetailBlog == null || cardDetailBlog == undefined) {
    console.log("No element has id cardDetailBlog");
    return;
  }

  cardDetailBlog.src = detailBlogURL;
}
