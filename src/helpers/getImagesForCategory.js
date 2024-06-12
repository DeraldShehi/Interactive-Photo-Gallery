// import categories from "../constants/categories";

// // Dummy implementation of getImagesForCategory.js
// const getImagesForCategory = async (category, callBack) => {
//   const dummyPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       switch (category) {
//         case categories[0]:
//           resolve([
//             {
//               id: 1,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 2,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 3,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 4,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 5,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//           ]);
//           break;
//         case categories[1]:
//           resolve([
//             {
//               id: 6,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 7,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 8,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 9,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 10,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//           ]);
//           break;
//         case categories[2]:
//           resolve([
//             {
//               id: 11,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 12,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 13,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 14,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 15,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//           ]);
//           break;
//         case categories[3]:
//           resolve([
//             {
//               id: 16,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 17,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 18,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 19,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 20,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//           ]);
//           break;
//         case categories[4]:
//           resolve([
//             {
//               id: 21,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 22,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 23,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 24,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//             {
//               id: 25,
//               src: "https://images.unsplash.com/photo-1557683316-973673baf926",
//             },
//           ]);
//           break;
//         default:
//           resolve([]);
//           break;
//       }
//     }, 3000);
//   });

//   try {
//     const responseData = await dummyPromise;

//     callBack(responseData);
//   } catch (error) {
//     console.error("Error fetching images for category:", error);
//   }
// };

// export default getImagesForCategory;

// Real implementation of getImagesForCategory.js
const getImagesForCategory = async (category, callBack, perPage = 10) => {
//   // If you abuse this key it will be disabled and you will be sad.
// //   // Please use responsibly.
  const apiKey = "W9XXs5L9lJcouvAfGD1uyGaLPqPxABsLVxRTKuehpLsmbUXzUvzpn3mu";
  const apiUrl = "https://api.pexels.com/v1/search";
  const offset = Math.floor((Math.random() * 8000) / perPage) * perPage;

  try {
    const response = await fetch(
      `${apiUrl}?query=${category}&per_page=${perPage}&page=${offset}`,
      { headers: { Authorization: apiKey } }
    );

    const data = await response.json();

    const formattedData = data.photos.map((photo) => ({
      id: photo.id,
      src: photo.src.original,
    }));

    callBack(formattedData);
  } catch (error) {
    console.error("Error fetching images for category:", error);
  }
};

export default getImagesForCategory;
