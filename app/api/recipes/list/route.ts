import { TastyApiRequest } from '@/utils/api-helpers/TastyApiRequest';
import { NextResponse } from 'next/server';


export const GET = async (request: Request) => {
  try {
    const tastyApiRequest = new TastyApiRequest()
    // const response = await tastyApiRequest.getRecipesList()

    // const results = response.data.results
    // const recipes = results.map(({ name, description, thumbnail_url, video_url }) => ({
    //   name,
    //   description,
    //   thumbnailUrl: thumbnail_url,
    //   videoUrl: video_url
    // }))
    const recipes = [
      {
        name: 'Low-Carb Avocado Chicken Salad',
        description: "This chicken salad is a lunchtime delight! Packed with creamy avocado, tender chicken, and crunchy veggies, it's a healthy and satisfying meal that won't weigh you down. Tossed in a tangy yogurt dressing with a hint of spice, it's a flavor explosion that's perfect for a light meal.",
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/45b4efeb5d2c4d29970344ae165615ab/FixedFBFinal.jpg',
        videoUrl: 'https://vid.tasty.co/output/121934/hls24_1546897597.m3u8'
      },
      {
        name: 'Browned “Butter” Chocolate Chip Cookies',
        description: 'Don’t worry if you’re skipping the eggs and butter–these vegan chocolate chip cookies are out of this world! Make them for friends and family, or just for yourself. You won’t be sorry you did!',
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/249914.jpg',
        videoUrl: 'https://vid.tasty.co/output/156307/hls24_1577151257.m3u8'
      },
      {
        name: 'Cinnamon Roll Cheesecake',
        description: "Get ready for a dessert extravaganza with this cinnamon roll cheesecake! Creamy cheesecake filling is baked atop a cinnamon roll crust with a swirl of cinnamon sugar and a final icing glaze for an extra-sweet touch. With all the flavors of a classic cinnamon roll in a decadent cheesecake form, it's a showstopper that'll have everyone asking for seconds!",
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/858de8a1025d44a69641254e25bde14a.png',
        videoUrl: null
      },
      {
        name: 'Tomato And Anchovy Pasta',
        description: "Savor the bold flavors of this Tomato and Anchovy Pasta, a perfect weeknight meal that's both simple and satisfying. With a zesty tomato sauce and umami-packed anchovies, this dish will have your taste buds dancing in no time!",
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216182.jpg',
        videoUrl: 'https://vid.tasty.co/output/132757/hls24_1557860941.m3u8'
      },
      {
        name: 'Blueberry Cream Muffins',
        description: '',
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/4e9524578f544c888af761e10630593b.jpeg',
        videoUrl: null
      },
      {
        name: 'Savory Lasagna',
        description: "Dive into layers of savory goodness with this classic comfort food! Tender pasta sheets are layered with a hearty meat sauce, rich cheese, and aromatic herbs and spices, all baked to perfection until bubbly and golden. It's a dish that's perfect for sharing with family and friends, and guaranteed to satisfy your cravings!",
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/8a0ce26532fa4a47bd082e815ca49ad6.jpeg',
        videoUrl: null
      },
      {
        name: 'Nut-Free Macarons',
        description: "These macarons are a sweet and delicate treat that are perfect for anyone with a nut allergy. Made with a crispy shell and a creamy filling, they're a perfect afternoon snack or dessert.",
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/8230d427f6b648e9ae0cfbcbea9d6877.jpeg',
        videoUrl: null
      },
      {
        name: 'Creamy Cajun Pasta',
        description: 'Say hello to a taste of the bayou with this creamy Cajun pasta! Savory sausage and a bevy of vegetables get a spicy kick with a Cajun-inspired seasoning blend, all tossed in a luscious creamy sauce. Best of all, it all comes together in just one pot for easy prepa and clean-up!',
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/6d9b54963ad9442aa9320076a7bbf0bf.jpeg',
        videoUrl: null
      },
      {
        name: 'How To Make A Fresh Seacuterie Board',
        description: 'This seacuterie board is sure to make a splash at your next dinner party. From shrimp and seaweed salad to octopus and oranges, have fun with your favorite seafood and side bites. Then present them on a sheet pan for easy serving. Plus, learn how to shuck your own oysters.',
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/258751.jpg',
        videoUrl: 'https://vid.tasty.co/output/162704/hls24_1584489875.m3u8'
      },
      {
        name: '2-ingredient Pasta',
        description: 'This 2-ingredient pasta is a quick and easy dinner option, with pasta and your favorite jarred sauce.',
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/97761.jpg',
        videoUrl: 'https://vid.tasty.co/output/51134/low_1504636473.m3u8'
      },
      {
        name: '100-Layer Lasagna',
        description: "You won't believe your eyes when you see this 100-layer lasagna! It's a tower of deliciousness filled with layers of pasta, meat sauce, ricotta cheese, and mozzarella cheese. It's like a work of art that you can eat!",
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/150087.jpg',
        videoUrl: 'https://vid.tasty.co/output/89658/hls24_1523902408.m3u8'
      },
      {
        name: 'Organic Quinoa Rice Cakes With Mediterranean Chicken',
        description: "Get ready for a protein-packed delight with this Mediterranean-inspired dish! Crispy quinoa rice cakes topped with tender and juicy Mediterranean-spiced chicken, tomatoes, and briny kalamata olives. It's a wholesome and satisfying meal that's perfect for a healthy and delicious dinner.",
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc1f22377e8c4b26b070a6ba4f2a3079/Mediterranean_FB.jpg',
        videoUrl: 'https://vid.tasty.co/output/128564/hls24_1553875813.m3u8'
      },
      {
        name: 'Jacket Potato: The Pizazz',
        description: "This potato encompasses the perfect balance of salty and sweet with bacon bits and a drizzle of maple syrup. It'll hit every craving! ",
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/207441.jpg',
        videoUrl: 'https://vid.tasty.co/output/127438/hls24_1552684889.m3u8'
      },
      {
        name: 'Jacket Potato: The Old Fashioned',
        description: 'Bring back some nostalgia with this old fashioned jacket potato recipe, featuring buttery and tender potatoes that are smothered in cheese and cooked to perfection.',
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/207429.jpg',
        videoUrl: 'https://vid.tasty.co/output/127428/hls24_1552684464.m3u8'
      },
      {
        name: 'Vegan Butternut Squash Al Pastor Tacos',
        description: 'Al pastor’s signature red-hued marinade produces flavorful bites of whatever it coats. Traditionally used to marinate meat, you can also enjoy the same punch of flavor with a vegan alternative. Here, we use butternut squash for its hearty texture and subtle sweetness, which play well with the warm al pastor spices.',
        thumbnailUrl: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/251104.jpg',
        videoUrl: 'https://vid.tasty.co/output/157291/hls24_1578681763.m3u8'
      },
      {
        name: 'Savoury Spaghetti With Meatballs',
        description: "Satisfy your cravings with this savory spaghetti and meatball dish that's bursting with flavor. This classic comfort food, inspired by Tasty.co and Rachel Ray, will have your taste buds dancing and your family asking for seconds.",
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/392f314a2b3f4361aee4e04772b86135.jpeg',
        videoUrl: null
      },
      {
        name: 'Jazzy Fried Chicken',
        description: "The chicken is marinated in a flavorful blend of spices, buttermilk, and hot sauce, ensuring each crispy bite is packed with a punch of flavor. Whether you're serving it up for a backyard barbecue or a cozy dinner at home, this fried chicken will have you tapping your toes and craving seconds in no time. So, grab your apron and get ready to fry up some finger-lickin' goodness that'll have everyone singing your praises!",
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/619a0c50f6bb4b2f9ef84913213cf80e.jpeg',
        videoUrl: null
      },
      {
        name: 'Jazzy Shrimp And Grits',
        description: 'This content is intended solely for users of legal drinking age. Drink responsibly.',
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/0bb8372ebc424cdda4253b025857832b.jpeg',
        videoUrl: null
      },
      {
        name: 'Sweet Potato Lentil Curry',
        description: '',
        thumbnailUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/c393205fd7214635b0a6d531f475e498.jpeg',
        videoUrl: null
      },
      {
        name: 'Instant Energy Ginger Citrus Spritz',
        description: 'This content is intended solely for users of legal drinking age. Drink responsibly.',
        thumbnailUrl: 'https://s3.amazonaws.com/video-api-prod/assets/eca306b2eb26452f9a59cc2b74b5850b/citrus.jpg',
        videoUrl: 'https://vid.tasty.co/output/129790/hls24_1555016887.m3u8'
      }
    ]
    return NextResponse.json(recipes)

  } catch (error) {
    console.log('error', error)
    return NextResponse.error()
  }
};
