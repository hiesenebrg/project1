let cardContainerEle = document.getElementById("card-container");
cardContainerEle.className = "grid grid-cols-5 gap-4";

const searchFunc = async () => {
  let inputEle = document.getElementById("search");

  let keyword = inputEle.value;
  console.log("keyword ", keyword);
  if (keyword.length > 3) {
    cardContainerEle.innerHTML = "";
    const options = {
      method: "GET",
      url: "https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm",
      params: {
        searchTerm: keyword,
        currency: "USD",
        country: "US",
        store: "US",
        languageShort: "en",
        sizeSchema: "US",
        limit: "50",
        offset: "0",
        sort: "recommended",
      },
      headers: {
        "x-rapidapi-key": "your-api-key",
        "x-rapidapi-host": "asos10.p.rapidapi.com",
      },
    };

    try {
      //   const response = await axios.request(options);
      //   const data = response.data;
      //   console.log("data", data);

      //   // Clear existing products
      //   cardContainerEle.innerHTML = "";
      //   let dummyData = [];
      let ProductList = [
        {
          id: 205344771,
          name: "Stradivarius STR straight leg jeans in medium wash",
          price: {
            current: { value: 45.9, text: "$45.90" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Medium wash",
          colourWayId: 205344772,
          brandName: "Stradivarius",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 132760138,
          productType: "Product",
          url: "stradivarius/stradivarius-str-straight-leg-jeans-in-medium-wash/prd/205344771#colourWayId-205344772",
          imageUrl:
            "images.asos-media.com/products/stradivarius-str-straight-leg-jeans-in-medium-wash/205344771-1-mediumwash",
          additionalImageUrls: [
            "images.asos-media.com/products/stradivarius-str-straight-leg-jeans-in-medium-wash/205344771-2",
            "images.asos-media.com/products/stradivarius-str-straight-leg-jeans-in-medium-wash/205344771-3",
            "images.asos-media.com/products/stradivarius-str-straight-leg-jeans-in-medium-wash/205344771-4",
            "images.asos-media.com/products/stradivarius-str-straight-leg-jeans-in-medium-wash/205344771-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/205344771-catwalk",
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 206684813,
          name: "Pull&Bear wide leg jeans in brown leopard print",
          price: {
            current: { value: 49.9, text: "$49.90" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "BROWN",
          colourWayId: 206684815,
          brandName: "Pull&Bear",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 135951893,
          productType: "Product",
          url: "pullbear/pullbear-wide-leg-jeans-in-brown-leopard-print/prd/206684813#colourWayId-206684815",
          imageUrl:
            "images.asos-media.com/products/pullbear-wide-leg-jeans-in-brown-leopard-print/206684813-1-brown",
          additionalImageUrls: [
            "images.asos-media.com/products/pullbear-wide-leg-jeans-in-brown-leopard-print/206684813-2",
            "images.asos-media.com/products/pullbear-wide-leg-jeans-in-brown-leopard-print/206684813-3",
            "images.asos-media.com/products/pullbear-wide-leg-jeans-in-brown-leopard-print/206684813-4",
            "images.asos-media.com/products/pullbear-wide-leg-jeans-in-brown-leopard-print/206684813-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/206684813-catwalk",
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 206447287,
          name: "Pull&Bear high rise straight leg comfort jean in medium blue",
          price: {
            current: { value: 39.5, text: "$39.50" },
            previous: { value: 45.9, text: "$45.90" },
            rrp: { value: null, text: "" },
            isMarkedDown: true,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "MID BLUE",
          colourWayId: 206447288,
          brandName: "Pull&Bear",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 135226562,
          productType: "Product",
          url: "pullbear/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/prd/206447287#colourWayId-206447288",
          imageUrl:
            "images.asos-media.com/products/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/206447287-1-midblue",
          additionalImageUrls: [
            "images.asos-media.com/products/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/206447287-2",
            "images.asos-media.com/products/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/206447287-3",
            "images.asos-media.com/products/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/206447287-4",
            "images.asos-media.com/products/pullbear-high-rise-straight-leg-comfort-jean-in-medium-blue/206447287-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/206447287-catwalk",
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 205572013,
          name: "ASOS DESIGN mid rise baggy boyfriend jeans in mid wash",
          price: {
            current: { value: 52.99, text: "$52.99" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "MID BLUE",
          colourWayId: 205572014,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 133324486,
          productType: "Product",
          url: "asos-design/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/prd/205572013#colourWayId-205572014",
          imageUrl:
            "images.asos-media.com/products/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/205572013-1-midblue",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/205572013-2",
            "images.asos-media.com/products/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/205572013-3",
            "images.asos-media.com/products/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/205572013-4",
            "images.asos-media.com/products/asos-design-mid-rise-baggy-boyfriend-jeans-in-mid-wash/205572013-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/205572013-catwalk",
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 207286773,
          name: "Pull&Bear comfort mom jeans in blue",
          price: {
            current: { value: 39.9, text: "$39.90" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "BLUE",
          colourWayId: 207286774,
          brandName: "Pull&Bear",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 138743351,
          productType: "Product",
          url: "pullbear/pullbear-comfort-mom-jeans-in-blue/prd/207286773#colourWayId-207286774",
          imageUrl:
            "images.asos-media.com/products/pullbear-comfort-mom-jeans-in-blue/207286773-1-blue",
          additionalImageUrls: [
            "images.asos-media.com/products/pullbear-comfort-mom-jeans-in-blue/207286773-2",
            "images.asos-media.com/products/pullbear-comfort-mom-jeans-in-blue/207286773-3",
            "images.asos-media.com/products/pullbear-comfort-mom-jeans-in-blue/207286773-4",
            "images.asos-media.com/products/pullbear-comfort-mom-jeans-in-blue/207286773-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/207286773-catwalk",
          showVideo: false,
          isSellingFast: false,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 207282196,
          name: "ASOS DESIGN jean with frill hem in indigo",
          price: {
            current: { value: 49.99, text: "$49.99" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Blue",
          colourWayId: 207282197,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 138727993,
          productType: "Product",
          url: "asos-design/asos-design-jean-with-frill-hem-in-indigo/prd/207282196#colourWayId-207282197",
          imageUrl:
            "images.asos-media.com/products/asos-design-jean-with-frill-hem-in-indigo/207282196-1-blue",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-jean-with-frill-hem-in-indigo/207282196-2",
            "images.asos-media.com/products/asos-design-jean-with-frill-hem-in-indigo/207282196-3",
            "images.asos-media.com/products/asos-design-jean-with-frill-hem-in-indigo/207282196-4",
            "images.asos-media.com/products/asos-design-jean-with-frill-hem-in-indigo/207282196-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/207282196-catwalk",
          showVideo: false,
          isSellingFast: false,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 207282155,
          name: "ASOS DESIGN puddle jeans in indigo",
          price: {
            current: { value: 47.99, text: "$47.99" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Blue",
          colourWayId: 207282156,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 138727990,
          productType: "Product",
          url: "asos-design/asos-design-puddle-jeans-in-indigo/prd/207282155#colourWayId-207282156",
          imageUrl:
            "images.asos-media.com/products/asos-design-puddle-jeans-in-indigo/207282155-1-blue",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-puddle-jeans-in-indigo/207282155-2",
            "images.asos-media.com/products/asos-design-puddle-jeans-in-indigo/207282155-3",
            "images.asos-media.com/products/asos-design-puddle-jeans-in-indigo/207282155-4",
            "images.asos-media.com/products/asos-design-puddle-jeans-in-indigo/207282155-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/207282155-catwalk",
          showVideo: false,
          isSellingFast: false,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 207167890,
          name: "Bershka high rise wide leg jeans in black",
          price: {
            current: { value: 45.9, text: "$45.90" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Black",
          colourWayId: 207167891,
          brandName: "Bershka",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 138038043,
          productType: "Product",
          url: "bershka/bershka-high-rise-wide-leg-jeans-in-black/prd/207167890#colourWayId-207167891",
          imageUrl:
            "images.asos-media.com/products/bershka-high-rise-wide-leg-jeans-in-black/207167890-1-black",
          additionalImageUrls: [
            "images.asos-media.com/products/bershka-high-rise-wide-leg-jeans-in-black/207167890-2",
            "images.asos-media.com/products/bershka-high-rise-wide-leg-jeans-in-black/207167890-3",
            "images.asos-media.com/products/bershka-high-rise-wide-leg-jeans-in-black/207167890-4",
            "images.asos-media.com/products/bershka-high-rise-wide-leg-jeans-in-black/207167890-5",
          ],
          videoUrl:
            "www.asos-video.com/video/upload/q_auto/t_legacy_product_video/207167890-catwalk",
          showVideo: false,
          isSellingFast: false,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 205632660,
          name: "ASOS DESIGN stretch flared jeans in washed black",
          price: {
            current: { value: 32.99, text: "$32.99" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Washed Black",
          colourWayId: 205632661,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 133443908,
          productType: "Product",
          url: "asos-design/asos-design-stretch-flared-jeans-in-washed-black/prd/205632660#colourWayId-205632661",
          imageUrl:
            "images.asos-media.com/products/asos-design-stretch-flared-jeans-in-washed-black/205632660-1-washedblack",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-stretch-flared-jeans-in-washed-black/205632660-2",
            "images.asos-media.com/products/asos-design-stretch-flared-jeans-in-washed-black/205632660-3",
            "images.asos-media.com/products/asos-design-stretch-flared-jeans-in-washed-black/205632660-4",
            "images.asos-media.com/products/asos-design-stretch-flared-jeans-in-washed-black/205632660-5",
          ],
          videoUrl: null,
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [
            {
              products: [
                { productId: 205632604 },
                { productId: 205632660 },
                { productId: 205666935 },
                { productId: 205666781 },
              ],
              type: "SupplierColour",
            },
          ],
          advertisement: null,
        },
        {
          id: 206447471,
          name: "ASOS DESIGN baggy jeans in washed black",
          price: {
            current: { value: 39.99, text: "$39.99" },
            previous: { value: null, text: "" },
            rrp: { value: null, text: "" },
            isMarkedDown: false,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "washed black",
          colourWayId: 206447483,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 135226975,
          productType: "Product",
          url: "asos-design/asos-design-baggy-jeans-in-washed-black/prd/206447471#colourWayId-206447483",
          imageUrl:
            "images.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-1-washedblack",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-2",
            "images.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-3",
            "images.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-4",
            "images.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-5",
          ],
          videoUrl:
            "video.asos-media.com/products/asos-design-baggy-jeans-in-washed-black/206447471-catwalk-AVS",
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [],
          advertisement: null,
        },
        {
          id: 205666935,
          name: "ASOS DESIGN stretch flare jeans in dark wash blue",
          price: {
            current: { value: 26.5, text: "$26.50" },
            previous: { value: 32.99, text: "$32.99" },
            rrp: { value: null, text: "" },
            isMarkedDown: true,
            isOutletPrice: false,
            currency: "USD",
          },
          colour: "Dark Wash Blue",
          colourWayId: 205666936,
          brandName: "ASOS DESIGN",
          hasVariantColours: false,
          hasMultiplePrices: false,
          groupId: null,
          productCode: 133442448,
          productType: "Product",
          url: "asos-design/asos-design-stretch-flare-jeans-in-dark-wash-blue/prd/205666935#colourWayId-205666936",
          imageUrl:
            "images.asos-media.com/products/asos-design-stretch-flare-jeans-in-dark-wash-blue/205666935-1-darkwashblue",
          additionalImageUrls: [
            "images.asos-media.com/products/asos-design-stretch-flare-jeans-in-dark-wash-blue/205666935-2",
            "images.asos-media.com/products/asos-design-stretch-flare-jeans-in-dark-wash-blue/205666935-3",
            "images.asos-media.com/products/asos-design-stretch-flare-jeans-in-dark-wash-blue/205666935-4",
            "images.asos-media.com/products/asos-design-stretch-flare-jeans-in-dark-wash-blue/205666935-5",
          ],
          videoUrl: null,
          showVideo: false,
          isSellingFast: true,
          isRestockingSoon: false,
          isPromotion: false,
          sponsoredCampaignId: null,
          facetGroupings: [
            {
              products: [
                { productId: 205632604 },
                { productId: 205632660 },
                { productId: 205666935 },
                { productId: 205666781 },
              ],
              type: "SupplierColour",
            },
          ],
          advertisement: null,
        },
      ];

      ProductList.map((item, index) => {
        // index <= 10 && dummyData.push(item);
        cardContainerEle.appendChild(createProductCard(item));
      });
      //   console.log("dummyData", JSON.stringify(dummyData));
    } catch (error) {
      console.log("error", error);
    }
  } else {
    cardContainerEle.innerHTML = ""; // Clear products if search length is less than 3
  }
};

// Attach input event listener for search input
document.getElementById("search").addEventListener("input", searchFunc);

const createProductCard = (item) => {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const titles = document.createElement("p");
  const price = document.createElement("span");
  const detailContainer = document.createElement("div");

  imgContainer.className =
    "flex flex-col border border-1 border-black p-[8px] justify-center items-start  cols-1 p-2 rounded-md gap-4 mb-5 hover:scale-105 transition ease-out delay-75";
  img.className = "h-[80%] w-full rounded-md";
  titles.className = " text-l";
  price.className = "flex flex-between";
  detailContainer.className = "flex justify-between items-center";
  let imageURL = `https://${item.imageUrl}`;
  img.src = imageURL;
  titles.textContent = item.name;
  price.innerText = "Rs. " + Math.ceil(item.price.current.value * 84, 2);

  imgContainer.appendChild(img);
  imgContainer.appendChild(titles);
  detailContainer.appendChild(price);
  imgContainer.appendChild(detailContainer);
  return imgContainer;
};
