
import contentful
// import contentful from "contentful"
var  space  = require("postcss/lib/list");

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export default client;
